import type { Model } from "./types"

/**
 * 用于创建 .env.example 文件，不要直接填写敏感信息。
 * 以 CLIENT_ 开头的变量会暴露给前端
 */
export const defaultEnv = {
  CLIENT_GLOBAL_SETTINGS: {
    APIKey: "",
    password: "",
    enterToSend: true
  },
  CLIENT_SESSION_SETTINGS: {
    // 0-2
    title: "",
    saveSession: true,
    APITemperature: 0.6,
    continuousDialogue: true,
    APIModel: "gpt-3.5-turbo" as Model
  },
  CLIENT_DEFAULT_MESSAGE: `chezai kuaixue
- 本站为快雪空空熊部署公益版本 完全免费 谨防受骗！
- 点击每条消息前的头像，可以锁定对话，作为角色设定。[查看更多使用技巧](https://chez1.cn#使用技巧)。
- 有任何建议和合作请联系9371839@gmail.com，本网站为公益网站不收取任何费用，只是为爱发电的大学生仅此而已
- 由于本站被人恶意刷取token，所以进行填写密码使用，请进入交流群免费获取密码[加入群聊](https://cznm-1302520615.cos.ap-nanjing.myqcloud.com/tmp_0a3e572d3aeb8f91f7027a6c4a7c2bf73fd0d9bc00f8c8dc.jpg)
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5-turbo": 4 * 1024,
    "gpt-4": 8 * 1024,
    "gpt-4-32k": 32 * 1024
  } as Record<Model, number>,
  OPENAI_API_BASE_URL: "api.openai.com",
  OPENAI_API_KEY: "",
  TIMEOUT: 30000,
  PASSWORD: "",
  SEND_KEY: "",
  SEND_CHANNEL: 9,
  NO_GFW: false
}

export type SessionSettings = typeof defaultEnv.CLIENT_SESSION_SETTINGS
