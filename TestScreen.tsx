import {gql, useLazyQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet} from 'react-native';

export interface TestScreenProps {}

export const TestScreen: React.FC<TestScreenProps> = props => {
  const [getData] = useLazyQuery(gql`
    query test {
      Media {
        id
      }
    }
  `);

  const handleGetData = async () => {
    try {
      const {data} = await getData();
      console.log('Success', data);
    } catch (error: any) {
      console.log('Error', error);
      Alert.alert('Error', error?.message);
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
