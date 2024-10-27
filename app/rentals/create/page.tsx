import { FormContainer } from '~/components/form/FormContainer'
import { createPropertyAction } from '~/utils/actions'
import { FormInput } from '~/components/form/FormInput'
import { SubmitButton } from '~/components/form/SubmitButton'
import CategoriesInput from '~/components/form/CategoriesInput'
import { TextAreaInput } from '~/components/form/TextAreaInput'
import CountriesInput from '~/components/form/CountriesInput'
import { ImageInput } from '~/components/form/ImageInput'
import CounterInput from '~/components/form/CounterInput'
import AmenitiesInput from '~/components/form/AmenitiesInput'

const description = 'Glamping Tuscan Style in an Aframe Cabin Tent, nestled in a beautiful olive orchard. AC, heat, Queen Bed, TV, Wi-Fi and an amazing view. Close to Weeki Wachee River State Park, mermaids, manatees, Chassahwitzka River and on the SC Bike Path. Kayaks available for rivers. Bathhouse, fire pit, Kitchenette, fresh eggs. Relax & enjoy fresh country air. No pets please. Ducks, hens and roosters roam the grounds. We have a Pot Cake Rescue from Bimini, Retriever and Pom dog. The space is inspiring and relaxing. Enjoy the beauty of the orchard. Spring trees are in blossom and harvested in Fall. We have a farm store where we sell our farm to table products'

function CreateProperty() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Property</h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin Latvia"
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here"
            />
            <FormInput
              name="price"
              type="number"
              inputMode="numeric"
              label="Price ($)"
              min={0}
              required
              defaultValue={100}
            />
            <CategoriesInput/>
            <TextAreaInput
              name="description"
              label="Description (10 - 1000 Words)"
              defaultValue={description}
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CountriesInput/>
            <ImageInput/>
          </div>
          <h3 className="text-lg mt-8 mb-4 font-medium">Accommodation Details</h3>
          <CounterInput detail="guests"/>
          <CounterInput detail="bedrooms"/>
          <CounterInput detail="beds"/>
          <CounterInput detail="baths"/>
          <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
          <AmenitiesInput/>
          <SubmitButton className="mt-12">Create Rental</SubmitButton>
        </FormContainer>
      </div>
    </section>
  )
}

export default CreateProperty
