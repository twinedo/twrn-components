import { useState, useRef, useEffect } from 'react';
import { View, Text, Animated, Pressable } from 'react-native';
import { styles } from './accordion.style';
import type { TAccordionProps } from './accordion.type';
import Entypo from 'react-native-vector-icons/Entypo';

const Accordion = (props: TAccordionProps) => {
  const { children,
    containerStyle,
    titleContainerStyle,
    titleStyle,
    bodyContainerStyle,
    isShow = true,
    disabled = false,
    title = 'Press me',
    icon,
  } = props;
  const [isVisible, setIsVisible] = useState(disabled ? true : isShow);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isVisible ? contentHeight : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isVisible, contentHeight, animatedHeight]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable onPress={() => !disabled && toggleVisibility()} style={[styles.header, titleContainerStyle]}>
        <Text style={[titleStyle]}>{title}</Text>
        {icon && <Entypo name={isVisible ? 'chevron-up' : 'chevron-down'} />}
      </Pressable>
      <Animated.View
        style={[
          styles.animatedContainer,
          { height: animatedHeight },
        ]}
      >
        <View
          style={[styles.content, bodyContainerStyle]}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setContentHeight(height);
          }}
        >
          {children}
        </View>
      </Animated.View>

    </View>
  );
};

export default Accordion;
