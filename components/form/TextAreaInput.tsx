import { Textarea, TextareaProps } from '~/components/ui/textarea'
import { Label } from '~/components/ui/label'

type TextAreaInputProps = {
  label?: string
} & TextareaProps

export const TextAreaInput = ({
  name,
  label,
  className,
  rows = 5,
  ...props
}: TextAreaInputProps) => {
  return (
    <div className="mb-2">
      <Label
        htmlFor={name}
        className="capitalize"
      >
        {label || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        rows={rows}
        className={`leading-loose ${className}`}
        {...props}
      />
    </div>
  )
}
