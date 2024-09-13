import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Alert, Platform, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import { Button, FloatingActionButton, Spacer } from 'twrn-components';
import { Forms, KeyboardAvoidView } from '../../src/components';
import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { EInputType } from '../../src/components/organisms/forms/forms.enum';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { TWStyles } from 'twrn-styles';
import type { InputField } from '../../src/components/organisms/forms/forms.type';

export const relationList = [
  {
    label: 'AYAH',
    value: 'AYAH'
  },
  {
    label: 'IBU',
    value: 'IBU',
  },
  {
    label: 'SAUDARA LAKI-LAKI',
    value: 'SAUDARA LAKI-LAKI',
  },
  {
    label: 'SAUDARA PEREMPUAN',
    value: 'SAUDARA PEREMPUAN',
  },
  {
    label: 'PAMAN',
    value: 'PAMAN',
  },
  {
    label: 'BIBI',
    value: 'BIBI',
  },
  {
    label: 'SEPUPU',
    value: 'SEPUPU',
  },
]

export type TEmergencyContact = {
  contactName: string;
  date: string;
  relation: string;
  phoneNumber: string;
  address1: string;
  address2: string;
  address3: string;
}

export default function App() {

  const inputFields = useMemo(() => {
    return [
        {
            inputType: EInputType.TEXT_FIELD,
            controlName: 'contactName',
            title: 'Contact Name',
            placeholder: 'Contact Name',
            isRequired: true,
            maxLength: 30,
            // icon: <Ionicons name="person" size={24} color={PruColor.grey99} />
        },
        {
            inputType: EInputType.DROPDOWN,
            controlName: 'relation',
            title: 'Relation',
            placeholder: 'Relation',
            isRequired: true,
            maxLength: 30,
            dropdownProps: {
              keyValue: 'value',
              data: [{label: 'a',value: 'a'},{label: 'c', value:'c'}]
            }
        },
        {
          inputType: EInputType.DATE_TIME,
          controlName: 'date',
          title: 'Date',
          placeholder: new Date(),
          isRequired: true,
          dateTimeProps: {
            dateFormat: 'DD MMMM YYYY'
          }
      },
        {
            inputType: EInputType.TEXT_FIELD,
            controlName: 'phoneNumber',
            title: 'Phone Number',
            placeholder: 'Phone Number',
            isRequired: true,
            maxLength: 30,
        },
        {
            inputType: EInputType.TEXT_FIELD,
            controlName: 'address1',
            title: 'Street',
            placeholder: 'Street',
            isRequired: true,
            maxLength: 30,
        },
        {
            inputType: EInputType.TEXT_FIELD,
            controlName: 'address2',
            title: 'RT RW',
            placeholder: 'RT RW',
            isRequired: true,
            maxLength: 30,
            icon: <View style={{ height: 24, width: 24 }} />
        },
        {
            inputType: EInputType.TEXT_FIELD,
            controlName: 'address3',
            title: 'District',
            placeholder: 'District',
            isRequired: true,
            maxLength: 30,
            icon: <View style={{ height: 24, width: 24 }} />
        },
    ] as InputField[];
}, []);

const schema = useMemo(() => {
    return yup.object().shape({
        contactName: yup.string().required('AgentProfile:pd_common_warning_mandatory_empty'),
        relation: yup.string().required('AgentProfile:pd_common_warning_mandatory_empty'),
        date: yup.string().required('AgentProfile:pd_common_warning_mandatory_empty'),
        phoneNumber: yup.string().required('AgentProfile:pd_common_warning_mandatory_empty'),
        address1: yup.string().required('AgentProfile:pd_common_warning_mandatory_empty'),
        address2: yup.string().required('AgentProfile:pd_common_warning_mandatory_empty'),
        address3: yup.string().required('AgentProfile:pd_common_warning_mandatory_empty'),
    });
}, []);

  const {
    control: control,
    handleSubmit: handleSubmit,
    formState: { isValid, errors },
    setValue,
} = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
        contactName: '',
        relation: '',
        date: '',
        phoneNumber: '',
        address1: '',
        address2: '',
        address3: '',
    } as TEmergencyContact,
});

const checkError = useMemo(() => {
  const keyError = Object.keys(errors);
  return keyError.length > 0 ? errors : undefined
}, [errors])

const onSubmit = (data) => {
  console.log(data)
  Alert.alert('dnwd')
}

  return (
    <SafeAreaView style={TWStyles.displayFlex}>

      <KeyboardAvoidView>
      <View style={styles.container}>
        <Forms inputFields={inputFields} formControl={control} setFormControl={setValue} errors={errors} />
        <Button text='Test' onPress={handleSubmit(onSubmit)} />
      </View>
        <FloatingActionButton position='bottom-center' />
      </KeyboardAvoidView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    padding: 12
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  animatedContainer: {
    overflow: 'hidden',
    // position: 'absolute'
  },
  content: {
    padding: 10,
    backgroundColor: 'red',
    width: 200

  },
  wrapper: {
    position: 'absolute',
    zIndex: 20,
    borderWidth: 1,
  },
  expanded: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  collapsed: {
    borderRadius: 10,
  }
});
