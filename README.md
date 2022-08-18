# vue-sample

Repro for an issue with Sentry Vue

# Build

- yarn install
- ionic build

# Run
- http-serve ./dist
- Press the `Capture Message`
- Check https://sentry.io/organizations/sentry-sdks/discover/results/?field=title&field=event.type&field=project&field=user.display&field=timestamp&name=All+Events&project=5522756&query=&sort=-timestamp&statsPeriod=1h&yAxis=count%28%29 for a new event
