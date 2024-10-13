import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'

interface Props {
  name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
}

export const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  placeholder,
  required = true
}: Props) => {
  return (
    <div className="mb-2">
      {label ? <Label htmlFor={name} className="capitalize">{label}</Label> : null}
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
