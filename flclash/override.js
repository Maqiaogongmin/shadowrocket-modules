// FLClash / Mihomo override
// Migrated from the user's Quantumult X / Stash routing setup.
// No proxies, subscription URLs, credentials, or certificates are stored here.

function main(config) {
  config = config || {};

  const proxies = Array.isArray(config.proxies) ? config.proxies : [];
  const proxyNames = proxies
    .map(p => p && p.name)
    .filter(Boolean)
    .filter(n => !["DIRECT", "REJECT", "REJECT-DROP", "PASS", "COMPATIBLE"].includes(n));

  const providerNames = Object.keys(config["proxy-providers"] || {});

  // Keep original proxy providers, but rebuild groups/rules for a predictable cross-device setup.
  const mainProxy = {
    name: "Proxy",
    type: "select",
    proxies: proxyNames.length ? [...proxyNames, "DIRECT"] : ["DIRECT"]
  };
  if (providerNames.length) mainProxy.use = providerNames;

  const group = (name, options) => ({
    name,
    type: "select",
    proxies: options
  });

  config["proxy-groups"] = [
    mainProxy,
    group("Telegram", ["DIRECT", "Proxy", "REJECT"]),
    group("AdvertisingLite", ["DIRECT", "Proxy", "REJECT"]),
    group("网易云音乐", ["DIRECT", "Proxy", "REJECT"]),
    group("Apple", ["DIRECT", "Proxy", "REJECT"]),
    group("WeChat", ["DIRECT", "Proxy", "REJECT"]),
    group("Shawn", ["DIRECT", "Proxy", "REJECT"]),
    group("DouBan", ["DIRECT", "Proxy", "REJECT"]),
    group("YouTube", ["DIRECT", "Proxy"]),
    group("炉石", ["Proxy"]),
    group("全球加速", ["DIRECT", "Proxy"]),
    group("哔哩哔哩", ["DIRECT", "Proxy"]),
    group("声田音乐", ["DIRECT", "Proxy"]),
    group("国际媒体", ["DIRECT", "Proxy"])
  ];

  const rp = config["rule-providers"] || {};
  Object.assign(rp, {
    wechat: {
      type: "http",
      behavior: "classical",
      format: "yaml",
      interval: 172800,
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/WeChat/WeChat.yaml"
    },
    telegram: {
      type: "http",
      behavior: "classical",
      format: "yaml",
      interval: 172800,
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml"
    },
    douban: {
      type: "http",
      behavior: "classical",
      format: "yaml",
      interval: 172800,
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/DouBan/DouBan.yaml"
    },
    javdb: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 172800,
      url: "https://yfamilys.com/rule/Javdb.list"
    },
    youtube: {
      type: "http",
      behavior: "classical",
      format: "yaml",
      interval: 172800,
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml"
    },
    blizzard: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 172800,
      url: "https://yfamilys.com/rule/Blizzard.list"
    },
    spotify: {
      type: "http",
      behavior: "classical",
      format: "yaml",
      interval: 172800,
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Spotify/Spotify.yaml"
    },
    streaming: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 172800,
      url: "https://raw.githubusercontent.com/ddgksf2013/Filter/master/Streaming.list"
    },
    apple: {
      type: "http",
      behavior: "classical",
      format: "yaml",
      interval: 172800,
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple.yaml"
    },
    "china-max-domain": {
      type: "http",
      behavior: "domain",
      format: "text",
      interval: 172800,
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/ChinaMax/ChinaMax_Domain.txt"
    },
    "china-max-ip": {
      type: "http",
      behavior: "ipcidr",
      format: "text",
      interval: 172800,
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/ChinaMax/ChinaMax_IP_No_IPv6.txt"
    },
    "asn-china": {
      type: "http",
      behavior: "classical",
      format: "yaml",
      interval: 172800,
      url: "https://raw.githubusercontent.com/VirgilClyne/GetSomeFries/main/ruleset/ASN.China.yaml"
    }
  });
  config["rule-providers"] = rp;

  config.rules = [
    // Original QX excluded_routes -> direct
    "IP-CIDR,239.255.255.250/32,DIRECT,no-resolve",
    "IP-CIDR,24.105.30.129/32,DIRECT,no-resolve",
    "IP-CIDR,185.60.112.157/32,DIRECT,no-resolve",
    "IP-CIDR,185.60.112.158/32,DIRECT,no-resolve",
    "IP-CIDR,182.162.132.1/32,DIRECT,no-resolve",

    // Block STUN
    "PROTOCOL,STUN,REJECT",

    // Local custom rules
    "DOMAIN-SUFFIX,tailscale.com,Proxy",
    "DOMAIN-SUFFIX,0414004.xyz,Proxy",
    "DOMAIN,backend.intelalloc.com,DIRECT",
    "DOMAIN,api.aipaibox.com,DIRECT",
    "DOMAIN-SUFFIX,yfamilys.com,Proxy",
    "DOMAIN-SUFFIX,ddgksf2013.top,Proxy",
    "DOMAIN,p.l.qq.com,REJECT",
    "DOMAIN-SUFFIX,pgdt.gtimg.cn,REJECT",
    "DOMAIN-SUFFIX,gdt.qq.com,REJECT",
    "DOMAIN,ad.12306.cn,DIRECT",
    "DOMAIN,sdkapp.uve.weibo.com,DIRECT",
    "DOMAIN-KEYWORD,github,Proxy",

    // LAN
    "IP-CIDR,10.0.0.0/8,DIRECT,no-resolve",
    "IP-CIDR,127.0.0.0/8,DIRECT,no-resolve",
    "IP-CIDR,172.16.0.0/12,DIRECT,no-resolve",
    "IP-CIDR,192.168.0.0/16,DIRECT,no-resolve",
    "IP-CIDR,224.0.0.0/24,DIRECT,no-resolve",
    "IP-CIDR,182.254.116.0/24,DIRECT,no-resolve",

    // Remote routing rules
    "RULE-SET,wechat,WeChat",
    "RULE-SET,telegram,Telegram",
    "RULE-SET,douban,DouBan",
    "RULE-SET,javdb,Proxy",
    "RULE-SET,youtube,YouTube",
    "RULE-SET,blizzard,炉石",
    "RULE-SET,spotify,声田音乐",
    "RULE-SET,streaming,国际媒体",
    "RULE-SET,apple,Apple",

    // China direct
    "RULE-SET,china-max-domain,DIRECT",
    "RULE-SET,china-max-ip,DIRECT,no-resolve",
    "RULE-SET,asn-china,DIRECT,no-resolve",

    "MATCH,Proxy"
  ];

  config.ipv6 = false;
  config["unified-delay"] = true;
  config["tcp-concurrent"] = true;

  return config;
}
