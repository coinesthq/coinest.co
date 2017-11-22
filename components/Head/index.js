import NextHead from 'next/head';
import Link from 'next/link'

class Head extends React.Component {
  render() {
    return (
      <NextHead>
        <title>Coinest</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </NextHead>
    )
  }
}

export default Head;
