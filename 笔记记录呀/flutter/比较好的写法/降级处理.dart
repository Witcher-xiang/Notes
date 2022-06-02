/*
  通过indexWhere，好几层来进行降级处理，
  orElese为否则的意思
*/
getBigPic() {
  V2TimImage? img;
  img = widget.message.imageElem!.imageList!.firstWhere(
      (e) => e?.type == Const.V2_TIM_IMAGE_TYPES['SMALL'],
      orElse: () => null);
  img = widget.message.imageElem!.imageList!.firstWhere(
      (e) => e?.type == Const.V2_TIM_IMAGE_TYPES['BIG'],
      orElse: () => null);
  img = widget.message.imageElem!.imageList!.firstWhere(
      (e) => e?.type == Const.V2_TIM_IMAGE_TYPES['ORIGINAL'],
      orElse: () => null);
  return img == null ? '' : img.url!;
}
