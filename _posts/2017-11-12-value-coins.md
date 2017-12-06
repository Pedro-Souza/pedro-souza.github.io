---
layout: post
title:  "Value Coins"
date:   2017-11-12
excerpt: "Simples cli para obter a cotação de determinada moeda"
project: true
tags: [Criptomoeda, typescript]
comments: true
---

### Value Coins

This is a simple project maded in typescript for consume the Poloniex API and Bittrex,
through this project you can get the value of cryptocoins.

Start your project using this command:
```
npm install -g value-coins
```

Command to use:
```
$ value-coins --coin { initials here } --exchange {exchange name}
```

NOTE: posible exchanges are [Poloniex](https://poloniex.com/exchange) and [Bittrex](https://bittrex.com/Home/Markets). More yet to come.

Example:
```
$ value-coins --coin ETH --exchange poloniex
```
Or
```
$ value-coins --coin eth --all 
```


### Demo:
![demo](/images/demoValueCoins.png)