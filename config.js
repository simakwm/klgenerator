export default {
  routerIP: 'your_router_ip',
  ignoredInterfaces: [
    /^VoIP.*/,
    /^Loop.*/,
    /^Tunnel.*/,
    /^.*Null.*/,
    /.*mpls.layer.*/,
    /.*GigabitEthernet.*/,
    /^Port-channel1$/
  ],
  rate: 1024
}
