# FLClash

这套配置用于 Android / Windows 上的 FLClash。

## 推荐方式：节点/订阅 + 覆写脚本

FLClash 本身保留你的节点或订阅，`override.js` 只负责自动生成：

- Proxy 手动选节点策略组
- Telegram / WeChat / Apple / YouTube / Spotify / 国际媒体等策略组
- 国内直连
- 本地自定义分流
- STUN 拦截
- 远程 rule-providers

脚本本身不包含节点、订阅链接、UUID、密码或证书。

## 导入

Raw URL：

`https://raw.githubusercontent.com/Maqiaogongmin/shadowrocket-modules/main/flclash/override.js`

FLClash：

1. 先导入自己的节点/机场订阅。
2. 配置列表 → 当前配置右侧菜单 → 更多 → 覆写。
3. 覆写模式选择「脚本」。
4. 进入「前往配置脚本」。
5. 通过 URL 导入上面的 `override.js`，保存。
6. 返回覆写页面，点选刚才的脚本，使其真正关联到这份配置。
7. 应用配置，并切换到「规则」模式。
8. 在代理/策略组页面进入 `Proxy`，手动选择实际节点。

## 注意

- FLClash/Mihomo 的覆写脚本只负责网络分流。
- Stash / Shadowrocket 的 HTTP Rewrite、MitM 和去广告脚本不能直接在 FLClash 中等价运行，因此 YouTube / 高德 / 闲鱼 / JavDB 的去广告覆写没有迁移到 FLClash。
- 如果脚本保存了但没有生效，最常见原因是没有在该配置的覆写页面把脚本“选中/关联”。
