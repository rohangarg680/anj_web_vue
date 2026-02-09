<template>
  <div>
    <SiteHeader />
    <main>
      <HeroSection />
      <FeatureHighlights />
      <WorkflowSection />
      <MetricsSection />
      <CTASection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import CTASection from '../components/CTASection.vue';
import FeatureHighlights from '../components/FeatureHighlights.vue';
import HeroSection from '../components/HeroSection.vue';
import MetricsSection from '../components/MetricsSection.vue';
import SiteFooter from '../components/SiteFooter.vue';
import SiteHeader from '../components/SiteHeader.vue';
import WorkflowSection from '../components/WorkflowSection.vue';
</script>
