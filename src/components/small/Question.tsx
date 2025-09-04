import { CustomDropdownFAQ } from "../mini/CustomDropdownFAQ"
import { Hero } from "../mini/Hero"

export const Question = () => {
  return (
    <div className="md:py-20 py-10 bg-gradient-to-b from-gray-100 to-gray-200">
      <Hero mainText="Frequently Asked Questions" />
      <CustomDropdownFAQ />
    </div>
  )
}
