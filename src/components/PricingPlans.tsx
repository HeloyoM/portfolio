import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";

/**
 * PricingPlans component
 * - Modern, responsive pricing cards built with MUI
 * - Highlights the Premium plan ("Most Popular")
 * - Clear outcomes, consistent durations, and concise tech badges
 * - Use: <PricingPlans onSelect={(planId) => ...} currencySymbol="₪" />
 */

type TechChipProps = {
  label: string
}
const TechChip = (props: TechChipProps) => (
  <Chip
    size="small"
    label={props.label}
    sx={{
      mr: 1,
      mb: 1,
      bgcolor: (t) => t.palette.mode === "light" ? "grey.100" : "grey.800",
      border: 1,
      borderColor: "divider",
    }}
  />
);

type FeatureProps = {
  children: string
}
const Feature = (props: FeatureProps) => (
  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
    <CheckCircleIcon fontSize="small" />
    <Typography variant="body2">{props.children}</Typography>
  </Stack>
);

type Props = {
  name: string
  icon: React.JSX.Element
  highlighted: boolean
  tech: string[]
  features: string[]
}
const PlanCard = (plan_key: Props) => {
  const { t } = useTranslation();
  const { name, highlighted, icon, features, tech } = plan_key;

  const handleClick = () => {
    let text = `פנייה%20מאתר%20להתחלת%20מסלול%20${name}`
    window.open(`https://wa.me/972587769313?text=${text}`, '_blank');
  };

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        '&:hover': { transform: "translateY(-4px)", boxShadow: 6 },
        ...(highlighted && {
          borderColor: "primary.main",
          boxShadow: 8,
        }),
      }}
    >
      {highlighted && (
        <Chip
          color="primary"
          label="Most Popular"
          size="small"
          sx={{ position: "absolute", top: 12, right: 12 }}
        />
      )}

      <CardHeader
        avatar={icon}
        title={<Typography variant="h5" fontWeight={700}>{t(`pricing_plans.${name}.title`)}</Typography>}
        subheader={<Typography variant="body2" color="text.secondary">{t(`pricing_plans.${name}.tagline`)}</Typography>}
        sx={{ pb: 0 }}
      />

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2">{t(`pricing_plans.${name}.duration`)}</Typography>
          </Stack>

          <Typography variant="h4" component="div" fontWeight={800}>
            {t(`pricing_plans.${name}.priceLabel`)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t(`pricing_plans.${name}.recommendedFor`)}
          </Typography>

          <Divider sx={{ my: 1 }} />
          <Box>
            {tech.map((t) => (
              <TechChip label={t} />
            ))}
          </Box>

          <Box>
            {features.map((f, i) => (
              <Feature key={i}>{f}</Feature>
            ))}
          </Box>

          <Button
            fullWidth
            size="large"
            variant={highlighted ? "contained" : "outlined"}
            endIcon={<RocketLaunchIcon />}
            onClick={handleClick}
            sx={{ mt: 1, borderRadius: 2 }}
          >
            {t(`pricing_plans.${name}.cta`)}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
};

export default function PricingPlans() {
  const plans = [
    {
      name: "basic",
      icon: <CodeIcon />,
      highlighted: false,
      tech: ["JavaScript", "React", "Node.js"],
      features: [
        "Learn JS fundamentals step by step",
        "Understand how real apps work",
        "Homework & code review included",
      ],
    },
    {
      name: "pro",
      icon: <ConstructionIcon />,
      highlighted: false,
      tech: ["React", "Custom styling", "REST API", "Node.js"],
      features: [
        "Plan, design and implement core features",
        "Best practices: git, code structure, reviews",
        "Deploy to a live URL",
      ],
    },
    {
      name: "premium",
      icon: <RocketLaunchIcon />,
      highlighted: true,
      tech: [
        "React",
        "Custom styling",
        "Redux (optional)",
        "REST API",
        "Node.js",
        "Mongo/MySQL",
        "GitHub",
        "(Advanced) Docker & DevOps",
        "Electron (desktop option)",
      ],
      features: [
        "Define MVP and success metrics",
        "Implement auth, data, and UI flows",
        "Testing, CI basics, and deployment",
        "Performance & monitoring walkthrough",
      ],
    }
  ];
  const { t } = useTranslation();

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="overline" color="primary" fontWeight={700}>
            {t('pricing_plans.header')}
          </Typography>
          <Typography variant="h3" fontWeight={800}>
            {t('pricing_plans.title')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('pricing_plans.sub_title')}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {plans.map((p) => (
            <Grid key={t(`pricing_plans.${p}.id`)} size={{ xs: 12, md: 4 }}>
              <PlanCard {...p} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="caption" color="text.secondary">
            {t('pricing_plans.comment')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
