
import Accordion from "../components/Accordion";
import useAnimateOnScroll from "../hooks/AnimateOnScroll";
import './HomePage.css'

export default function Sustainability() {
  useAnimateOnScroll()

  return (
    <div className="overflow-hidden">
    <h1 className="mx-5 mb-4 text-2xl font-bold md:mx-32" >Our Clothes and How To Care</h1>
    <div className="mb-20 overflow-hidden rounded-lg notRightAnimated">
    
      <Accordion
        title=" What Makes Plant Cloth Hoodies Sustainable?"
        answer="Plant Cloth hoodies are crafted from eco-friendly materials such as organic cotton, recycled polyester, and Tencel. Our commitment to sustainability extends beyond fabrics; we utilize low-impact dyes and environmentally friendly manufacturing processes. Each hoodie is designed to minimize waste and reduce our carbon footprint. By choosing sustainable materials, we ensure that our products are not only comfortable but also contribute positively to the planet. We believe in making fashion that doesn't compromise the environment."
      />
      <Accordion
        title="How Do We Contribute to Environmental Conservation?"
        answer="Every Plant Cloth hoodie purchased helps support environmental conservation efforts. A portion of our profits is donated to organizations dedicated to protecting forests and oceans. Additionally, by using sustainable materials, we reduce the demand for harmful manufacturing processes that damage ecosystems. Each hoodie serves as a reminder that fashion can be both stylish and responsible. Together, we can make a significant impact on our planet's health."
      />
      <Accordion
        title="Why Choose Organic Cotton for Our Hoodies?"
        answer="Organic cotton is grown without harmful pesticides and synthetic fertilizers, making it a safer choice for both the environment and farmers. At Plant Cloth, we prioritize using organic cotton to create soft, breathable hoodies that are gentle on the skin. This method of farming also conserves water and promotes biodiversity. By opting for organic cotton, we support sustainable agriculture practices that protect our planet. It's a choice that reflects our commitment to quality and environmental stewardship."
      />
     
      
      
      <Accordion
        title="Can Sustainable Fashion Be Stylish?"
        answer="Absolutely! At Plant Cloth, we believe that sustainable fashion can and should be stylish. Our designs are crafted to combine comfort, functionality, and contemporary aesthetics. We create versatile hoodies that can be worn for various occasions, from casual outings to cozy nights in. Sustainable doesn't mean sacrificing style; it means embracing a new way of thinking about fashion. Join us in redefining what it means to be fashionable in an eco-conscious world."
      />
      <Accordion
        title="How Can I Care for My Plant Cloth Hoodie?"
        answer="Caring for your Plant Cloth hoodie is essential for maintaining its quality and sustainability. We recommend washing in cold water and air drying to minimize energy consumption. Avoid using harsh detergents and opt for natural alternatives when possible. Proper care will extend the life of your hoodie and keep it looking great. By taking these simple steps, you contribute to a more sustainable fashion cycle."
      />

      <Accordion
        title="What’s the Impact of Fast Fashion on the Environment?"
        answer="Fast fashion contributes significantly to environmental degradation, from excessive waste to pollution. The rapid production cycles lead to overconsumption and a culture of disposability. At Plant Cloth, we aim to challenge this model by promoting slow fashion principles. By creating high-quality, timeless pieces, we encourage consumers to invest in their wardrobes rather than constantly replace them. Your choice to shop sustainably helps combat the negative effects of fast fashion."
      />
      <Accordion
        title="Are Plant Cloth Products Vegan?"
        answer="While our products are made from sustainable materials, we are also committed to offering vegan-friendly options. Many of our hoodies are free from animal products, ensuring that they align with a vegan lifestyle. We continually strive to expand our range to include more vegan materials. Our dedication to cruelty-free fashion means you can wear our hoodies with pride. Each purchase supports a compassionate approach to clothing."
      />
      <Accordion
        title="What Are the Benefits of Sustainable Fashion?"
        answer="Sustainable fashion offers numerous benefits, from reducing environmental impact to supporting ethical practices. By choosing sustainable brands like Plant Cloth, you help decrease pollution and conserve resources. It promotes a healthier planet and fosters social responsibility within the fashion industry. Additionally, sustainable fashion often focuses on quality, resulting in longer-lasting products. Embracing sustainable choices contributes to a brighter future for the fashion industry and the environment."
      />
    </div>

    <h1 className="mx-5 mb-4 text-2xl font-bold md:mx-32" >How do I place my order?</h1>
    <div className="mb-20 rounded-lg ">
    
      <Accordion
        title=" How do I place my order?"
        answer="just click checkout ya"
      />
    </div>
    </div>
  )
}
