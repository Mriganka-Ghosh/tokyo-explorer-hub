import senso from "@/assets/senso-ji.jpg.asset.json";
import meiji from "@/assets/meiji-jingu.jpg.asset.json";
import palace from "@/assets/imperial-palace.jpg.asset.json";
import zojo from "@/assets/zojo-ji.jpg.asset.json";
import nezu from "@/assets/nezu-shrine.jpg.asset.json";
import ueno from "@/assets/ueno-toshogu.jpg.asset.json";
import yushima from "@/assets/yushima-tenmangu.jpg.asset.json";
import hie from "@/assets/hie-shrine.jpg.asset.json";
import sengaku from "@/assets/sengaku-ji.jpg.asset.json";
import kanda from "@/assets/kanda-myojin.jpg.asset.json";
import rikugien from "@/assets/rikugien.jpg.asset.json";
export const heritageSites = [
  {
    slug: "senso-ji",
    name: "Sensō-ji Temple",
    japanese: "浅草寺",
    district: "Asakusa, Taito",
    category: "Temples",
    year: "645",
    image: senso.url,
    description:
      "Step through the great Kaminarimon gate into the heart of old Tokyo. The lively Nakamise shopping street leads to this beloved Buddhist temple, dedicated to Kannon, the bodhisattva of compassion. Incense curls around the main hall, while the five-story pagoda rises above the surrounding streets.",
    history:
      "According to tradition, two fishermen found a statue of Kannon in the Sumida River in 628. A temple was completed in 645, making Sensō-ji Tokyo’s oldest temple. Patronage from the Tokugawa shoguns helped it flourish during the Edo period. The main hall was rebuilt in 1958 after its destruction during World War II.",
    highlight: "Kaminarimon gate, Nakamise street & the five-story pagoda",
    station: "Asakusa Station",
    tip: "The temple grounds are especially atmospheric early in the morning or after sunset.",
  },
  {
    slug: "meiji-jingu",
    name: "Meiji Jingū Shrine",
    japanese: "明治神宮",
    district: "Shibuya",
    category: "Shrines",
    year: "1920",
    image: meiji.url,
    description:
      "A forest of towering trees separates Meiji Jingū from the busy streets of Harajuku. Broad gravel paths and monumental wooden torii lead to a serene Shinto sanctuary dedicated to Emperor Meiji and Empress Shōken. Traditional wedding processions sometimes pass through its spacious courtyard.",
    history:
      "The shrine was established in 1920 following the deaths of Emperor Meiji and Empress Shōken. Its surrounding forest was planted using trees donated from across Japan and beyond. The original shrine buildings were destroyed in 1945; reconstruction was completed in 1958. Today it remains one of Japan’s most visited places of worship.",
    highlight: "Forest walks, wooden torii & the shrine courtyard",
    station: "Harajuku / Meiji-jingumae Station",
    tip: "Keep to the side of the main approach and respect ceremonies taking place in the courtyard.",
  },
  {
    slug: "imperial-palace",
    name: "Tokyo Imperial Palace",
    japanese: "皇居",
    district: "Chiyoda",
    category: "Palaces & Gardens",
    year: "1868",
    image: palace.url,
    description:
      "Wide moats, stone ramparts and elegant bridges frame the residence of Japan’s emperor. The public East Gardens reveal traces of Edo Castle alongside seasonal planting and peaceful lawns. From the outer plaza, the Nijūbashi bridges offer one of the city’s most recognizable historic views.",
    history:
      "The palace occupies the former grounds of Edo Castle, which became the seat of the Tokugawa shogunate in 1603. In 1868, Emperor Meiji moved from Kyoto to Tokyo, making the castle grounds the imperial residence. After wartime destruction, the current main palace was completed in 1968. Castle walls and foundations preserve a tangible connection to Edo.",
    highlight: "Nijūbashi bridges, castle ramparts & the East Gardens",
    station: "Tokyo / Otemachi Station",
    tip: "The inner palace is not freely accessible. Check official garden closures and guided-tour arrangements before visiting.",
  },
  {
    slug: "zojo-ji",
    name: "Zōjō-ji Temple",
    japanese: "増上寺",
    district: "Shiba, Minato",
    category: "Temples",
    year: "1393",
    image: zojo.url,
    description:
      "Historic temple roofs meet the silhouette of Tokyo Tower at Zōjō-ji. This major Jōdo-shū Buddhist temple is closely associated with the Tokugawa family. Its vast forecourt, imposing entrance gate and rows of small Jizō statues invite a quiet pause in the city.",
    history:
      "Founded in 1393, Zōjō-ji moved to its present location in 1598 under Tokugawa Ieyasu’s patronage. It became the family temple of the Tokugawa shoguns, six of whom are buried here. Much of the complex was lost to war, but the Sangedatsumon gate, built in 1622, survived. The main hall was rebuilt in 1974.",
    highlight: "Sangedatsumon gate & the view toward Tokyo Tower",
    station: "Onarimon / Shibakoen Station",
    tip: "For the classic temple-and-tower view, stand in the main courtyard.",
  },
  {
    slug: "nezu-shrine",
    name: "Nezu Shrine",
    japanese: "根津神社",
    district: "Nezu, Bunkyo",
    category: "Shrines",
    year: "1706",
    image: nezu.url,
    description:
      "A ribbon of vermilion torii winds through one of Tokyo’s loveliest neighborhood shrines. Nezu’s ornate buildings, koi pond and azalea-covered hillside feel far removed from the modern metropolis. Its spring flowers make the grounds particularly memorable.",
    history:
      "Tradition traces the shrine’s origins back around 1,900 years. Its present location and richly decorated buildings date to 1706, when shogun Tokugawa Tsunayoshi relocated it. Several original Edo-period structures survive and are designated Important Cultural Properties. The shrine escaped the widespread destruction that changed much of central Tokyo.",
    highlight: "Vermilion torii tunnel & spring azalea gardens",
    station: "Nezu / Sendagi Station",
    tip: "Azalea season usually falls in April; bloom timing varies each year.",
  },
  {
    slug: "ueno-toshogu",
    name: "Ueno Tōshōgū",
    japanese: "上野東照宮",
    district: "Ueno, Taito",
    category: "Shrines",
    year: "1627",
    image: ueno.url,
    description:
      "Gold leaf, carved dragons and stone lanterns bring Edo-period craftsmanship to life in Ueno Park. This shrine honors Tokugawa Ieyasu, the founder of the Tokugawa shogunate. Its compact but richly ornamented sanctuary contrasts beautifully with the surrounding greenery.",
    history:
      "Ueno Tōshōgū was founded in 1627. The third shogun, Tokugawa Iemitsu, rebuilt it in its lavish present form in 1651. The shrine survived the Battle of Ueno in 1868, the Great Kantō Earthquake and World War II. Its surviving architecture offers a rare glimpse of early Edo Tokyo.",
    highlight: "Golden shrine façade & carved dragon gate",
    station: "Ueno Station",
    tip: "Combine your visit with a walk through Ueno Park; access to different shrine areas may require admission.",
  },
  {
    slug: "yushima-tenmangu",
    name: "Yushima Tenmangū",
    japanese: "湯島天満宮",
    district: "Yushima, Bunkyo",
    category: "Shrines",
    year: "458",
    image: yushima.url,
    description:
      "Students come to this peaceful shrine to pray for success in their examinations. Dedicated to the scholar Sugawara no Michizane, Yushima Tenmangū is adorned with wooden prayer plaques and known for its delicate plum blossoms. Traditional cypress architecture gives the grounds a warm, intimate character.",
    history:
      "The shrine traditionally dates its foundation to 458. Sugawara no Michizane, later revered as the deity of learning, was enshrined here in 1355. It gained important patronage during the Edo period. The present shrine buildings were completed in 1995 using traditional Japanese cypress construction.",
    highlight: "Plum blossoms, prayer plaques & cypress architecture",
    station: "Yushima Station",
    tip: "Visit in late winter for plum blossoms, with flowering dates dependent on the weather.",
  },
  {
    slug: "hie-shrine",
    name: "Hie Shrine",
    japanese: "日枝神社",
    district: "Nagatacho, Chiyoda",
    category: "Shrines",
    year: "1659",
    image: hie.url,
    description:
      "Rising above the offices of Nagatachō, Hie Shrine is a quiet hilltop sanctuary. Its striking torii stairway and distinctive gabled gates make it an inviting place to explore. The shrine is associated with the Sannō Matsuri, one of Tokyo’s great traditional festivals.",
    history:
      "Hie Shrine’s early origins are uncertain, but it became associated with Edo Castle in the fifteenth century. The Tokugawa shoguns revered it as a protector of the castle. Following the Great Fire of Meireki, it moved to its present location in 1659. The main buildings were reconstructed in 1958 after wartime destruction.",
    highlight: "Red torii stairway & the Sannō festival tradition",
    station: "Tameike-sanno / Akasaka Station",
    tip: "Look for the torii-lined stairway on the western side of the grounds.",
  },
  {
    slug: "sengaku-ji",
    name: "Sengaku-ji Temple",
    japanese: "泉岳寺",
    district: "Takanawa, Minato",
    category: "Temples",
    year: "1612",
    image: sengaku.url,
    description:
      "Sengaku-ji is a Sōtō Zen temple inseparable from the story of the forty-seven rōnin. Visitors come to the cemetery to pay respects to the samurai retainers and their lord, Asano Naganori. The tranquil setting offers a thoughtful encounter with one of Japan’s best-known historical narratives.",
    history:
      "Tokugawa Ieyasu founded Sengaku-ji in 1612. After a fire, the temple moved to Takanawa in 1641. In 1703, the retainers who avenged their lord were buried here, securing its place in Japanese cultural memory. Their story later inspired numerous plays, films and literary works.",
    highlight: "The forty-seven rōnin cemetery & memorial museum",
    station: "Sengakuji Station",
    tip: "Treat the cemetery as a place of remembrance and follow local guidance on incense offerings.",
  },
  {
    slug: "kanda-myojin",
    name: "Kanda Myōjin Shrine",
    japanese: "神田明神",
    district: "Sotokanda, Chiyoda",
    category: "Shrines",
    year: "730",
    image: kanda.url,
    description:
      "Brilliant vermilion architecture stands at the meeting point of old Edo and contemporary Akihabara. Kanda Myōjin is associated with prosperity, good fortune and community life. Its Kanda Matsuri fills nearby streets with portable shrines and festive processions.",
    history:
      "Founded in 730 near present-day Ōtemachi, the shrine moved to its current site in 1616. It became an important guardian of Edo and enjoyed the patronage of the Tokugawa shogunate. After the 1923 earthquake, the main hall was rebuilt in reinforced concrete in 1934. This construction helped it survive wartime fires.",
    highlight: "Vermilion main hall & Kanda Matsuri traditions",
    station: "Ochanomizu / Akihabara Station",
    tip: "The shrine is a pleasant walk from Akihabara, offering a cultural contrast to its electronics streets.",
  },
  {
    slug: "rikugien",
    name: "Rikugien Gardens",
    japanese: "六義園",
    district: "Komagome, Bunkyo",
    category: "Palaces & Gardens",
    year: "1702",
    image: rikugien.url,
    description:
      "Follow winding paths around a central pond through a landscape inspired by Japanese poetry. Rikugien is a classic Edo-period strolling garden, with miniature hills, stone bridges and carefully composed views. Cherry blossoms and autumn foliage transform its scenery with the seasons.",
    history:
      "Yanagisawa Yoshiyasu created the garden between 1695 and 1702 during the reign of Tokugawa Tsunayoshi. Its landscape draws on scenes from waka poetry. Mitsubishi founder Iwasaki Yatarō acquired and restored it in the Meiji era. The Iwasaki family donated it to Tokyo in 1938, opening this historic retreat to the public.",
    highlight: "Poetic pond views, seasonal foliage & garden paths",
    station: "Komagome Station",
    tip: "Allow time for a slow circuit of the pond; check official arrangements for seasonal evening openings.",
  },
];
export type HeritageSite = (typeof heritageSites)[number];
