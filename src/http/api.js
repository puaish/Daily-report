import request from "./http"
// 获取用户信息
// https://www.mrbaogao.com/api/v3/user?userId=28872&dzqSid=85801523-1681349716759&dzqPf=pc
export const userInfoAPI = (params)=> request.get("/v3/user",{params})

// 获取首页左侧栏
// https://www.mrbaogao.com/api/v3/categories?dzqSid=85801523-1681349716759&dzqPf=pc
export const categoriesAPI = (params)=> request.get("/v3/categories",{params})

// 获取tabs 标签子菜单列表 
// https://www.mrbaogao.com/api/v3/thread.typelist?dzqSid=85801523-1681349716759&dzqPf=pc
export const threadTypeListAPI = (params)=> request.get("/v3/thread.typelist",{params})

// 获取首页 右侧推荐内容
// https://www.mrbaogao.com/api/v3/thread.recommends?dzqSid=85801523-1681349716759&dzqPf=pc
export const RecommendsAPI = (params)=> request.get("/v3/thread.recommends",{params})

// 论坛
// https://www.mrbaogao.com/api/v3/forum?dzqSid=85801523-1681349716759&dzqPf=pc
export const forumAPI = (params)=> request.get("/v3/forum",{params})

// 置顶文章
// https://www.mrbaogao.com/api/v3/thread.stick?dzqSid=85801523-1681349716759&dzqPf=pc
export const stickAPI = (params)=> request.get("/v3/thread.stick",{params})

// 帖子列表数据 https://www.mrbaogao.com/api/v3/thread.list?perPage=10&page=1&filter[essence]=0&filter[attention]=0&filter[sort]=1&scope=0&dzqSid=85801523-1681349716759&dzqPf=pc
export const threadListAPI = (params)=> request.get("/v3/thread.list",{params})

