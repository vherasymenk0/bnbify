import { Label } from '~/components/ui/label'
import { Input, InputProps as IProps } from '~/components/ui/input'

interface InputProps extends IProps {
  label?: string
}

export const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  placeholder,
  required = true
}: InputProps) => {
  return (
    <div className="mb-2">
      {label ?
        <Label
          htmlFor={name}
          className="capitalize"
        >
          {label}
        </Label>
        : null
      }
      <Input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  )
}
