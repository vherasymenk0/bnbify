import { SubmitButton } from '~/components/form/SubmitButton'
import { FormInput } from '~/components/form/FormInput'
import { FormContainer } from '~/components/form/FormContainer'
import { createProfileAction } from '~/utils/actions'

function CreateProfilePage() {
  return (
    <section>
      <h1 className="text-2xl mb-8 font-semibold capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name"/>
            <FormInput type="text" name="lastName" label="Last Name"/>
            <FormInput type="text" name="username" label="Username"/>
          </div>
          <SubmitButton text="Create Profile" className="mt-8"/>
        </FormContainer>
      </div>
    </section>
  )
}

export default CreateProfilePage