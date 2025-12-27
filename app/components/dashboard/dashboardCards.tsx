import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import totalIcon from "../../assets/images/totalIcon.png";
import activeIcon from "../../assets/images/activeIcon.png";
import expIcon from "../../assets/images/expIcon.png";
import avgIcon from "../../assets/images/avgIcon.png";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Total Organizations",
    description: "140",
    marketPercent: "12% from last month",
    icon: totalIcon,
  },
  {
    id: 2,
    title: "Active vs Suspended",
    description: (
      <div>
        126 <span className="text-sm font-semibold">Active</span> / 8{" "}
        <span className="text-sm font-semibold">Suspended</span>
      </div>
    ),
    marketPercent: "8% from last month",
    icon: activeIcon,
  },
  {
    id: 3,
    title: "Expiring in next 30 days",
    description: "150",
    marketPercent: "3% from last month",
    icon: expIcon,
  },
  {
    id: 4,
    title: "Avg. Licence Utilisation",
    description: "78%",
    marketPercent: "5% from last month",
    icon: avgIcon,
  },
];

function DashboardCards() {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card?.id} style={{ borderRadius: "12px" }}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography
                fontSize={14}
                fontWeight={500}
                color="#697586"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {card.title}
                <Image src={card.icon} alt="total icon" className="mb-2" />
              </Typography>
              <Typography
                color="black"
                fontWeight={700}
                fontSize={20}
                component="div"
                // marginTop={1}
                marginBottom={1}
              >
                {card.description}
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={500}
                color="#16B364"
                paddingTop={1}
                sx={{ borderTop: "1px solid #f8fafc" }}
              >
                {card.marketPercent}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default DashboardCards;
