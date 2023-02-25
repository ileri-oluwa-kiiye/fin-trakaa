import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const data = [
    {
      "day": "Mon",
      "sales": 80,
      "salesColor": "#000",
      "purchases": 55,
      "purchasesColor": "#666",
    },
    {
      "day": "Tue",
      "sales": 80,
      "salesColor": "#000",
      "purchases": 55,
      "purchasesColor": "#666",
    },
    {
      "day": "Wed",
      "sales": 80,
      "salesColor": "#000",
      "purchases": 55,
      "purchasesColor": "#666",
    },
    {
      "day": "Fri",
      "sales": 80,
      "salesColor": "#000",
      "purchases": 55,
      "purchasesColor": "#666",
    },
    {
      "day": "Sat",
      "sales": 80,
      "salesColor": "#000",
      "purchases": 55,
      "purchasesColor": "#666",
    },
    {
      "day": "Sun",
      "sales": 80,
      "salesColor": "#000",
      "purchases": 55,
      "purchasesColor": "#666",
    }
  ]


const Barchartt = () => {
    return(
        <ResponsiveBar
            data={data}
            keys={[
                'sales',
                'purchases',
            ]}
            indexBy="day"
            margin={{ top: 20, right: 10, bottom: 20, left: 30 }}
            padding={0.75}
            innerPadding={3}
            groupMode="grouped"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={"#555"}
            borderColor= '#000000'
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: '#000',
                    color: '#000',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: '#777',
                    color: '#777',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderRadius={8}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            enableLabel={false}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
        />
    )
    }

export default Barchartt