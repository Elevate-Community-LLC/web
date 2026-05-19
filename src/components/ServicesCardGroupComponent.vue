<script setup lang="ts">
import { computed } from 'vue'
import ServiceCardComponent from '@/components/ServiceCardComponent.vue'

import solarImg from '@/assets/images/solar.jpg'
import newChapterImg from '@/assets/images/new-chapter.jpg'
import phoneAndComputerImg from '@/assets/images/phone-and-computer.jpg'
import card3Img from '@/assets/images/card-3.jpg'

const props = withDefaults(defineProps<{
  limit?: number
}>(), {
  limit: undefined
})

const services = [
  {
    href: '/services/solar-expertise',
    image: solarImg,
    title: 'Solar Expertise',
    content: 'We help solar companies identify operational bottlenecks, streamline workflows, improve cross-functional coordination, and build scalable internal processes that support sustainable growth.',
  },
  {
    href: '/services/implementation',
    image: newChapterImg,
    title: 'Implementation',
    content: 'From initial deployment to ongoing administration, we support the implementation, configuration, maintenance, and optimization of critical business platforms across your organization.',
  },
  {
    href: '/services/integration',
    image: phoneAndComputerImg,
    title: 'Integration',
    content: 'We design and maintain automations and integrations that reduce manual effort, improve data accuracy, and connect the systems your teams rely on every day.',
  },
  {
    href: '/services/optimization',
    image: card3Img,
    title: 'Optimization',
    content: 'We implement lean process to improve system performance, streamline operational workflows, reduce manual effort, and increase visibility across business functions.',
  },
  {
    href: '/services/customization',
    image: card3Img,
    title: 'Customization',
    content: 'We extend and customize business systems with deep software development expertise, creating scalable technical solutions that support evolving operational requirements.',
  },
]

const visibleServices = computed(() =>
  props.limit !== undefined ? services.slice(0, props.limit) : services
)
</script>


<template>
  <div class="elcom-section elcom-services" id="services">
    <div class="elcom-container">
      <div class="elcom-title">Leverage Skilled Services with Flexibility</div>
      <div class="elcom-card-group-3">
        <ServiceCardComponent
          v-for="service in visibleServices"
          :key="service.href"
          :href="service.href"
          :image="service.image"
          :title="service.title"
          :content="service.content"
        />
      </div>
    </div>
  </div>
</template>



  <style scoped lang="css">
.elcom-services .elcom-title {
    margin-bottom: 2rem;
}

.elcom-services a {
  color: inherit;
  text-decoration: none;
}

.elcom-services .elcom-subtitle {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.elcom-services .elcom-subtitle img {
    filter: brightness(0) saturate(100%) invert(58%) sepia(21%) saturate(796%) hue-rotate(57deg) brightness(94%) contrast(93%);
    margin-left: 0.5rem;
}

.elcom-services .elcom-card-group-3 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3vh 3%;
}



/* Mobile styles */
@media (max-width: 48rem) {
    .elcom-services .elcom-card-group-3 {
        flex-direction: column;
    }
}
  </style>
