import TableSort from "./TableSort";
import evoChampData from "../storage/evoChampData";
import countryCodeData from "../storage/countryCodeData";

function EvoChampConfig() {
  const { data } = evoChampData();
  const { countries } = countryCodeData();

  const compArray = [];

  const config = [
    {
      title: "Players",
      render: (person) => {
        let link = "";
        if (person.player !== "Gonzalo Barrios") {
          link = person.player.replaceAll(" ", "_");
        } else {
          link = person.alias.replaceAll(" ", "_");
        }
        return (
          <div className="grid place-items-center whitespace-nowrap">
            <a
              href={`https://en.wikipedia.org/wiki/${link}`}
              className="text-blue-500 hover:underline"
            >
              {person.player}
            </a>
          </div>
        );
      },
      sortValue: (person) => person.player,
    },
    {
      title: "Alias",
      render: (name) => (
        <div className="grid place-items-center">{name.alias}</div>
      ),
    },
    {
      title: "Country",
      render: (location) => {
        const link = location.country.replaceAll(" ", "_");
        const arrayPairs = Object.entries(countries);
        const matchingArray = arrayPairs.filter((arr) => {
          return arr[1] === location.country ? arr : "";
        });
        const countryCodeForUrl = matchingArray[0][0].toLocaleLowerCase();

        return (
          <div>
            <a
              href={`https://en.wikipedia.org/wiki/${link}`}
              className="grid place-items-center"
            >
              <img
                src={`https://flagcdn.com/${countryCodeForUrl}.svg`}
                alt={location.country}
                width="50%"
              />
            </a>
          </div>
        );
      },
      sortValue: (location) => location.country,
    },
    {
      title: "Wins",
      render: (championships) => (
        <div className="grid place-items-center">{championships.wins}</div>
      ),
      sortValue: (championships) => championships.wins,
    },
    {
      title: "Years",
      render: (time) =>
        time.years.map((year) => (
          <div className="grid place-items-center">{year}</div>
        )),
    },
    {
      title: "Game(s)",
      render: (name) =>
        name.games.map((game) => {
          if (typeof game === "object") {
            const multiWin = game.map((win, index, arr) => {
              if (compArray.indexOf(win) === -1) {
                const link = win.replaceAll(" ", "_");
                compArray.push(win);
                return (
                  <span>
                    <a
                      href={`https://en.wikipedia.org/wiki/${link}`}
                      className="text-blue-500 hover:underline"
                    >
                      {win}
                    </a>
                    {index !== arr.length - 1 ? ", " : ""}
                  </span>
                );
              }

              return (
                <span>
                  {win}
                  {index !== arr.length - 1 ? ", " : ""}
                </span>
              );
            });
            return <div className="whitespace-nowrap">{multiWin}</div>;
          } else {
            if (compArray.indexOf(game) === -1) {
              const link = game.replaceAll(" ", "_");
              compArray.push(game);
              return (
                <a
                  href={`https://en.wikipedia.org/wiki/${link}`}
                  className="text-blue-500 hover:underline"
                >
                  <div>{game}</div>
                </a>
              );
            }
            return <div>{game}</div>;
          }
        }),
    },
  ];

  return <TableSort data={data} config={config} />;
}

export default EvoChampConfig;
