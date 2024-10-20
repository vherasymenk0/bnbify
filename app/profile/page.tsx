import { FormContainer } from '~/components/form/FormContainer'
import { fetchProfile, updateProfileAction, updateProfileImageAction } from '~/utils/actions'
import { FormInput } from '~/components/form/FormInput'
import { SubmitButton } from '~/components/form/SubmitButton'
import { ImageInputContainer } from '~/components/form/ImageInputContainer'

async function ProfilePage() {
  const { profileImage, username, firstName, lastName } = await fetchProfile()
  return (
    <section>
      <h1 className="text-2xl mb-8 font-semibold capitalize">user profile</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          action={updateProfileImageAction}
          image={profileImage}
          name={username}
          text="Update Profile Image"
        />
        <FormContainer action={updateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              type="text"
              name="firstName"
              label="First Name"
              defaultValue={firstName}
            />
            <FormInput
              type="text"
              name="lastName"
              label="Last Name"
              defaultValue={lastName}
            />
            <FormInput
              type="text"
              name="username"
              label="Username"
              defaultValue={username}
            />
          </div>
          <SubmitButton className="mt-8">Update Profile</SubmitButton>
        </FormContainer>
      </div>
    </section>
  )
}

export default ProfilePage
