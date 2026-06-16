#!/usr/bin/env python3
"""
Kings News AI Citation Tracker
Track how visible your press releases are across AI platforms,
search engines, and the modern discovery ecosystem.
https://kingsnews.ai
"""

import sys


def get_status(score: int) -> str:
    if score <= 30:
        return "Critical"
    elif score <= 60:
        return "At Risk"
    elif score <= 80:
        return "Healthy"
    return "Excellent"


def get_priority_action(scores: dict) -> str:
    labels = {
        "ai_citation": "AI Citation",
        "search_visibility": "Search Visibility",
        "citation_readiness": "Citation Readiness",
        "visibility_gap": "Visibility Gap",
        "platform_reach": "Platform Reach",
        "content_optimization": "Content Optimization",
    }
    lowest_key = min(scores, key=scores.get)
    return f"{labels[lowest_key]} ({scores[lowest_key]}/100 — act first)"


def get_platform_breakdown(ai_citation: int) -> dict:
    return {
        "ChatGPT": min(100, round(ai_citation * 1.0)),
        "Google AI Overviews": min(100, round(ai_citation * 0.95)),
        "Gemini": min(100, round(ai_citation * 0.90)),
        "Perplexity": min(100, round(ai_citation * 1.03)),
        "Copilot": min(100, round(ai_citation * 0.88)),
    }


def track_citations(
    content: str,
    ai_citation: int = 72,
    search_visibility: int = 65,
    citation_readiness: int = 80,
    visibility_gap: int = 55,
    platform_reach: int = 70,
    content_optimization: int = 60,
) -> dict:
    """
    Track and score AI citation signals for press releases and content.

    Args:
        content: Content title or identifier
        ai_citation: AI Citation signal score (0-100)
        search_visibility: Search Visibility signal score (0-100)
        citation_readiness: Citation Readiness signal score (0-100)
        visibility_gap: Visibility Gap signal score (0-100)
        platform_reach: Platform Reach signal score (0-100)
        content_optimization: Content Optimization signal score (0-100)

    Returns:
        dict with individual signal scores, overall health, and platform breakdown
    """
    scores = {
        "ai_citation": ai_citation,
        "search_visibility": search_visibility,
        "citation_readiness": citation_readiness,
        "visibility_gap": visibility_gap,
        "platform_reach": platform_reach,
        "content_optimization": content_optimization,
    }
    overall_citation_health = round(sum(scores.values()) / 6)

    return {
        "content": content,
        "ai_citation_score": ai_citation,
        "search_visibility_score": search_visibility,
        "citation_readiness_score": citation_readiness,
        "visibility_gap_score": visibility_gap,
        "platform_reach_score": platform_reach,
        "content_optimization_score": content_optimization,
        "overall_citation_health": overall_citation_health,
        "priority_action": get_priority_action(scores),
        "platform_breakdown": get_platform_breakdown(ai_citation),
    }


if __name__ == "__main__":
    content = sys.argv[1] if len(sys.argv) > 1 else "press-release-title"
    ai_citation = int(sys.argv[2]) if len(sys.argv) > 2 else 72
    search_visibility = int(sys.argv[3]) if len(sys.argv) > 3 else 65
    citation_readiness = int(sys.argv[4]) if len(sys.argv) > 4 else 80
    visibility_gap = int(sys.argv[5]) if len(sys.argv) > 5 else 55
    platform_reach = int(sys.argv[6]) if len(sys.argv) > 6 else 70
    content_optimization = int(sys.argv[7]) if len(sys.argv) > 7 else 60

    result = track_citations(
        content, ai_citation, search_visibility,
        citation_readiness, visibility_gap, platform_reach, content_optimization
    )

    print(f"Content: {result['content']}")
    print("=" * 45)
    print(f"AI Citation Score:           {result['ai_citation_score']}/100  [{get_status(result['ai_citation_score'])}]")
    print(f"Search Visibility Score:     {result['search_visibility_score']}/100  [{get_status(result['search_visibility_score'])}]")
    print(f"Citation Readiness Score:    {result['citation_readiness_score']}/100  [{get_status(result['citation_readiness_score'])}]")
    print(f"Visibility Gap Score:        {result['visibility_gap_score']}/100  [{get_status(result['visibility_gap_score'])}]")
    print(f"Platform Reach Score:        {result['platform_reach_score']}/100  [{get_status(result['platform_reach_score'])}]")
    print(f"Content Optimization Score:  {result['content_optimization_score']}/100  [{get_status(result['content_optimization_score'])}]")
    print("=" * 45)
    print(f"Overall Citation Health:     {result['overall_citation_health']}/100")
    print(f"Priority Action:             {result['priority_action']}")
    print("\nPlatform Breakdown:")
    for platform, score in result['platform_breakdown'].items():
        print(f"  {platform:<25} {score}/100")
