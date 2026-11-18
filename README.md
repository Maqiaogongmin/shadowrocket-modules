# Shadowrocket / Stash / FLClash 配置

个人使用的代理规则与去广告模块集合，主要由原 Quantumult X 配置迁移而来。

## Shadowrocket

根目录保留原有 Shadowrocket 模块：

- `YouTube_AdClean.sgmodule` — YouTube 去广告
- `Amap_AdClean.sgmodule` — 高德地图净化
- `Goofish_AdClean.sgmodule` — 闲鱼净化
- `JavDB_AdClean_EXPERIMENTAL.sgmodule` — JavDB APP 净化（实验版）

## Stash

位于 `stash/`：

- `stash/config.yaml` — 主配置（DNS / 策略组 / 分流）
- `stash/overrides/*.stoverride` — YouTube / 高德 / 闲鱼 / JavDB 覆写

## FLClash

位于 `flclash/`：

- `flclash/override.js` — 给已有节点/订阅自动补上策略组与分流
- `flclash/README.md` — Android / Windows 导入说明

> 仓库不包含个人代理节点、订阅地址、UUID、密码或 CA 证书。
