# Holidapi

`holidapi.des.wtf?m=[month]&d=[day]`

`month` (required)(string) Month string in long format, case in-sensitive


`day` (required)(number) Day in dd format.

### Example
`holidapi.des.wtf?m=april&d=29`

### Response
```
[
  "Day of Remembrance for all Victims of Chemical Warfare (United Nations)",
  "International Dance Day  (UNESCO)",
  "Shōwa Day, traditionally the start of the Golden Week holiday period, which is April 29 and May 3–5. (Japan)"
]
```

#### But where is Christian Feast Day?
Christian's apparently love them a good feast and there's a feast day almost
every day. It's annoying and I don't really know anyone that cares about
Christian Feast Days so I'm filtering them out. If you're that concerned about
feast days I'd recommend not using this API.
