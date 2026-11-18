# Shadowrocket / Stash 配置

个人使用的代理规则与去广告模块集合，主要由原 Quantumult X 配置迁移而来。

## Shadowrocket

根目录保留原有 Shadowrocket 模块：

- `YouTube_AdClean.sgmodule` — YouTube 去广告
- `Amap_AdClean.sgmodule` — 高德地图净化
- `Goofish_AdClean.sgmodule` — 闲鱼净化
- `JavDB_AdClean_EXPERIMENTAL.sgmodule` — JavDB APP 净化（实验版）

## Stash

Stash 版本位于 `stash/`：

- `stash/config.yaml` — 主配置（DNS / 策略组 / 分流）
- `stash/overrides/YouTube_AdClean.stoverride`
- `stash/overrides/Amap_AdClean.stoverride`
- `stash/overrides/Goofish_AdClean.stoverride`
- `stash/overrides/JavDB_AdClean_EXPERIMENTAL.stoverride`

详细使用方法见 `stash/README.md`。

> 仓库不包含个人代理节点、订阅地址或 CA 证书。JavDB 模块仍为实验版。
