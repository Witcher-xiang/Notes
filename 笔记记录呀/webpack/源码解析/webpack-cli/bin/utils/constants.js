const NON_COMPILATION_ARGS = [
	"init",   // 创建一份webpack配置文件
	"migrate", // 进行webpack版本迁移 
	"serve",   // 运行webpack-serve
	"generate-loader",  // 生成webpack loader代码
	"generate-plugin",  // 生成webpack plugin代码
	"info"							// 返回本地环境的一些相关信息 比如npm的相关信息
	 // add remove 也有
];

const CONFIG_GROUP = "Config options:";
const BASIC_GROUP = "Basic options:";
const MODULE_GROUP = "Module options:";
const OUTPUT_GROUP = "Output options:";
const ADVANCED_GROUP = "Advanced options:";
const RESOLVE_GROUP = "Resolving options:";
const OPTIMIZE_GROUP = "Optimizing options:";
const DISPLAY_GROUP = "Stats options:";
const GROUPS = {
	CONFIG_GROUP,
	BASIC_GROUP,
	MODULE_GROUP,
	OUTPUT_GROUP,
	ADVANCED_GROUP,
	RESOLVE_GROUP,
	OPTIMIZE_GROUP,
	DISPLAY_GROUP
};

const WEBPACK_OPTIONS_FLAG = "WEBPACK_OPTIONS";

module.exports = {
	NON_COMPILATION_ARGS,
	GROUPS,
	WEBPACK_OPTIONS_FLAG
};
