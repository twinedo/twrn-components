import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { TWStyles } from 'twrn-styles'
import type { TKeyboardAvoidViewProps } from './keyboard-avoid-view.type'
import { EKeyboardAvoidBehavior } from './keyboard-avoid-view.enum';

const KeyboardAvoidView = (props: TKeyboardAvoidViewProps) => {
  const { children } = props;
  return (
    <KeyboardAvoidingView
      style={TWStyles.displayFlex}
      behavior={Platform.OS === 'ios' ? EKeyboardAvoidBehavior.PADDING : EKeyboardAvoidBehavior.HEIGHT}
      >
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <ScrollView style={TWStyles.displayFlex} bounces={false}>
          {children}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidView
