/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  formats: ['svg', 'png'],
  outputDir: '../sites/twind.style/static',
  github: {
    login: 'tw-in-js',
    type: 'organization',
  },
  opencollective: {
    slug: 'twind',
  },
  onSponsorsReady(sponsors) {
    sponsors = sponsors
      .filter((sponsor) => !['copilottravel', 'github-sponsors'].includes(sponsor.sponsor.login))
      // remove duplicates
      .filter((sponsor, index, source) => {
        return (
          index ===
          source.findIndex(
            (other) =>
              other.provider === sponsor.provider && other.sponsor.login === sponsor.sponsor.login,
          )
        )
      })

    // convert github monthlyDollars into total just as it is reported for OpenCollective
    for (const sponsor of sponsors) {
      if (
        sponsor.provider === 'github' &&
        sponsor.monthlyDollars !== -1 &&
        !sponsor.isOneTime &&
        sponsor.createdAt
      ) {
        sponsor.monthlyDollars *= monthDiff(new Date(sponsor.createdAt), new Date())
      }
    }

    return sponsors
  },
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Supporters',
      monthlyDollars: 50,
      preset: presets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 100,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 200,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 400,
      preset: presets.xl,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 800,
      preset: presets.xl,
    },
    {
      title: 'Special Sponsor',
      monthlyDollars: Infinity,
      composeAfter(compose) {
        compose
          .addSpan(20)
          .addText('Special Sponsor', 'sponsorkit-tier-title')
          .addSpan(10)
          .addSponsorGrid(
            [
              {
                monthlyDollars: Infinity,
                sponsor: {
                  login: 'kenoxa',
                  name: 'Kenoxa GmbH',
                  avatarUrl: 'https://avatars.githubusercontent.com/u/2102442?s=96&v=4',
                  type: 'Organization',
                  avatarUrlHighRes:
                    'data:image/png;base64,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',
                  avatarUrlMediumRes:
                    'data:image/png;base64,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',
                  avatarUrlLowRes:
                    'data:image/png;base64,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',
                },
              },
              {
                monthlyDollars: Infinity,
                sponsor: {
                  login: 'copilottravel',
                  name: 'COPILOT TRAVEL',
                  avatarUrl: 'https://avatars.githubusercontent.com/u/64566279?v=4',
                  type: 'Organization',
                  avatarUrlHighRes:
                    'data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXEAj9wAj9wAj9wAj9wAj9wAj9wMlN4Aj9wAj9wAj9z///8AjdsAiNr7/f4rouJxwezn9Pyp2fOKy+9GrubM6fhZtuhagvMpAAAACnRSTlMAbmsY2E2b+xy17hPOagAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAeFJREFUeNrtmdmSozAMRRWSjsCS9+X/P3XKbJNUDzCA8tLNfUgRP5xI1rWVEgCD2lv3QHVQ+OiaFl7VPtVpdS/IL1QCwq+Jd1NCuo3xKTH1MbYoB8Q7ADyVoJ4ArRJVK1eRQQ10ssAOHrLAB6AsEEEJ6wJewAv4C4C8ubAPyIr1LK7P/0HciLC4SdY6l3ibCGs4XWhWRCJjt4mrKaMnM4o8B6KgTwBZ6UiGzBCgoVTqxyYRVipiDU08MhTQEOXje8hKBzKGgp1Uv1PZChGWeanyDOrRO6xrzh758B7mCnQa32pEcSNEWAzQVV5WNbhxsc+5WmftzMCqZajoFJ3VrJiZh00I40/wHuBgGUOB2XoysW4cItZnIldcYr1EhAWe7R1otdKYiXzO2XtvJhNRTrxwaJb2sLdMrKlhmM04WrIeHAp7InwF8gIw702Z3lP2fcZ/Uy77Up6Lovtq16LgWBRDsbiysyjvtonpu214p20+YGzFq0ePD18OXu5y+Pf15Y5eX+NpqZs29oCg/KkL9nsLSOdagHyT+kAbVazmPh+tjS7pU43+I39FthZ2Ao/oAl7AC/hDgOKDIPFRlfgwrZEFNvIDSfGRqfxQV3zsLD8Ylx/dA9wFKvO8v7+vaIRef/wBJO/+gKRHEUYAAAAASUVORK5CYII=',
                  avatarUrlMediumRes:
                    'data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXEAj9wAj9wAj9wAj9wAj9wAj9wMlN4Aj9wAj9wAj9z///8AjdsAiNr7/f4rouJxwezn9Pyp2fOKy+9GrubM6fhZtuhagvMpAAAACnRSTlMAbmsY2E2b+xy17hPOagAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAeFJREFUeNrtmdmSozAMRRWSjsCS9+X/P3XKbJNUDzCA8tLNfUgRP5xI1rWVEgCD2lv3QHVQ+OiaFl7VPtVpdS/IL1QCwq+Jd1NCuo3xKTH1MbYoB8Q7ADyVoJ4ArRJVK1eRQQ10ssAOHrLAB6AsEEEJ6wJewAv4C4C8ubAPyIr1LK7P/0HciLC4SdY6l3ibCGs4XWhWRCJjt4mrKaMnM4o8B6KgTwBZ6UiGzBCgoVTqxyYRVipiDU08MhTQEOXje8hKBzKGgp1Uv1PZChGWeanyDOrRO6xrzh758B7mCnQa32pEcSNEWAzQVV5WNbhxsc+5WmftzMCqZajoFJ3VrJiZh00I40/wHuBgGUOB2XoysW4cItZnIldcYr1EhAWe7R1otdKYiXzO2XtvJhNRTrxwaJb2sLdMrKlhmM04WrIeHAp7InwF8gIw702Z3lP2fcZ/Uy77Up6Lovtq16LgWBRDsbiysyjvtonpu214p20+YGzFq0ePD18OXu5y+Pf15Y5eX+NpqZs29oCg/KkL9nsLSOdagHyT+kAbVazmPh+tjS7pU43+I39FthZ2Ao/oAl7AC/hDgOKDIPFRlfgwrZEFNvIDSfGRqfxQV3zsLD8Ylx/dA9wFKvO8v7+vaIRef/wBJO/+gKRHEUYAAAAASUVORK5CYII=',
                  avatarUrlLowRes:
                    'data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAARVBMVEVMaXEAj9wAj9wAj9wAj9wAj9wAj9wMlN4Aj9wAj9wAj9z///8AjdsAiNr7/f4rouJxwezn9Pyp2fOKy+9GrubM6fhZtuhagvMpAAAACnRSTlMAbmsY2E2b+xy17hPOagAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAeFJREFUeNrtmdmSozAMRRWSjsCS9+X/P3XKbJNUDzCA8tLNfUgRP5xI1rWVEgCD2lv3QHVQ+OiaFl7VPtVpdS/IL1QCwq+Jd1NCuo3xKTH1MbYoB8Q7ADyVoJ4ArRJVK1eRQQ10ssAOHrLAB6AsEEEJ6wJewAv4C4C8ubAPyIr1LK7P/0HciLC4SdY6l3ibCGs4XWhWRCJjt4mrKaMnM4o8B6KgTwBZ6UiGzBCgoVTqxyYRVipiDU08MhTQEOXje8hKBzKGgp1Uv1PZChGWeanyDOrRO6xrzh758B7mCnQa32pEcSNEWAzQVV5WNbhxsc+5WmftzMCqZajoFJ3VrJiZh00I40/wHuBgGUOB2XoysW4cItZnIldcYr1EhAWe7R1otdKYiXzO2XtvJhNRTrxwaJb2sLdMrKlhmM04WrIeHAp7InwF8gIw702Z3lP2fcZ/Uy77Up6Lovtq16LgWBRDsbiysyjvtonpu214p20+YGzFq0ePD18OXu5y+Pf15Y5eX+NpqZs29oCg/KkL9nsLSOdagHyT+kAbVazmPh+tjS7pU43+I39FthZ2Ao/oAl7AC/hDgOKDIPFRlfgwrZEFNvIDSfGRqfxQV3zsLD8Ylx/dA9wFKvO8v7+vaIRef/wBJO/+gKRHEUYAAAAASUVORK5CYII=',
                },
              },
            ],
            presets.xl,
          )
          .addSpan(30)
      },
    },
  ],
})

function monthDiff(dateFrom, dateTo) {
  return (
    dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  )
}
