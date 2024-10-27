import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export const ImageInput = () => {
  return (
    <div className="mb-2">
      <Label
        className="capitalize"
        htmlFor="image"
      >Image</Label>
      <Input
        id="image"
        name="image"
        type="file"
        required
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  )
}
