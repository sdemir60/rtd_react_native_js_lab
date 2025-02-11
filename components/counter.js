import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Count: {count}
      </Text>
      
      <Button 
        title="Artır"
        onPress={() => dispatch(increment())}
      />
      
      <Button 
        title="Azalt"
        onPress={() => dispatch(decrement())}
      />
      
      <Button 
        title="5 Ekle"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </View>
  );
};

export default Counter;