# Stash 配置

这套配置由原 Quantumult X 配置迁移而来，节点不写入仓库。

## 文件

- `config.yaml`：主配置，包含 DNS、策略组、本地分流、远程规则集。
- `overrides/YouTube_AdClean.stoverride`：YouTube 去广告。
- `overrides/Amap_AdClean.stoverride`：高德地图净化。
- `overrides/Goofish_AdClean.stoverride`：闲鱼净化。
- `overrides/JavDB_AdClean_EXPERIMENTAL.stoverride`：JavDB 净化实验版。
- `overrides/TencentSports_AdClean.stoverride`：腾讯体育净化。

## 使用顺序

1. 在 Stash 中从 URL 下载 `config.yaml` 并设为当前配置。
2. 把你自己的节点手动添加进这份配置。主策略组 `Proxy` 使用 `include-all: true`，会自动收纳节点。
3. 在 Stash 的覆写中分别从 URL 安装需要的 `.stoverride` 文件。
4. 在 Stash 中生成并安装 CA 证书，随后在 iOS「设置 → 通用 → 关于本机 → 证书信任设置」中完全信任该证书。
5. JavDB 为实验版，建议最后单独启用测试。

## 说明

- 保留了原 QX 的 DNS、策略组、远程分流、本地分流和 STUN 拦截逻辑。
- 原 QX 的节点没有迁移。
- 原 QX 的 CA / p12 没有迁移，请使用 Stash 自己生成的 CA。
- 腾讯体育、YuRedirect、Pixiv、BoxJS、流媒体查询、IP 纯净度查询未迁移，因为此前已确定这些功能平时不用。
- ChinaMax 在 Stash 中拆成 Domain / IP 两个高效规则集，避免把巨型 classical 规则集直接加载进 iOS Network Extension。
