import RouteBanner from "./RouteBanner";
import RouteCard from "./RouteCard";

const RouteData = [
  {
    name: "리오",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Rio_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_Bow.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_114406.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202405.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201417.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203405.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204408.png",
    ],
  },
  {
    name: "비앙카",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Bianca_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_Arcana.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_130404.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202419.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201405.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203306.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204406.png",
    ],
  },
  {
    name: "이바",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Eva_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_HighAngleFire.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_112501.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202404.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201409.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203403.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204406.png",
    ],
  },
  {
    name: "레온",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Leon_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_Glove.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_110408.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202419.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201405.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203506.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204415.png",
    ],
  },
  {
    name: "헤이즈",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Haze_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_AssaultRifle.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_117407.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202419.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201409.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203410.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204304.png",
    ],
  },
  {
    name: "유키",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Yuki_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_DualSword.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_103401.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202406.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201414.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203414.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204403.png",
    ],
  },
  {
    name: "하트",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Hart_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_Guitar.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_121406.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202406.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201418.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203405.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204304.png",
    ],
  },
  {
    name: "피오라",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Fiora_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_Rapier.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_120302.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202412.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201409.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203403.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204415.png",
    ],
  },
  {
    name: "피올로",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Piolo_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_Nunchaku.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_119401.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202412.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201413.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203410.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204303.png",
    ],
  },
  {
    name: "실비아",
    heroImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/CharProfile_Silvia_S000.png",
    weaponImg:
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/Ico_Ability_Pistol.png",
    items: [
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_116404.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_202404.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_201409.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_203411.png",
      "https://cdn.dak.gg/assets/er/game-assets/1.8.0/ItemIcon_204406.png",
    ],
  },
];

const RouteSection = () => {
  return (
    <section className="mb-10">
      <RouteBanner />
      <div className="mb-4">최신 루트</div>
      <ul className="grid grid-cols-2 gap-2">
        {RouteData.map((v, i) => (
          <RouteCard
            key={i}
            name={v.name}
            heroImg={v.heroImg}
            weaponImg={v.weaponImg}
            items={v.items}
          />
        ))}
      </ul>
    </section>
  );
};

export default RouteSection;
