import { BitcoinPrice } from '@app/_components/metrics/BitcoinPrice'
import { AyurvedaCard } from '@app/_components/widgets/AyurvedaCard'
import { NewConnections } from '@app/_components/widgets/NewConnections'
import { ProjectCard } from '@app/_components/widgets/ProjectCard'
import { WelcomeSummary } from '@app/_components/widgets/WelcomSummary'
import { Grid } from '@mui/material'
import { t } from 'i18next'
import React from 'react'

function ProductsPage() {
  return (
    <div>
      <WelcomeSummary title={t("widgets.title.welcomeEMA")} />
      <BitcoinPrice subheader={t("widgets.subheader.bitcoinPrice")} />

      <Grid container spacing={3.75}>
        <Grid item xs={12} md={6} lg={4}>
          <AyurvedaCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <NewConnections
            title={t("widgets.title.newConnections")}
            scrollHeight={296}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProjectCard title={t("widgets.title.projectSummary")} />
        </Grid>
      </Grid>


    </div>
  )
}

export default ProductsPage

