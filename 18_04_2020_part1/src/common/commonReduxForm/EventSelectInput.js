import React from 'react'
import { Form, Select,Label } from 'semantic-ui-react'

const EventSelectInput = ({input,type,placeholder,options,multiple,meta:{touched,error}}) => {
    //console.log(input)
    return (
        <Form.Field error={touched && !!error}>
            <Select 
            value={input.value || null}
            onChange={(e, data) => input.onChange(data.value)}
            type={type}
            options={options}
            multiple={multiple}
            placeholder={placeholder}
            />
            {touched && error && <Label>{error}</Label>}
        </Form.Field>
    )
}

export default EventSelectInput