/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { Table, message, Spin } from 'antd';
import { connect } from 'umi';
import { ConnectState } from '@/models/connect';

import { FormTableProps } from '@/components/form/FormTable';

type EntranceModalProps = Pick<FormTableProps, 'onCancel' | 'onOk' | 'value' | 'location'>;

const type = 'DragableBodyRow';

// 拖拽组件
const DragableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
  const ref = React.useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: monitor => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: item => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    item: { type, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));
  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

class DragSortingTable extends React.Component<any, any> {
  state = {
    data: [],
  };

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    // if (!prevState.data[0]) {
    return {
      data: nextProps.list,
    };
    //   }

    // return false;
  }

  components = {
    body: {
      row: DragableBodyRow,
    },
  };

  // 排序函数
  reorder = (newState: any) => {
    const entranceId = this.props?.entrance?.info?.advanceInfo?.entranceId;
    const { service } = this.props;
    const { data } = newState;
    const newData = {
      entranceId,
      sorts: {},
    };

    data.forEach(item => {
      newData.sorts[item.skillGroupId] = `${item.skillSort}`;
    });
    console.log('reorder执行了', newData.sorts);

    service(newData).then((res: any) => {
      if (res === true) message.success('拖拽成功');
      else message.error('拖拽失败');
      this.props.refresh();
    });
  };

  exchangeSort = (item01: any, item02: any) => {
    const temp = item01.skillSort;
    item01.skillSort = item02.skillSort;
    item02.skillSort = temp;
    return [item01, item02];
  };

  moveRow = (dragIndex: number, hoverIndex: number) => {
    const { data } = this.state;

    data.sort((a, b) => a.skillSort - b.skillSort);

    const tempArr = this.exchangeSort(dragRow, hoverRow);

    this.setState(
      update(this.state, {
        data: {
          $splice: [
            [dragIndex, 1, tempArr[1]],
            [hoverIndex, 1, tempArr[0]],
          ],
        },
      }),
      () => {
        this.reorder(this.state);
      },
    );
  };

  render() {
    const { columns, rowKey, loading } = this.props;

    console.log('this.state.data...', this.state.data);

    if (loading) return <Spin style={{ marginLeft: '50%', marginTop: '20%' }} spinning={loading} />;

    return (
      <DndProvider backend={HTML5Backend}>
        <Table
          rowKey={rowKey}
          columns={columns}
          dataSource={this.state.data || []}
          components={this.components}
          sortDirections={['ascend']}
          onRow={(_, index) => ({
            index,
            moveRow: this.moveRow,
          })}
          loading={loading}
        />
      </DndProvider>
    );
  }
}

export default connect(({ entrance }: ConnectState) => ({ entrance }))(DragSortingTable);
