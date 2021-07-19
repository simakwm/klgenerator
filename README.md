# klgenerator
knownlinks file generator for [as-stats](https://github.com/manuelkasper/AS-Stats), so I don't need to create it from scratch.
Useful if you have a bunch of sub-interfaces and etc.


## INSTALL
You must have node 14+ and npm installed.

```
git clone https://github.com/simakwm/klgenerator.git
cd klgenerator
npm install
```


## USAGE
First you need to use [snmpwalk](http://www.net-snmp.org/docs/man/snmpwalk.html) to create a descriptions.txt file into klgenerator's directory.
Make sure you have **snmp-mibs-downloader** installed as well. 

Example:

```
snmpwalk -v2c -c public your.router.ip IF-MIB::ifDescr >descriptions.txt
```
Edit config.js to fit your needs.


Now you can run it:

```
node ./src/index.js
```

You're done.
