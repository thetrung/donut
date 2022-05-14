import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as tezallet from 'tezallet'

const demo = async () => {

  tezallet.init_tezos_toolkit(tezallet.RPC_URL.ECAD_LABS_Mainnet)

  const mnemonic =
  'run include giggle half dizzy worth broccoli '
  +'faith current wheel depth juice reduce width doctor';

  // Temple/Kukai address at index = [0]
  const address = 'tz1hYe3pVtPq8JprqjFCSxrhpbfHPwDYVLXX'

  const signer = tezallet.create_signer(mnemonic, 0)

  const public_key = await signer.publicKeyHash()
  console.log(`${public_key} === ${address}`)

  const balance = await tezallet.get_balance(public_key)
  console.log(`balance: ${balance}`)

  // await tezallet.transfer(public_key, 1, true)

  // const delegates = await tezallet.toolkit.rpc.getDelegate(address)
  // console.log(delegates)

  tezallet.reset()

}

export default function App() {

  demo()

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
