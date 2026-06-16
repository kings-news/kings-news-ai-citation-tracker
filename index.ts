#!/usr/bin/env node

interface CitationInput {
  content: string;
  aiCitation: number;
  searchVisibility: number;
  citationReadiness: number;
  visibilityGap: number;
  platformReach: number;
  contentOptimization: number;
}

interface CitationOutput {
  content: string;
  aiCitationScore: number;
  searchVisibilityScore: number;
  citationReadinessScore: number;
  visibilityGapScore: number;
  platformReachScore: number;
  contentOptimizationScore: number;
  overallCitationHealth: number;
  priorityAction: string;
  platformBreakdown: Record<string, number>;
}

function getStatus(score: number): string {
  if (score <= 30) return "Critical";
  if (score <= 60) return "At Risk";
  if (score <= 80) return "Healthy";
  return "Excellent";
}

function getPriorityAction(scores: Record<string, number>): string {
  const labels: Record<string, string> = {
    aiCitation: "AI Citation",
    searchVisibility: "Search Visibility",
    citationReadiness: "Citation Readiness",
    visibilityGap: "Visibility Gap",
    platformReach: "Platform Reach",
    contentOptimization: "Content Optimization",
  };
  const lowest = Object.entries(scores).reduce((a, b) => a[1] < b[1] ? a : b);
  return `${labels[lowest[0]]} (${lowest[1]}/100 — act first)`;
}

function getPlatformBreakdown(aiCitation: number, platformReach: number): Record<string, number> {
  return {
    ChatGPT: Math.min(100, Math.round(aiCitation * 1.0)),
    "Google AI Overviews": Math.min(100, Math.round(aiCitation * 0.95)),
    Gemini: Math.min(100, Math.round(aiCitation * 0.90)),
    Perplexity: Math.min(100, Math.round(aiCitation * 1.03)),
    Copilot: Math.min(100, Math.round(aiCitation * 0.88)),
  };
}

export function trackCitations(input: CitationInput): CitationOutput {
  const scores = {
    aiCitation: input.aiCitation,
    searchVisibility: input.searchVisibility,
    citationReadiness: input.citationReadiness,
    visibilityGap: input.visibilityGap,
    platformReach: input.platformReach,
    contentOptimization: input.contentOptimization,
  };

  const overallCitationHealth = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / 6
  );

  return {
    content: input.content,
    aiCitationScore: input.aiCitation,
    searchVisibilityScore: input.searchVisibility,
    citationReadinessScore: input.citationReadiness,
    visibilityGapScore: input.visibilityGap,
    platformReachScore: input.platformReach,
    contentOptimizationScore: input.contentOptimization,
    overallCitationHealth,
    priorityAction: getPriorityAction(scores),
    platformBreakdown: getPlatformBreakdown(input.aiCitation, input.platformReach),
  };
}

const args = process.argv.slice(2);
const content = args[0] || "press-release-title";
const aiCitation = parseInt(args[1]) || 72;
const searchVisibility = parseInt(args[2]) || 65;
const citationReadiness = parseInt(args[3]) || 80;
const visibilityGap = parseInt(args[4]) || 55;
const platformReach = parseInt(args[5]) || 70;
const contentOptimization = parseInt(args[6]) || 60;

const result = trackCitations({
  content, aiCitation, searchVisibility,
  citationReadiness, visibilityGap, platformReach, contentOptimization,
});

console.log(`Content: ${result.content}`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`AI Citation Score:           ${result.aiCitationScore}/100  [${getStatus(result.aiCitationScore)}]`);
console.log(`Search Visibility Score:     ${result.searchVisibilityScore}/100  [${getStatus(result.searchVisibilityScore)}]`);
console.log(`Citation Readiness Score:    ${result.citationReadinessScore}/100  [${getStatus(result.citationReadinessScore)}]`);
console.log(`Visibility Gap Score:        ${result.visibilityGapScore}/100  [${getStatus(result.visibilityGapScore)}]`);
console.log(`Platform Reach Score:        ${result.platformReachScore}/100  [${getStatus(result.platformReachScore)}]`);
console.log(`Content Optimization Score:  ${result.contentOptimizationScore}/100  [${getStatus(result.contentOptimizationScore)}]`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Overall Citation Health:     ${result.overallCitationHealth}/100`);
console.log(`Priority Action:             ${result.priorityAction}`);
console.log("\nPlatform Breakdown:");
Object.entries(result.platformBreakdown).forEach(([platform, score]) => {
  console.log(`  ${platform.padEnd(22)} ${score}/100`);
});
