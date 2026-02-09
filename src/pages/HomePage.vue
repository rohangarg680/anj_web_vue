<template>
  <div>
    <SiteHeader />
    <main>
      <HeroSection />
      <WhoWeAreSection />
      <WorkWithSection />
      <ServicesSection />
      <FrameworkSection />
      <StrategyCallSection />
      <VideoShowcaseSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import FrameworkSection from '../components/FrameworkSection.vue';
import HeroSection from '../components/HeroSection.vue';
import SiteFooter from '../components/SiteFooter.vue';
import SiteHeader from '../components/SiteHeader.vue';
import ServicesSection from '../components/ServicesSection.vue';
import StrategyCallSection from '../components/StrategyCallSection.vue';
import VideoShowcaseSection from '../components/VideoShowcaseSection.vue';
import WhoWeAreSection from '../components/WhoWeAreSection.vue';
import WorkWithSection from '../components/WorkWithSection.vue';
</script>
