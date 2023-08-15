import {gql, useLazyQuery} from '@apollo/client';
import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

export interface TestScreenProps {}

export const TestScreen: React.FC<TestScreenProps> = props => {
  const [getData] = useLazyQuery(gql`
    query aa {
      getOrders {
        error
        message
        result
      }
    }
  `);

  const handleGetData = async () => {
    try {
      const {data} = await getData();

      console.log(data); // <-- The data is undefined when downgrading to 3.7
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Get Data" onPress={handleGetData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
