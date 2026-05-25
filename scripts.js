document.getElementById('logo-container').setAttribute('data-tooltip', appType+' '+appVersion);

// Cache
let currentPageCache;
let currentOpenModalId;
let isMobileCache;
let scrollToCache;
let originData;
let devtoolsOpenCache;
let currentUserData;
let usersXPBalance;
let usersXPEventsCache;
let openModalsCache = 0;
let xpLevelStatsCache;
let tradingConfigCache;

let discordLeakedCategoriesCache;
let discordCollectiblesShopHomeCache;
let discordCollectiblesCategoriesCache;
let discordOrbsCategoriesCache;
let discordMiscellaneousCategoriesCache;
let discordQuestsCache;

let baseYapperURL = 'https://yapper.shop/';
if (appType === 'Dev') baseYapperURL = 'https://dev.yapper.shop/';

const tradingCardIconDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACeCAYAAAAosgh4AAAACXBIWXMAAAWJAAAFiQFtaJ36AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAFBuSURBVHgB7b0JnF7nWR/6vOd8s0iypRlttuNFI69JiGMZCG0IRDMJSYA0xG5TKHCLbXp/t7/e+2tic7mAHYIkuLYIcIl9e3vp79fFcqFtumGntNBsnlFCFkiI5dhNyGJr5EWStc1on5nvO+ft+2zvcpaZ0RYt9mOPvu87+3nP/zz787wGLjEaP/DQHQDmcb/AwLT7dxpKmASw01kGO0oLT0NudowN3z8Jr9H3nDpwiVFmOutKW4QFFobcv0MmMyPuhy2tuYOWu03GD26ddN8m3OJPQD47MTa8ZRpeo3NOGVxyVIzEv4wxFoxFAoQkAs+vAzPift5lTPbHUAxOORA+Or5/6yi8RueULjnQlcaOIMj4F4HNgDUKNhtvy0B0qLQl/XYgvMvt++TEwa07tx946C54jc4JXXKgM2U2hNAiDgcMNvzuuBl4cNFvEwEQtyMQGt7OOhEN28YRfFOvge9sk4FLjBAoDnQjzWsRVU7EOs3OCtCYAxpT3Y4/hUMas8u9nmOvGR5nhy49Tgd2XftK4mJgE5Dx95TzJTsZAnEBO52+txleozOmC5LTjU9tHTEFPGpyu23j8AOPncp+CA78bsh48IBy/zqBCQS6iMPx2vqRmPsZOUiyytgdkM3e6SzdSXiNTosuOE43PrVpyAFn3D3zjWVhUK96isC0GOo5jiQcSwEnxgT9TgGH603zS4copX1sfb01G4xd8uSir+k1qtGFJ16Lwc3u3xH/wC1sQO61/eBHP7bggzbZkEm4d6qvBRG6gEi1uomtrSfuV9r17pq+Nr7vwQ3wGp0yXVCgGz/w4N3u40OsvOOS8Mydw/dD7p8n57MmnYlwG+5UBxOCx9ZEZSMnE6CpxcvHslaXs4VLxx82eTb+GvBOnS4Y0BEXM9km7+rgR0/rjDAmB6f1JHIPbB1v4nqlLYlDBjAZ/6kAiv5krwCyeB89Tv1YAazuc4UD3mui9hTpgjEknEP2UXc5d9EDJckW1jUp9Awau81msEVdGRMOjG630bAVycnkOLQ0OlajsdBCrOqRjzl1sxgX181mbj9fYTTWgwdGszxbZwu7wWmjQ+7qRtyFYQiQh9LCpOgU7tNMOsnxtHtLJ8fWfngHfI/pggDd+L7f2QBZ8dTCW1px8tpgWboHnmXZ5hJOfMLpg85yddzHO4I1EqE6HEImMw2qGlAUw8bbt33GQE3ANzG2+v4x+B4RhuuyzL7f6SGY4DBio3tqfjma78eR82uWT5scnijBbP9e+CIvDNA5DgUJh4qpAWiV9a1WaHUbYyq2QR1QMaXnqxslAXhCJfzS2NoHHoZzRPhyZnlxl3ud7pZEBqhf+2LGI6baGExkp+iqOlU676CjALux49VL8W+rYW8uoIBw4IMGUbgYEdkiov2yFu5Vu57qcQJXEcpn1p9tHx6PEWyCVHVIr9O/V/H1tANwwTFDlaHXu2/sio88AWeZzntqkxuSTVaVr4gToV9CDQrH6SRwb+sPGVRHm/8NF3EL8XZhGcScFNq4Gn+Wcqn+oenlk/Auu9mj7sdZEbPsJDePurduVK4pXA+9iRFwxMWjdj+EhdA8Hm2A4ywIp2qMQN55v/t+1kF3Xq1XHFRW/GVwCGj0JWH5lQGKEGcr7hHb4CpRqopRicNG26oeiOI8PQqDOr6OeJk/Dv87+md7PjwKZ0jj+x/c7MT1Uw7GG8P1R+e2tXEBsdDle1tYL97e2PonOc3pLDmYsw44pPPL6Ur0ycUiShX1TLnZAqKBuQuRFU7pqc75wnG9nphuq3wriNywjaxL9zMm5S740jh13JSbAJNDT4OIu5XwuEWnODF7viKoKaSqo5bxfZqgAgQu3qabRi8OhKFWAyODYs4+DeeAzref7o5w04Hc2y3fDBiTujxS31n0Rpt02yZSEamGSThG5rdIt484r40fVLxtohMIF7Kjf7Ln/xyFU6TxfVvvJu5m7W3+0FBNTtA/kASYLL4/f59imdr6NdNyCP7JDFIQyotU2qfHrjo3lux5A934lPPkWxgJIi4SlTYRJaASNYoGQLTeGP8MYrdB863FoNVog38o1uff+aMoSOtUd0U457Q7IKZNlZCV9i44BaIMlgweNeJbS8+UQXy98cvRppsJlzYtYrbG7WpnzE6PUy+GzhvosrJvI34qUOT9qlqX+tUPdH2QIlTK7zZLFaDJAKmyx0hkQx2kVR1SAUHbAXK6kva3ULz/8Z331gDURAQ4Z1CJWLTpNcdisJRBqbpIoOEWqi9qJFYh8ZinY6n6XWbPiT6HdN5A5zzid6RLqpdiowcQD7TnLBAbGvHA1t9+K4OfBXEZnQdq1LRMARiyj8O5LN2R06/oJbL0WQ739c2+Hxag8YMPbRJ3SPQSxNZ1LMYBQjKCLs0q180pNeG3Ai9L3Sv+exkd0KgVAW8ffmA7nCM6nzqd6C3NnCkFWqS7hQGCJi4FjWQi5bq6XXqOqkWXHj2kwCeWLFDc160s3OICuRz+hm5ZjsI8NH7gt+4wkG1KlwbLqDoG3tBSlm0UmLrfAkptAzFoE3GNHxNwDum8gI5ihQDD9MN6TiVrE8XMcyY7r19J18f6jjj2/Fapct18JHqAYhWX0WWomFMul9X2Qz2uRE5oyIJ1fwjA7h3QOgaY4JA/2myYyGVAVaSnKgb66WQbUANBQVTVRZvEdhg3k16DMedMtCKdH07XG4zSgepKbComYn9ak9iLuUH6vVGDbgBTw5sOMdeoKuQxdxFR6v6Ey7m/siwN/rkFQ/9t9z9YB01UwrhD6or0OuiYybWxrhjfq430WxaNNnKo67WJblnhkjFo02WJzpeV5zQJ4PyAjjIg9K3KIn9Y1ZnrP1tE3YInMs2gZmoS6UE3DFuFbYPnVbcn4wEKesjM3UjMoq/O4ufJ2ZnR6lV9Fh2/VDwUzOTou61dW/SitKkG6W+vmkHz+nRZBfTT7ziH+hzS+XEOG7OC46kczWHthf2aukG8uW0Ic9l54qjptlVLzzTsBxWultkmjud/Yp8A97KQHoeAQGeJLYS7MfCKsjAoZnvQQ67+mO4+vmeTi8KUv8Hvexohqetw0HwNqtsFJ/A8YxGT983VLHQvzrNsEdk+gcb3ODWhD6NKdnps9QOLEsvnBXSOtw2VFTPMVqIAabzTNroJEndF3QHaYpyE/WPLN3546AluAqju6p3LpMuh0VAYEqskWh34yJgogYBXph0Hupkd78gTlhQsAX2zETAfgGQ/qL5kpL+hpd5y/8FNVU9yMLbc3nQdHlzGrjM2G3GnHXX7jvhBAbMLFhmnPY9hsKrirEuDfykMbLxPZXD5e3SE4PSMAAw2kbIelNG54tOE40TgT14GABafyNUIZATaAh3DRnU7XFaY3m162D/b82t3O6Aip6PgqYKmHVgpR4/vwysOFL2rXpuJbKiWl8ePbRoSdFc2un3qt6fd2zNiUQUwZgN96jVARs5vA1l6PrDrvjD1e+veNvzLu2ABOm+gEy7Fr6m1i+BMVYMhXZ8mbupSm3w2bAv1h5KKPAV9/WVAY0HBJQZEBMBSXCfuvRgORy42WeGSqFdkWSaGCJgUULX0qZqeZ8PrRsfwmTgM47peWKfo5Q0+T/e50d3WqB8bCw2qjonGNTybXtlDa/0RWIDOC+hKVLTZhvGDKwMHqUM4vIVmvgRO0gvptYdo8Brf8BB3ra5q2j42RILILiPAodZGn9BzV97zXI6NChK7Q48+NTq0ds2GOxyHGAEJk1HXFZt5/TF+gHGwXgapRc+j7SEAByTdKY5dCxejoUn2h1TaNI1Zu66Y6rx63XZRRUrnx3q1ZpeIKKjoV6Dfw3L9DS0DT8pvZduqgk5/8su2imv9TC3Yqt4pPjgCmQKP3SS4nL6D6HYlc72+FUtXFNDdBOLP01AZ+EhJc3pW2/L4dxWQYghB4NACQNt0nKqOyyI8XmUW5StVXbgt+zul8xSRsNMqVaFFgda3L+hTZeOgqxFQd6FU32ITHXmR9a8V4CFQhMsZ5XIsRnuk35VksSKH61l1GOPvAbPiXvd7pOSwFv0xYAO247hIOHsJbRRnh9SvuoQ4aaG6Zx14dZUEhPPaxKfXdi0emOtgEXR+QJfbyfDDtvrRwhZB14m3i8Fja47Q6uAGWpINm+Wd18GyzlpVzhV8oAMdP1RNFqCoQ9lDXc2qlYq/2VXCnE84nFEuSBknpu9eBlCpXBFIzHIAHzhmC9H5NCk0RBcA2txI1dEzAPNYwp67m/q6JJslOqep+S7TZbEF/IWp/3tB4J0nQ2LpJMCMUR9Zo77GekgCMklh9xtE4tgvCzpbkzgy5oqBNwECTqlbnoSXZ//KdssTIvKC9ev3JLCUrL85rlaUTndD7sa/cblht0lPuR45iIEA18EnKFzPHcWZh1mG4jmTbTKVhF5nCtwmjTg03U/1d9ANAarrg4sFAGqjgy9AVrv3QPMcy693r1kxgHrdLpiHzgunGxu+bxoLP6KQTVgZJWVGorHC4quiU988E6UhZSYNnxmzsv+GBHBIfdkSuHrgB9s4AwPBAYU4nONSBYlWBB5xM+FoPeZ4sZ+OdT2bmwFQrsZtaUt1KlsW1+o6SR+2MQ02E9iKrmlb1IJ2B7Npl5IAFRVG477W1tPiWw8B5YLpXOcty8Q9zolInIQVPp0n6GzpjrH4sJF6nAI35g4KvsvytdBEfdkgDJjLIZxPxAbCpCiIqwVdjcBlSgVa2RUOiEZEL1iztqCrzLJ+b2SkMdpSwmcFXa48YL13sGkaeuUljKmJq+mY+jHUe4MkG1o+g/hOgWxtc5a2bYgG+WMYe+GCzl349vC9TPWNaHAbxS5R9QFE322c+0/Hp0HpM0ugjbKsA0FxDudG8clcrQtF0WWw2a5b1RWQlarbRalNpbwEmQk+PMrFYzHMVq6xwZqFRKxKwCLcWXucOX5hU0szTkrwljsEYAXpkebtNVHQ3RRgJkmAsFFWzgXM6SAfpJCJKrC2kuITcxzTmtsGEEdN47e3ujX+O1segTbqljOQWHGkf/UEWA5wDlQl628kQolLkdukCwzArpXlxBXBrTPUD09BSM5iG7JSxIFcFqBp7uFqxJ/if9kaZ9f7itfVLc0270CTRdsgdaDZbVTlgPE27fZ2oPMGOtLrACbSG/AsHqoch9fbyoOwVnMyuPxOra963QVuv3/uWwSaKh2ce85B5IRV0VaS7tYlLse6HAJKAdf1ICQg2p7oeaXxUQnyz7GiXXqwCbisxGohuFpE3JpgQbaDpeK7m4cLzqu8WRmbhjW2QXo0v9CmkvSKf4sB1HmtBstM/kT1xkU30O+Qvt0mETkhYTFL9A82iUMygO7jOJ194eQX4Whvt/t+FObsMeJUh4sXvLghK7VksBWir6m1qst1nRUjwvvpvD5XyjnZL5e6UGhbcSxL2Aw5o0U3TM/UfXMpd6uAAuJs6KprYyHfpZ1PoiZkTNARTcJZozGnay8XwerOK+jK7Phj7mKl01Hdw57qIOmbFm7YmCYTP+aUMfVg1u6dfRZenPmy3XXiiyQyV+TXkngjzqWGARsKpMupiCVRKuACy6JVrVr81IgEilZgpR3YLcLcs4wyUXifIF6FW+IlzsOhUhJQReNVNoxB+NXM/eJxtY3Wqx4r1R/Tss1gSODMRPPTeQUdttZygnAbfm/WJWKq6hw+vNXK+tO9U5eK0sHuc3aobx2FyL31CV0buBwCqyvOYPfbzln+7BlxFAcQIeAEVCT5Lfv3fFKAANTqMuSeJF4D90tm+6mSvz2M2nbs6v6bzfqlG+G6JW+F1f23oBMaoOa7S/UykxjExqb6X/V0qe6Wfm+qN3GqOmQLtks7700RyznKSphWywiXhQ6YSsztjB+32G3S5Mdb8K0H8ZfB9Nwu4mArOuvcAHcJZGilKvCsGhIItlJ1u24ATRnir1aLc8RwYBD6dHY8o1i7JLIhWLai41ld1rPhOqtuE1RL+sy6JW81Q5110DHO3ZNdDsPuxblm8AdbLV4jw2Qj4FqvBlhbFZ3QSu0RElqeXwSgwyryzGQPx9wqvGGpPmeZe9h6HDYm64FbHzx2H+AfiTOJLuyb/SasGrgBgEp5BHgkauccIOZI1xJOZxhwsT9OdDqrul6PDSHU54yK1Z63YFUcQy2U1qtsm2aaxIT+xk6D+2cgWw7LxBeZGmfiNuHwD4Tl8fd2Sl0kzeqMPrcCji/YiuK8gw6pzPodt9PMk5jaBqMeoYi5JC+p1H6KRaw6GXIa4mjOMj3suB0SRiwK0tuQo82RP44tVPdp50TUFmi1KkgMiFPYGwcQic8y9tkV3lIlMQ6xNcxg1QQCPR5A08tl7dJ8JbTR0s7wPONlbWo8NBtpbaIWGo8cjbuxOxfTjfSCAB25Tyzcw7+qnvXqvZoGb3jw81VNfiv8pizlYUsUwToOhn9FOWfmihOwf+YbsHbJGz1nY26HzuA5yZOTWKsaGRFnYyB6EWkTPxzFNJGrSUaxAk8tWhNVkcUJoQTC0gAEcaj3hC9GG6UuIbPAS9wW3UjHN4QW29paiI8QpzRdBF0wja7H1tw/4bh9rYulTWKO9UFJveGyDGzgNhQn7XJEoWTdTAElfwS0vSeeJh/dyoEb3bI5iJ3CHoCgzmJ1DOMDjoyCkh3HHRdWu3r5W2HtslthMB+KohaF52QsZt1nwQYKclfvD/RxXDoeVC3PY8U+aKMj3d2VcaqrGNBORmTwfJuYVt3PZBOwCLqw5nvNBrdAeXIUJwhJB7rd1GcnLP4J8BCCJVdp8UsaLEjywomyz/HQHv/Gmi23fs/xHXD10rfA3mNPhVw5nwncwwMb1eV8REIsV3aNFHDtih+BW9f+Ly6eu9Rf6Xen/js8f/jTQMyAqiPwXckMVkog98AyGlOiZxV5QI+6jWWZAS2xoe5jWU61EJmzD5d3rqbrcxasPwf+3jf3TQfdE5VxWpi7hfa6nD4PPiBioM16TY8ln0WxHRZBBi4wwqoj22fHdY4vcXgFd52RMhSaxZWUdf5hKJdDJptT7keZHL46C3ztQunFoIauEHy5G/TvX/u/mecPfwb2OOCxGMXj9Dii4PU1CYVJupNmmizpWwVjIw8mgFP6yp5/CtOzO8mtkWW5u9COA1afM/Y6Dn79BgGUZ33uyXfIOsXl7rvh9R13f26ZGYBrl/yQA14HXp75Ko3OQL6CXr4TxUFKsaqeV5NcxXkM1oZCpXhdDD7es82vl4rciCbHVt+/HhZBF4x4VUJrtlfO3unE2uHYWesV7mIOesWcE3mztiDnLC03PQzGO7HYczpa6dbhd1b+3Xf3yetmSZTiMVS8ltAVJ+8czPaOm5eP/gVcd/nbxBGM/jPNKnEgowTNbsXSZF0P3Barl7y+EXBI1y3/UfAgLUvR/4L/L/zp72BgkEXsnvE1S95CgHtp5ivuqmbc3jNwrPeKwb8UcNXsm8iCBVVZAKrNc+oZ2KmYrmaZJFatWXyXpwsOdEjvXrtlR7fo3Ye6FYELP4tZYF1rDoJONsd6F62T9QS2bvR9Dvg4c+rs5f1K3sYB0BCIJeLw4tEvAepkVy69FRT0rBeGYL8mbAZRyzWuS/tWtupLnWyJiORSjBH256UvFFvTCjgxXqjEa93StwJytp0nPudek+MJp0nDX00cqskHZxuUtyQfEdJ9QulAOGrkPJ6bXbAKTOmCBB3ST1z1W9t6vbl7SrYgPZDwzwJZncy9CuZebHXOciRBtlPuV6j7A7dlw4E5Hn56TsegmyuO2BePfAHWr3in52Sq6JfWcz4I7o1QdvjK8Wdb1ZUjsy+A5tKVUqCtXC6cg42ekGDQReevufHy95BxtPPYhO2VJ71fL3CuMgpRmQoY0+8t20GUc5dwM14YokC20Q6xT4xdtfiO8hcs6JDee83vbnNguMc9iOnSophkroeciYEY/lh8MkCZcymHEz9bsqwr+/R8jhxbj1TnYCYPbydut2bwDW69iHgSreRLswxQ7/oAzYvbd/zrsGv6ydp9nOgegJ3Tn+HEARvqYhW4BR87dcMQ4JaaG5e/h9SC7x75FHSLk8phjYp+sdxttTFQqstlqWsDakkEEYDr/rgkcBbl7On3PIdTmjvjnFuv1BasN7gh65jb3PhuwHRm91KNOLwP8XS/hrOkbTmJD87pZO6zmCx6vaedH23yvdc8vO3xl/73HW7YHnfbjagOzFXANFQc54RS3SviMpFqK1xOhkXqqC0LKzUK1luwPOAOjuWs2eWAt27F251B8VWIw1pYy4r6myXTs7BsnJQ+IfMvdv8TON7bD29c/TMObPthz9G/gm8deoL0SjQeEFSZlvwCpz/RVeMVotXKNUAwmK2AW1a8Dw7Pvgy7jn1ODI6OUw3I1MVWpjTFBj73jHhHZjQrxyaJrvXoRPrJW9TFLwNMRSin7ZchBQh8lsrEqTZQPCegQ6BlsOQu92DvcM9wI1UAU8ETFznztXKYx6dlm4wAldt8I46rzVAMZfZPXvogAmHCvf073Bu+jh42gDwrK2MstRbsNjE+UVKsV066Y3cJRQZKXCbWLQIKm2gy12A9qyzheceZxta9HYaX3AAHTnzTlFpAjfBQR6+vXyUgEzDx4o7P7SNL9cmdv+Z+50D1GhgKz6jE3O2OLhGyzPm66XlqTNk6wA3BG4c/YI7MvQDPHf4sZzWXdGbAEl/Dmb7UBseQqEYrF3uX5FIXUmVWDCojhVC8rMEyNTaaqgrq7pImY7arTv3F01kFHc7s4m5sk3sGo6XP8ZeBrft49DPSTPFt7dAa9kFZKpYqynKUWDlxuK6INC0q5phDJDoEbKWck1wo4Tu9udrSi8EXMj9Ko0Cc680S8G5a+bdg//Gvy7EZyKVspxEDFst8LHwn1iz9Ppg+uZPcLTgTGTF0apSEOhz74Dgcx6NgaGgKepEGnDP51tU/Z6ZndjqR+t8tukoI05n0NC5LHhuKQXcEzJizh9yupFYVbpkBCHNKBOtVG/dUZ9XRh6TuEL9dk2sk2s88djod2M8K6BRsNLOLAagVlUC4gflvhBXdDJHmvFJUrwLiHYXSPbeSLtl53sRq7UUtKhTghQxaKcOqXC80oXbiEeL6BKnWEr8bcUMC13cP/Zl51/U/BsODN5sDJ77B+7O4BoCgy2k9K4i6MDQ4At8++F9lPV9aKfXPmZGIqvzGuyw5adg5fa8yt629i5zTk0c+j/48zoE2BDb3SlpqU0Lwc9eSZSX5+0iG0AuLXDunMeM+KZkx4jtnNuqt0GTEK9+r7hZIOaU+Q9gF3ZktcBp0RqCjOasANrmB2ChX1QCoYG7Hb1s74QCh49RScyMEGIkXywNv0FIDdKCWBD5jGYAlWbW4Nw5+Diy0iOvJY7ZWQ2YcWfARC2O1FT+5QizFQ1FXmyvnCHivX/234XO7niFfHPvY8HCFKaWAmtUGBmMnu8yB7nqYmnmOQU1DIEKLzsi378t2WI+zK/rXmR+44h/CC0f/3E4efpI4PmmbrPHRSwcS3iNOR8GD0jAjLRy83D3bnF5MjM4Cgo9Ox5EMUL1PrygyCmzkrwuGRj1lzNrQd8a9c/edisUa02mBjucXxWnP7QerItREBdSyDNKbaFNg9TcAC4COYXaQK6fD7/R2lwQ81JU6rExT58uckiQLmMV4Jh2FHg6dkoEiIhc89xOwiZgM1VllMAy+c+hP4cbhn4DVS2+x+8glolzRJtySum+6Iw8PrqdzT818l7gQiVO+E9bnSBfr0GMn3c5d3+UD15i3XPV/wOThCSfSP23wJeNWQh3Dc/CVdK+k0xkxlkp2k2TC3dxr5LimM5AARW5GnBdfQCzsppewZEMDQ13K/UKi03x8oGp40IBvGbvigUU7g6uUn+L2DnC/s8G9RePu64/zkhqQIDLRIWwD0Ly9qSioPiQjrQ/Y78kizUa6VchZk3Xyx+EuLh10Pi0XfWBisPiQmMRdJT2J9DqySn0yJoOqKGfQcnSW7JiZnP4sSP85q6KWK7+shOoArl3+w4Dhqp1TnybViSKoLFZtUyT9Whf9+P4r/1cHtifhuek/i1eZ6hc+ifU56qKr8n2bYDSRbsoNt8WB67m9VHIVzK1LURWsjqDoxxIhAxADmTGqTOUTY6sf+EdwBnRKnG5830fvdU9xE1iayDexhIK8j1uLtsXutAmfpAKDPrIQH+TlGXEwx91IgbYkPtxDdssQMChSSLS4R1rQ+0NCi5yZWJfELVq7sGJgPaxe8gbTc2GjPUe/Bid6+21kZAQDw3NDiemKofGtg/+FDIrVS9/gfHFP29JntgjoyfQo8GrhistuQy4nBgc/r0yuTGSbkbfRXHv5j8KGK3/R6X+fgO9M/VeKsaJCYayKVHSHiHmCIMesAFI32CXk7p/EKvYRMDI2LA0yN1y5OIJLMlSk4wGwgZGJ8WL8fzgcmQF/zRB31dDHAbDj6LHyHjhDWjSnw1n53P085K5uUMAiItSDpwFgscaasGioALK2r5QRWjWrLGgPOhzBUvwN9PZ6ZT7oV1a4nYUfvOofwRtW/11YtfT1zqp8E1w//C7n0njFTM9Oir5XEIhKX3FfctKAGg3I7RxYERAjQ+90HOyT/jxGLWMopRWsgTet/Tl4zm1zdO7F5B45ZyQsWLdi1PzAVf8Qntn3R/DdqT+lTTQWD6qI0L2CNCa00UBxlRm7McRKV7FL10+mloksbhD9looig7snLvamZHqDVWm8T+GNKmlvu+P4iSNjd67/6BlPGb8oTjd+cOtmdxWbhANF1g373eq6mZKpmOipYpqa7ul+agGTPkI6DSrQyNlYYXbKshvnnPQ5kOaCgBYvvdkZHeLay99qrlh2e+3ot679eXjx8J8DJ0MKh1OgWs0wLj1wkWv99YHHzc233AFrlt1qXjm2g+4ZNSgTDBbod0bE8JIb4djcXsp4oWtTd47YWcgbb1n5t8xtV9wDX939By7W+3m21pFTZSjxCJnGUtsd5gmMw0zcyKUNBoM7S+HuXSWBKY12GVUeS4aE4ZQpHMtSIhQGtO2s6uQm+FOSGAT+m22bmZm97871D58x4JAWBB3NW2V5GiEGCV2tiHhr2gEXlgcApdZtM+CUPEBRHUaXACvBDmAZDV6OegwqzZZ/FwCSccbnyc3Vl7+18ch9+TK4avlbYHLqM3IGfrikr4HnGBD54sxs7wh868AfO8D+fdjrRHRZcUQjuFY6R/JccQwOnfw2XpPoXlZ0q4JcGMgJ37T278FXdv9/gFEPdzdWZ/xiwInLw4lOQoS8ABnkdBw2FHgJWrR07UVJCoYzUdiKJXdTRm4TDLFpIbrhrgOGZbiRl5V8MCK1jEzqHFoWuy22vPfqh7fAWaR5QYcczj3GTczfI8Cw4tlsdXpg1fw/MJ9/rokiPdHywyiJ8xlyG2Sk8TDXY+5GD9BmRi3qJZ32WgJ5q9GxS3FY8fXx3Xj/nRWxxBzmG/v/o7n1ir/v9LZb7Z6jO0y8Hf5/xWUbHOC+I4YIsEVN3zNyY7zZcdhbVr0P/vyFB2H30a8w57Hqv2MjSSo8iLnjJ4e92DAjx6+1opMhN8/JeiVrlUCYsRVtOzx2BY5FJg5joxYsetxRw7N8XZkgLGONxj/JbKdbcc97r/mD7XCWqVWnGz/w0B3u1H+gkYDwnFSPk6fmP4P7O3YmGu9vrLhJfKFwm9uEj8D7ymhY9kn5eKrX41QUClBEr8Og/crBGxvvb1nfFXDUxTWPd18BNSA0/TxYyXEIzZJud1n/VeaaFT9iXpj+HNy86qfgljV3wBvX/jTcuOon4ToXq0UAoyP5RO8gS0gO15k3r/0Fc8vqO11o7FedMfKMvhcyFlbGTYfBQtBkrF8GfgNFhohbUJ2PU5Pjpjwkgi1PISUOcyNZ1JLAGjvKCzme3WKL2V+8Y92/+BacA2rkPDy7shl3X9eJkmrjOVjlxlvE6mIp7F8Vu8zey7TghgZJ8+Qwy2PW9uLcOMk0ifLmHOj64G++7pccx1uVnBl9b/35UlTmXYjrWeeq+BQ8f+iTos8VonDn3jJVYwV/Xbf8R8zY+ocWvDvU657e+yg874yK2668B16/+u/AZ3f+sp1y4S3RQYkzUcwUcuI8FJ8gD0vl0+TM7S1bpqy75uD9bnIs2p/VEVYhvU8uj8Qoc3Q6jupzBkT8moke9O752fUfn4RzSI2gmTj02+PumY9GHKvi5IWIYaUpz3Ugnm4adH07BlbXhkTOOYNZwD4/zqc3dd0l9SgxM3caxJqlb4SrL/+bcGJuP7xwZLtz8v4P2saB0bxxzU87q/QdxPGeeeUPwUUgojefWRXz48K6bc1brv4gnAqh0bGs/0rYPvkROz3zPLAdKyCC4MbIIncGgQYyr/D355fDDcPvgaV9a6BXnHQhsnE42ZsCBVsAnYCJIg96PJ2kjl1QQGFGHFzJSuGrmMjyvs0/vf7fnXVR2kS1hz9+YOvd7uNRWhlibRXOI4CIcGEqQeQUaGdKGkoroizgOYup6ZTUSfWpcwxCXxzdlZTvLv/WdhCS06btHErK+F3tgDfm/n6Mbufrex+D72DsNCp63nDVPyCf2unQC4c/DxOTv06cKxOdCk+k4CLl3xtBAYz4t6z/CvjRaz8CeI1K3fIEfOnl/8dx093A9RMZ1V6QT5Os1ZyW83FzX8BD1r9RwUVcfEdZ2Pt+9qaPT8D3kBJQ0HSQPDvfyKJ29pwpGBLROpgv8N/2O6WU2xHoJMvXZw57scoiV8sKrQcZpZubwtdaaBZwPL0SlQ868K2F9Q541698F53v6b3/isCHOtsPXX0vnAl9c/9/dBbrP/WuCrIiQdubeas75lgEno3rtlDWSpVOdg/C9hc3E4c0WOwjYKPCniynWgoCXtbhZfEfVZbF3/MdYDqTfXnnCej2tp9uTHWxlDzsiYNbH3WP+e5kg1ZfWkwLu01OVQdMAR1CbAoo5FhUaEN1EAy2stRCnC5X8LtlgD1JCha1XLnfM6H2lMoIoawUOqMYW7vszU4Xu8tfjzMg4EzpU8990O49+rRRUHEUwJDI89EXw5+osw10lsNP3fxo6/E+98IWanmWKdg8l+sjsGX6ncHlztZn8rxDMWHliswp8/DH6sSku7onnLH7yNjwqacuLUQeBMTlCvt8hVs1cCExlhLuNr+eRnu1ZJ9AK9W5JxIbDaEOQvQ8+T5LaelaWK1dMn3LBjEyuBZBuJxUcxWhftVqMgBu+54b/1+48rLb4WzQ3mNfg09+54PM3UgkslhFQK9ccpML/F/lAH+F+30FJQ4g552PPv/SgzBbHBbgCMgy5mA5iduO/41dnojrSeljRgYIJhbkhlvfNlcuoHHhVNBtG4d/9TE4S+T9dM5a3QQVruaBkjiDT11Nawdc9bO6vk6iXLNeJHFDXo4eAbHOrC7XP9YIxQnDCRqkeAJlfnO8UZN+TJz9Y9FFAmeJrrzs+0lUX9b/Ovd3JaxcehNFMdBZ3S2OkzEzNbMLDs/ucgD9K/f5IjhXC8V8q3SydygCXO6sYKml9Zyt42tos+Qzl3pa0veMIQhUbzEKVxqzsSzK0Qn02WbZ5rMBPjobcznAeT59k2IVq3VuF7k6ZIvkgLq9YKlZPNvGCEXFjcILKiKWXSfBWpVCGxO+++qvqDnNHDuBfbsI7UcixoQ2ny57Em/k2OPapW+Gd9+46Mq6RRG6UtCiPd7dR39TJ5+HE+4TObbXyyDz35f1r4W3XfNAYkhgRdiXdz9MPZQVSLnjXiQ2sYCbC7eF+/UxILWAmzgd63Scd9hEzV4IeiqZ2WnNyXeMDZ++3secjma9g6H0FAwUWztx+LQNfrY4ahEfx4tZbOdg2kR39XgqyoUxkUVM/nsAUcTpj8MjsdcJws6WAj8FqPPHcIaF+K1A3AaWv1vmhEDJlujqONuEgPvSi78jOpTocpQ/pxGREMpDjW+mN2W/9PLvGXT7rFpyC1msu49/jV6qoMeRjmaDoRAAJ6KXuBxzQtXhOjYUW+s4h+egrrBoAj9+vqVdDzDwvAuP/ubYmvs3w2kQgc4d7S6OGTQAIfldFYECvlo2cN3x68vhZPK4+dwpNhT8JmlS1tpYYPo/iRtSmId0JTdORSEQBI5kGkgjdzbuqgCqpRqjt4Li72zpcgkhtjMTOWaDr41dKMRNxFHM62aLKbv72F+avcf/ijgWGQUEJDEcxEjIVI8jTqftKDqBw+FvNjCqqlIVdQq0REpFYUl8M37Didx1Npu5bzHtwWLqoGi1xOmstQumkldGL1wIpCy5KdLQFn9t19+arGYjCa+G835M4ITG+pfWilomuiiH8TLDkfIgvpd0rjDL+6+Fpf2r3ffVLjS2BoaXXE8hMiQM3p8LspS0IG5ZyCCkkxu1XI3ndgaLbIQrYq6c0QhG5I9DwGUd/5uPgdyvE/nv+rzojq/Ej2pN5UlxWJFmICvvhnJw1GFo7FSs3I6IVmh78GFNs27mgUoKfCnPOu123q4jNJ/3ss5a6DeXOwfHSZgpp2nerrCPGBBGRRFfG/gG9UHA4u+BfJVZNrjWhcT64fK+15nBzjAsH3RA67CO1C2PY32qPXTiOYMx0ZeOfBEOnfiOPTK321y3/Ifhh6/7NTibhAaDgIyzdSRiEEBlfBSIIxe5d/KqWpGbnJ3KDDSqh1X3By4jLke6W4e4J4vWXAwwG0smYvD8FDKjaV26qlFtqpK169yLPH4qwHNXZt/vW8/KUapKPtc2W1PHTvQjLe6onKYJ0D6UYVWE4zxdVw3cRm1MlbrlSbNndge134+Br4ESPEAnG6B9lnSGYDAfRneBwRkOB/uGqCcvKt4nnDMVWzscdn97jn3VhaR2mmNze+xscQwLrblyX5zFVopu9h7fAWebnE5nBWjC5TLi3oFrIxcUQwLyWPSC+tIw9orOX8PRBgaXAk0sVXaHRDof+JnEITzjrMq9IlKG0h5dUmmLwQQ3YE864L1jMcDrOMBtTA/EqeQsu2mJjV0nzVSN0eqxopI1UL2pXWdc2XdDAjgkBuLt8MLMF90wDsJgZ4UDVb8b3gEYzJabvmwZ+aR6lpvoHOvtg5m5Q/DSzJfh6NzLTkQedVbifu+jE0uWJhhxPjo9t7xNqsbwjTpQUjng2dTtnMUqwXwjQDKcAJCx4ZBxZ1EjgXyJ0WqAn/U3BaUDGoGL070cEHNOX+dwWye0JKMUqxCiDENv55FuoaQgNgZtkg8ZR4vMenfliwJex+b2TlOYu933u9XCDMo/HS42HiCw3cDZJBe/9mbErHk+94jSfBPG3bD0HfQdRe5scQTmymMwNbeLfFXoejjZOxhistK3ROOvoIZ4rDyLYKkpDdb6WgFciwkAZwt06C75yZv+Geyc/rR5dv+/sye7hyJQaY2q54Am0zxCExkaNlORazMfVci9leqdxLyM9MH0Duv+0Ca3VhMgNQ6dMJNYwqFla+zj7uu8A+YPjM0Iy7wcdW/HJrf7SJuCPz94bHhD/OK2FKZ6iOymZe9uvdDdM863JW1PuTVq17cBK0NLMdMEOt7W+eaU20lL/lIC/trIRuoBJK/OgrYCe8+N/+SMgYeA+8zz/xfpc2++4hdg/fCPweT0OHzjwH+Amd4h7z/DTptoYTpfm1iqrKNRCAtFqPjjcqejsg+uD7i5Yp8Tr/2O2/X5fX1Yqzbejc8RoNFJzFs371PdlrdzL+3DG1fdfx+0UOMBPjf1u+938cp73TFGocGCbDxQBfWL2z4F4DWDPwhLGjqH40TAkyc/r/txZ6OodZhvDaaxWOxVF4e9uM+wCRknNPkIACUQVNrzc/svngHHhStuGP5xeMvV/xj688vgTGj75CZ46eiXyR+HYMDQ15vW/iylVWHa+vOHPgVHuy97kSjOXm8YcFC/Tzp29ocOngS4ftbp3G8Nf7FzOKs8k/lCj23M4XTJ3jm2urk2dt4DI/dzL9gmdxF3uIsfql5QLa4aGQWQ3Iw/Xe3m42Og/obAq86R4AwJ63Q1v6+laY00KtF1gX8GWumD/ZTy5Btcc/stSoGC0OVSg/w9UCPCd9eUDuXXD78bfvjaX4Wn926DFw9/AUbX/xb5706VvvjCR6kvCutiGopiPQ2P98Y1fxeuW7ERDpz8a/jOwT+B6bnn2e+WBQevBvFzI1wt6zfM6ZjjdfJ+8A5hAqyxzWBriwbNQ5LEu9A+8ixVB5yCfOb6Jh/eok5K4MudayWjAp0ROQHU/XPzvUnxPu2E+tuKzjqaBQYzKI47w+BkORUfQ1ruayLnrIbETAiBcVZxmLEQq766fu4vylQB7bzek8Y3XUkC4Hb564ff5QD3K/DV3f8//PWB/0xDtcwF4BGEWNu6GEJD5Au7HnJg+oZk+2asi0kGCCv87OjFY2N28bXL30Z1Fs9NfxKwTFJBpNGGPO+31JPY9INyORKxBE7igORGaXsOzSrO/M8tpcWAlrdpE7OnzELH9z/0MXe8e+c7mT+4SXPqFny7Ek7Zni6FXCnuuBmaHc5Gy7qJTodpTdSZ02eeFCaeubCQzpdIWMuANalfevH3sM2DGhtGG2xj7ez1w+9pBd9eF+pCcfzi4c/Bjj3/yoFjQECTQZxgyVkfsVXqXD3OMX3zyvfB1Zf/DWd973Yi+UvwyomvM8AioDF362ORmjHgMolCeEs8eS4ATUZEdWz9kzPVfMj5M8BNQ18U3gzGaLqGiE6jl4k9DD70FIesfJQKwu8Qs2ulGGjJDfnj8KV7th2MFv9n9XtYE5apX0/Dsfo9uiPalutquUTw5+EvXvp9p2s9CeJu4EmfgJtP7pz+LLzs9LMPvPGP4csv/a6/b3TPYFf2rotkYGXY6MhvwTcP/CeY6x0j4yDMeeZBwW4REoacPu5irfDsgX8L2OH9xqEfh5uG3wvrh94Ju478ORyc+WuxStWtor68XKxb8eOxDhLcXBzDSZe3SqeYi6XLU8lW8eVGTmU9LoEULErHiXi8T4nTUQ2s4RrYdrLgnY4Lcu3FiuZ0O21YHQwIbWpNnM4Gq5bT1H3Dakri7Mr8rdy6lUVtj+D4pjV/jyq8/uLlRwhUej8CS18Mim8zJnn+6LqPwH/6xgeAq6woVQBkigG61ndd//vk53v6lW2S+TEoUYMoSmDEpxZy39hqFWNgad9qe+WyHzBXLd1AQ/Dy8b+EQ7PPqVi1eTZgjFqxJk1T8qAQ99AixhbaLFipszBNTuSavlg9XYXbLbrncB1w8dkTPxDYmjPZev8fLMIcNhXsGT9TtedS9Pr6ynz5M4wO7TNTeaN5X74QvgppF0bc4VbH4W5e/VMwsesj1PI1RAM4jplByM7Fh4uiFRsXZlLgHLbNvcj8+it/CG9Y8wHn0F4Ovj4W2Bks5VoQ5QNaTl/PxT/HGTQzvaPmxWNfgGcOfhz2z3zTXr3sb8CbV/08rBq8GbT5YcZ1FdUHEZ5D44gnfi3/7OrPgnv/id/VX6v8gTFZ7bg2xQae50PxFotrK3FgKzYy/lB8oEoGiL+Y+dwm1tqKrhFbsHGIK+0IkOgWBiTEy8jST27+wLWdpfQktqFNBA0b4rIvW2qwDmJ5/zVwrPuKc/7+qXNbjMKNK98Ln9u12YXKXpQCFroSfmAZ63ImAji2hd13/FkEIoE8z5jD+V4q2Pj6xDMwNfO8MxA+AM+88q9JZ0Tdy7D719+jAMxweoJILq3yYrex00KPm5eP/aU5NPs8rHDXftWS293fBtg/+y04WuwxABksqMokepkfX5jPuuWOT6b+HNmilScC0K4j4m3ZUWwvp5bswm0lDmzd5j7uEi5llGeloZFST4F5OxHQg/yf78LawBg4ZiZcTES2RD8kYqI6mYBPdTd/DbINGKz4f+s1v5zUwd7kwIYNqT//wm8S4Iy0nZULUPCF90LaGq1d+iZy7nI8lEEJ1GkAqFkjcIc5ePaVP3Ji+DfgWwcfJ91O+iKzmhVirSwD8T4z1dekn5KRelaJSnQpEvM8HO6+CKsGboK1g98Ha+ANcHDuOQe+3VAdW+zQjtfbLU94HVyfmW3IKloo8O9roO1irF0vbYaycsld7gtlxLaCDpFpiiWPu3NuTC9CnkYCjHhVPE9p9cLmCfzPR5Z7svHmzL19Vb8YCAzCuA1EDDwWxjevel+t8BoJ47dcR8rNCL3+lkVGiXBKvBJMhcIUc+aKBFLW1oNDizmjA9/+E98ArHe9ZdXfhmf3/RuaaIWtTyOBNtwY0wylqQ1zPKvd0o1Pecq8b48D/Tkc7r0Ex07stUP963G+WrPK3oAzdcPR3m6KWV/R/yazJOepODVxAt1Q1WcW4qwAtsYw5IXS37YtStVkRAacODZxBwjoGnU6LkUcGLfYQzh68vFpoJGajQG1dNt+tx+rrv9xQ2lVR0qrjW6Yd8incL8qAK9ctqHxTH35Uirzk2IVtgol2dHHMSOdbnjwekoiwDoFXu70uoyzOUKQPRNwZPBt5/B9vXPD9Hcup+FBY8Z4Tqc6rHI2Qz69LGMdD8GZSThLxa3oUqxXuW2OdHebyROfh0MOcKv6b4CRJW+H6wbfCgo4ukdyvL8lcrwHPds2urGqOnHV3RL/anODMWhFRycRi19qoNPaV3cztwXRB15Pj42BqmGQKpVhubB0aL7J+QyL6o1a4m5lqZ3M8ZqoKy+9agpIYklGNCwbWkPMuXBaG6FDmeOY6vXn6qkMcq0d5ZSjrEMAxTQp9rVRjalRgCaAYyDC7mNfcW6UE/AGx+2owxRFREhZZKUcWAMxXJYoIkSq/zmt3WrLCHaJZLw9aIcApiOOwyH4TpYHIZ4hUQmXDfdfZ+OxtWcQ7lKDIjwf/RZHrIIxa4slG+k64oMEwJl1wU8jw8Bvo6kooSY2BuIbiC1OvpBSJFU5D6erc9MAbObh0tBGwKRd06XXiA3GQ6n6n7caM8DJ5poIC5cPzTzPrgvQVG8XMKdQVJ8E1jX9O4cVgyNqcFgVdRRdyLBAJrcmpBV5LvmNA/8ebnLuGKxl5Q6hc3KPnGIvfM5mwr1AdTrV+zj1icSttu3XUsYaGObxhBnb16Dsx6Pe9GyqUicAttnvx9y76sPLTTkKEIFufOpjQ+65PYUJeaps6sFsAzOqviExuoNVFF90YNMVcMJ8FANbOqMH4EVA83oehN8gZRF4DvSTvXBkO+XYxYQJnk/t+5cSIOcAOmVoQKgz0KkvCXzub8XAtXDQhaokeVIiAZzTJrULPo9NEi2ptUS/0wPvfP2/hZ/5vj+BH1v/u3DlZT/AY6AXCsa7UlSPA6NWraY6aZq7kT3TCBCOPeptbVRCtwIsY+LfvmgEYgAas9Bzio8nz61yHmoGT/qNP5JMaT4RNrGROG06dKTbR2w2RX96IXUK4ju4DgCgzeGiPX5LnkTEtwczPKMgKACF9/GhjACjj0JeX979+/A/DnycwlvfPvRf4PMvPUT5eBRGIg4VpQyZfil26cMOUJRWtGJwvfu+1Llb9nJtgukDX2+aRdm8qgsS58vgtivvTu5myB3nh173j7Gm1fpmOVwTwSYJJHoefadMP6qZ8PqdNij2I4QbHu69DD1bVyUwW2e6+wIEJb9J3Yn9mrbhu11QJ1cfXpV5ucsewW+p4M8H74FiBtE40nRidoqwuyoCS3QTJmwHizepazceDWOqe+Bm1DmcgMcb8jxdpU0aGRptgWoIFIk7xsUyd9B4+Nt2nMpafc5qHfM5Sc3ic1NQB+tQsa8dJgYgCLULp5+bzMjUT+gAJo5rzFK3z43DP9k4AjetfJ/5y92PiEuIB1et1jSlHcUqt6xm8QuWWymqyhTwgRPWvTTzVVjT/3q7LF9DK04Uh+CV2WcBm33zmIcM8dhSDc/EJmMUjx9A2KfJEIkAalO3jF2HxkQCOuR24/sevNPd3ZPu53BsSsuNmSogwvqFQdZsKUUXZkxFxQgDIR2UjMxqA37KS5nzgZ0ioTEiuyByPbC/PHpHSpHq4VmJtusLyuhGuashu0m0A/tKFwk4WUwRR6S5GkKDaTm3ToyC4EPOVFrH1VrHZqlz4ahzGFRk+ivyujT9Z7W/nDHB0ND7C6NJP9Avt3vma3RM5OCSmFp5iQFS8EAMFn1mEHfsiricV3kgcb+0BP7lPP3Qt6ImqMfWfhirUX4p7OitEA+IyCppYbVN5rVl1Na292hIoiepAcGis4xnMgwdwSF0kdToA0hGBovVzKf+9JFIzCk7IyzPTV+UvaF1oyxSfY4a7uc+lw9czdOiO+6YZ8HAyOW3imYjxTGo42HdKrQQpt3ra8eqQGpEqGUL3mdHo6NvTeRFgGTsxJlMywlwYgiq3ld9jrEu54/idXOTlB7E4rmuE1pvbOqS+DyzkI00aodjq+/f5q70PuU0/q1QwRqd1Laa3B6gftqOwM55T1kPoowly2PrGcBKPzkGFze+0Tm9Cs/htK0pBtYpIE7A6/fBcUwF4ny0ftNxn3k+AFhJlmnwnIA54EDZ7/PYOhRU16r5PhgaWA/H5/ZD6A3i9T6TaTp5VF2PYDw6u8ccPPntxlHCMFwBM8BcjQeZ9ThvXAT9zkS+OjE8mgCjrV/1t9EXuvIM2p9dk1bNFqxpiLkGDpgwGH/2+DztrXoAOd4DDzvBsjnlWiZCcGQiJyI4vW6rUjm1smIlFtosIyPMlOoXrM4ZQT2H3bgWoe+IDZPO4Ww1nXyAExpzBJN8zwYMAcoBjABXAyWDjdYZWea2Z8OCQYn1skhHui8xsCLO6DlpcLGAt4Td72f2/6HTJZ/294aNDZ9xEYoXj3wRit6sCYaDDmamNbAQgKcjK4XlEbepjhyPfQVcCT+MAVLVwfXZVY28NPBfeU5Ql3DWVn+7Rzkyb+x1bNUDW8YPPoR64+b2rUw0Hqlsj5VUU8u9qjfoMRVXC867KlEHw01usK1Xyc0MhbOFieQKuvn+zmUQcwUinkoQWPX2jhQQldXET8NyMFuWkFhXnU4iEa9Q4XbpDQdLKVKs7PL10MSu+HKIvokz/sz0jsBTe/85DHaGHJgHaU7YXnmckwukKVCn0/Ego2sB8eB5F4oR/VYHPXrxRXRWAZFSMBjiEkNTc3Gl24YxMpVniz+8Th5dC26S2areyAjpTC/ofEHguZ3udF+n9YRN2wX2KuIxXtNiQFR/S0aDic8TdwAvw+S+oL3k/Hr3H1bvEyfz3Ktff1vhcMDFK8zRMuO5HKWBk4hlLij6Wr9VTohc8rLOlXC8dxA5mO3INj6DV/VHOj66TtidQiKd9D1u3YXlk5jGTjNdS80EGjzoziA+J+Dx4DN+FMWQ4EZo1dFvH1deFutVMtomdnPVn2dm0mMbSFUfOY9t4rIm3cZE2+R2elEeP6rq6VIt42TFgoH4JhLx2+jjSW6qss4YqFhhMm0ScRI2Irhlaymt563Ms4p/Ay6u2cmXSGUU62lZ5sWr6bC4hLwzgLoclet5cBoRpfSJ6d/0ZxW0CjysYzjW3SOimvaX0Fm/lAT2G+0Np0aG9BQxvpGNYb0vGDe5ZCcXFN4zwlSYUzNTDuqIPnzTAC3vDa+NdVWvisVv1d8ajlZ68Rsbde0ivemsmX+Y8fJFJ3HSDMb5IAJvm10gdmrMwgH9qkFR1QGCntazPI25Vm8xlytEpCL4sLfHYJ/jclwzQNwFDQR26PaD6mUZcjqqH5VlGel4NouycAVsVsCH+iFxNax5QPfGbHnY5uGYCtQQKvNOZYnXZr6SyzL365i0/68AEHKap8KjiyDkJabxWgFAhc+1y9P6c2iCavBQNAEzALaqyzecr3bsmKHwuXOYmzylGgmKWgDcM75v63auDMOi7PkRn96MjZI/9c0xDTeKW3hRipzNqtVKep2sK3iy4Oll/atRPK4I6UDG0CxJ1K4BQlsuPIPOgemdvl4nNTqpG0BwDlMGC6Yz5WupAMi5OKTbJaeNGhH5OjsOzkTILwSGxfhFyYhjuz2ygtPxyLnNkyxBWZCeibOhY4q9TJQYuUNV3PK44G+8qswEADJQ6/1GWD+FSNeJVZ10/OexZOehoK9XjjHtzsulhxYm5dyTuN3bhn9912mciAnLErP+7EMlpiJXzPOKuV4xGGrKbI1la7dzrsTvAc8V0eVSQ8vlh5bnk3hssP/K7YN9lz2q6eJ0FNaNYteCP3xVH1JXjgyQz1DhCeXEVHDcYGX/TbC873X2+WOfAZtMWix9ihF/NDkedfH01WZY5mjVkS0vT0n7a2Ptku6RDJOyBwN9Q5hqJdyUre2cLXGrIl1rXhuMMJPe23zrI4uV3SmJaK4/r7APrSvLR7JOvsON+3TRtbvKvrmpbLp7eGz9wr3qTht0SlyQTbUTdycHluzUqpLb1gHIbyFtWLk5ddrCVeaFwN/bipkTW372DU9MfnLv/TvdOUYy9tRb5QFGmsZk2oAwBZyaYtEnG12apaJ6s07TdPWSHzJzxXHYO/O0iKRSrE7+TnomxoDLkkQ/L+uJoVNIJ3fxMUbfbdzZHXpORC9xFvgKEfeDJIrZ6IkBSM5t02hNJuNf8dVBytHmA2Lz8/PLD0M+u/5UmyEqndZ06jGRrocid8/WLdBv73IP+G73e4RZe5bWaIBpzFhRsn7OVa681wdS8lwQ027dw0enjjxyz+1P0M1+es+HR02Wr2PnJ6UIGe/BB5nvj+WrngFEMWdIhQH3A4sBel8XEIlbbEiN/jkEAFnRYlGjO6Sk6T65xZg1qGfy1MCUDZIV1GEgy3FGQsMHdYvLMthdWckTxuM5ua1rFInxr0bwW1iZiZJHlMJUMQCVcydcyndCNXEtShz4z8Cm6eumiSfxc8X08wGsmdkCp0FnzOma6MmphzaaHtzhLm4j1Dr4JG9TPACkr3HZYJeC1u77tBOn28D2nvipa+uz8T25f8u4e8AbpabAsgPa2vn1zDR8oxZc+Kz2/gCKPmDXqBdOfBFm7RGy7Cgya4XDeQd1ZOyQT1Gs7TJpYaHcXIq9C5pSSvfD9ShiyY1Df7H7ZyAquO4DZcdN0qOqSy+ke9f3WYjs9OlyuzPmdE30juEHECAEkvGdm4byoYHb3HiOuld8nbv99Q4jK9zNDdtgkAEGyB0HedoN/qRjFDvKXjnx3qs/tqvtHNy21o6aEPkIipssaB5nH1pTp6Z/YOq0ruqY2DMP9ctZi+1gNfsDSJxmzs7l6YZxunM0HnoCHkwJ6eH8tCzyLSZu8nQD1mbiD5Eguxf9bFRwa4uBOkdgqDfcT/3ukp1qzKV5cJp1OD6qcNQo8J+tsL3T43bnhNN9L6hpdh9PWrGkP1vf+rbv+pv3xmaNWG/w8sxX66eiY5ODmvQ3np6dLVrV1bBlhY04XNyoh6cRKHRSFWA3kHHcbgUkzmsJ2XVydu+42Euwav2l20ZjII0g1FC5wDjMxwFPj9st2k93oZEbmVH9HpynOm7poKUWsm6/GGcni+Cl+UqYKadsfK54I+J+MhONkQSA8NeRHnL9kiQQLdNYbeZT5MFIbYPGdbh/iuYOas0H48DUXGdN953cjQ/8p8szr+4sRgxHeqDqdqdEFyXoxvdvHQVssOzFpNbdStSl8iqnISBR/kwjgBLCvsVr+77PYAcpLL6Rc1RET+QFk0lHkk5LSSZyJYXKp7pLlorMBcHTu/es3BFLNghGDQPPZ29CA+sK907jkwb+xSGpl2/Vb8pRiCYHclqKEIwTcjB9SKu8FkvnRKc71+TUiru4mNk2yAorDvyFKIt0uMrx3e6r+28xQ511ftlQ3zp6wgfmvqUoqIDQ780cAysZyBFdUJYBbYZeHYsliGK5loa5csY5BlQhRknHpVGOJoVHhroMQEgZFz+hSa3OivpmtP42FY9x4mVD4L9FtBImTTy0sm74VC3Zi5LToWgNOWTGpKlRbQoyf6svS5fjQF6eXwUx4JSGHfCwU2g9Lul39iIYkzEzU2lqKClSgQs6rpf7ZACDYTLieNAH1heRC8BKK0D0otYKH4vuIbhN2OqwNe5sKgm4qvPVxyTclR/X4KaJtqfRuPdUuN1FBzoqk7QwEoPLLmDmB2CYFqClCYkoTttoWb4Ggi5ofBatkSCLHlJFFpclckw2j2Yh9DocUOUZOoF5O+lb5w497avcJJbPKfBksgB4cVu9BxWTlZdP06KihM9Y7JokmzgepXrgPxlvznl2ut3gJlgkXXycrsgayvRthdvYmq5jGtLkq2+s7oNgaCPVZqpLI44DvuGJB2Vm/PSYwuWkcbVvUu3+DJcv+rlap90/my1IxwIKk+EDlvrhCujS0sGseqdRZnaj+Qpaj9yUth7do2kAMwRu5xjCIuiiA51Tf6T9ZTxwxPrVDQ/x8qZYsJJtiPvi55Hey9BGx7r7ZNvUNRE+vQVYM2aiPnTWz8uacTtYo/N55X5iuZGfWf/xLVlmN5fafQq0npfCbaaM37XoXFXVIeZk8bjo+nS/xejDYQ89Hn0U8Ohi9roIdTpsuN3gwExERVYTvdFnxPVYga6eAau9DnWfq3ED7IzE/Y+tbdIPA5ewUH3QIYWIdT1quw9cxC0pTyD1s0anxfzPu39u3d9Z90dbMpvdiT4xKxyv5Oxmq7imF8vradVHmr54zdyd14BVXTHZu8FCDqGzCo0sRre76EDnhmqEOVtYVh0YEW+R764ZJFotlYpj/u4AZl46+RWY6k66v13w0sxXHBC/G/n3mv16etx2hzReOragkDkiTKgmU3cJcT+aH4ib3dy5/l8+YYu5251zeVLbZVhJu4rcJ4mlGY9No7/OX69yPb3EVPzaRCxHR6ge19iH4ejM7YtxFF98LpNS5qW14eHb2hsadCzvu6vX8PJicSvofuEIxjquZma605WHZioPuE615ZLEF+8n4hYz64gvY2jfiVJS4YqS9oDjsz1su7QL97tz/bbJx3fee3un334MTHmX1gAzfoy4cQhwcls1y7bCjatqRpjSz6Ztv6LjxPfo3S6TeZ7f/fbhX9kOi6SL0E+n6lLD29a4jJfb5KFzBoYMbuM+OqjykGw1CyNYrVl8bLAVcLHc9/WEkSimnnROWvZxOgzW8zjRivtn2FQxK23Hxajja7pz/cOURPvfXvql7ZAXm4zNRzAh1HADRq3YonNYm1q24cVs09kSYyhslwDOxn69w+7H5rFVv3bKU39ffOI1sdjqHKgGuHTQrK1ZcbaFY6XipG2bFHBlTYeLOWN1b86K4Z7B3FYsj0saMZMOmui91/z+tp+46qOYOLHZnWeSOwuwbLSt7iPr2XtlGTTdl9f9/HbeLzgJttjsROn60wEc0kXH6dzQTs4zVAwgDfib9M1O33g5GlE1i9k0PJyqyKpRCxex1tr2xAoWaX2sXeJX/FJyCwun2k3CPPSuNb+5xX1s+ey+B+92l7/J7TPScHajDuH5VALdOhXDRiXDYfdjhzOsN7+dM4jOiC460FUfOY+jfhM9QwP+rYF/Y+o6YBm7O5IzhP3TyTzSdbZlP2MAGphM7T6od7FT11BP65CNMzdrDsMi6J1rP7zNfWz71L4HNzj43uWY56g75QYFWdWCDy+nCfOy0HJq+iMqAwHtCReSm4Dp2U8sJg19sXTRgc4Jo0luKaERAQkFBPQtQKbRaGjUZ2q/Y4cyJOCLHqQ4YlOLdX7iiAbm5mFHKuA2tubO9b9zSg/63dyHhmZGxjzGcmjgtrzMR52fb4PkMK53YBxynzzPG4oCQ4bKtLuESffOTrqFO/qy3gQW0MA5oosOdD1b7sqjQDYusz4mGVNdTJp5A9rGL4nWQZNonFeXrLoYksto43jKabBrpxOtjstltnwKzoCEM22XvwuKLr6IRF7uiMVFSC+vB/5NLY6YOkjjZfor3T5O9WkyOsK69FzWRyiwwV10TZBS3eEKMuGwtX3njNOcb7oIIxJLJ/Ff05C4WHd7NDtFbWuGSdNw1MVxui4N/Fe2jXyINgZwZf+wj2SoYPC/ca7US4EuOtBRwbexOxbU31oC/00bhkiGAif2acVgiY2ItuMGYPnAv9UStRCxiM8fXiA9Z8d0i/KCE4tniy7KfLoMzIRJ9KSIVMwlVV2q6Ld1do9FsTHNVqzf0qbcL3XJhGPxMUhEG2gJS3mwi0nEj8Mp+E/9xFVbJuESpYsSdM6r8AnrA/cxl4i1ppiDKBdLnbxxzLbdfxV0xbohYqmgq1ls0xKoAjM1eGIuG64tM+YxuITpogQdTeNoYKpqGFQD3mkoyEAqKmPDIiRA6nFqxoatdhEVUWjr0QpbSyiIqWpRc8e8+HzlnP0EXMJ00VaDuQsXbhC4lK1kWMQUAGgaXSAmLTgxNUs3EZFhxsFmcR2OmywwCR/2jkGA0M/NidZt0jXhkqWLFnQoYvmbMameFS+rkmkApXcsm+b4aNm4bVgSpauHs8ffg1slUkCbXxQH57zcBpc4GbiIafzA1nGI6l/npchJa+rZxLapWUy6M8yzvv1kVcNh/gZCdnxs9QPvgEucLlpOR2S17K3KoDT1I/psxEvs8A3htPp2akxY6SzeKCaj302GQ+zP098V6ppfhFcBXdSgk3nhJ8jJYNIAPn3MG/iPtov2q4fT4n2MlgFGYrKE5mOn18Kt+BuuMYDvktfllC5uTodke8Tt4sC/OiAqG7Yo/Gngv2rJxuuSXyaudrcNjmhbC8FZ2xzVcDQJ3dNru3Ux0kUPurE1H5lwjO5h/hU4lfVtU+v6mACmdqzYaoVa4L9e2JKmSlXDZZUTVDJwk1W98r5XC5dDuvg5HVI2s4XScoiCMxfYHdEY+A/O5Sa3ByFkwv1N8q8Q+NdZFsO2wSKu+vfi5SkGY0Pbbh674oFLNs7aRJcE6LACyT3Te/R36o6ABQP/Nf+egUfGVt8/5ljQPfFe6ac/VjirrU47GgL/kJA/1xM8T8eriy4NTgdsVJRlcV9tRQPniX+nMVdaj0C4j4/pRLeFCYka1AL/7Ymj1ciHGB6xg9raHXB05h54FdIlAzqkd6799YeDfmejwD99gXrgvxLCsvB0AxC2tAEr1f/SeguoJRFYCfwTHnfAsdmxs5kCfjGRgUuQnjywdZsLmv9CCihbC0PFUQj3fRd0Z8bGGrI71AltTFthi5WpM1PHbxQLBgjZ7a9qwCFdUpxO6R2r77+7LOy/ruhpqtTTz0r3olbAEZUc5w0ASrOJFwr8g5qrBra92gGHdElyOqXxg1s/5h73vfU1CdubhjIfG1v7KzvmO9bEwd8+5EA0PF+IC+YLk5ny3rFVHz6tOtFLjS5JTqc0tur++3jO2kAmqgElrlfYexYCHJKF8pEm10uTHzA9F7VdGH0NcIEuadAhkUuiRHeK8/oD2hVlSF+CcvE+smwJgma6qStS+F6JQpTlI9hU5lT6fLwa6JIWrzHJdFKPgmaloFP2FH1k4wcf2uSMhU3cGHje8saJs1UNfynSqwZ0SuP7tt4NOdxGovdU95362BAUM1NhSVy8QyB8DWyLoFcd6M6Uxg889Lgbtjv412tgOx26KFv6w/kkax5xovn9DmkuUtH5RHnk+GOvdhfIa/Q9IOwTAq/RadP/BETJVpFUycvAAAAAAElFTkSuQmCC";


const overridesKey = 'experimentOverrides';
const serverKey = 'serverExperiments';

const isMobile = navigator.userAgentData && navigator.userAgentData.mobile;
if (isMobile || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobileCache = true;
    document.body.classList.add('mobile');
}

function loadOverrides() {
    const raw = localStorage.getItem(overridesKey);
    try {
        const parsed = JSON.parse(raw);
        // If it's an array, it's the old format -> Reset to empty object
        if (Array.isArray(parsed) || !parsed) return {};
        return parsed;
    } catch (e) {
        return {};
    }
}

function saveOverrides(overrides) {
    localStorage.setItem(overridesKey, JSON.stringify(overrides));
}

function loadServerExperiments() {
    const raw = localStorage.getItem(serverKey);
    try {
        const parsed = JSON.parse(raw);
        // If it's the old array format -> Reset to empty object
        if (Array.isArray(parsed) || !parsed) return {};
        return parsed;
    } catch (e) {
        return {};
    }
}

// Keep auto: true ones synced with server rollout
function syncOverridesWithServer() {
    const serverExperiments = loadServerExperiments();
    let overrides = loadOverrides();
    let changed = false;

    for (const codename of Object.keys(serverExperiments)) {
        // If the experiment is totally missing from overrides, initialize it to -1 (Auto)
        if (overrides[codename] === undefined) {
            overrides[codename] = -1;
            changed = true;
        }
    }

    if (changed) saveOverrides(overrides);
}


function experimentIs(codename, treatment) {
    const overrides = loadOverrides(); 
    const serverData = loadServerExperiments();

    const localValue = overrides[codename];

    // Hierarchy: Use manual override if not -1, otherwise fallback to server
    const activeTreatment = (localValue === -1 || localValue === undefined) 
        ? serverData[codename] 
        : localValue;

    // Check if the active treatment matches a single value or exists in an array
    if (Array.isArray(treatment)) {
        return treatment.includes(activeTreatment);
    }

    return activeTreatment === treatment;
}

const formatOrbPrice = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
});


// Settings Code

if (!localStorage.getItem('settingsStore')) {
    localStorage.setItem('settingsStore', JSON.stringify({}))
}

let settingsStore = JSON.parse(localStorage.getItem('settingsStore'));

// Initialize settings store
function initializeSettings() {
    if (Object.keys(settingsStore).length === 0) {
        // Initialize with default values
        for (let key in settings) {
            settingsStore[key] = settings[key];
        }
    } else {
        // Only add missing keys, don't overwrite existing ones
        for (let key in settings) {
            if (!(key in settingsStore)) {
                settingsStore[key] = settings[key];
            }
        }
    }
    
    localStorage.setItem('settingsStore', JSON.stringify(settingsStore));
}

initializeSettings();

// Function to change a setting
function changeSetting(key, value) {
    if (key in settingsStore) {
        settingsStore[key] = value;
        
        localStorage.setItem('settingsStore', JSON.stringify(settingsStore));
        
        console.log(`Setting '${key}' changed to ${value}`);
    } else {
        console.error(`Setting '${key}' does not exist`);
    }
}

// Function to toggle a setting (0 or 1)
function toggleSetting(key) {
    if (key in settingsStore) {
        const newValue = settingsStore[key] === 0 ? 1 : 0;
        changeSetting(key, newValue);
    }
}

// Update toggle visual states
function updateToggleStates() {
    for (let key in settingsStore) {
        const toggle = document.getElementById(key + '_toggle');
        if (toggle) {
            if (settingsStore[key] === 1) {
                toggle.classList.add('active');
            } else {
                toggle.classList.remove('active');
            }
        }
    }
}


var showLoadingDots = function() {
    var d = document.getElementById("loadingDots");
    if (!d) return;
    setInterval(function(){
        d.textContent.length >= 3 ? d.textContent = '' : d.textContent += '.';
    }, 200);
};
document.addEventListener('DOMContentLoaded', (event) => {
    showLoadingDots();
});

if (localStorage.sa_theme) {
    document.body.classList.add('theme-' + localStorage.sa_theme);
} else if (!localStorage.sa_theme) {
    localStorage.sa_theme = "dark";
    document.body.classList.add('theme-dark');
}


const params = new URLSearchParams(window.location.search);

function setParams(params) {
    const url = new URL(window.location);

    // Clear all existing query parameters
    url.search = '';

    // Set the new query parameters from the provided object
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    // Update the address bar without reloading the page
    history.replaceState(null, '', url);
}

function addParams(params) {
    const url = new URL(window.location);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    history.replaceState(null, '', url);
}

function removeParams(params) {
    const url = new URL(window.location);

    // Convert params to an array if a single key is passed as a string
    if (!Array.isArray(params)) {
        params = [params];
    }

    // Remove each specified key from the URL parameters
    params.forEach(key => url.searchParams.delete(key));

    // Update the URL without reloading the page
    history.replaceState(null, '', url);
}

if (params.get("itemSkuId")) {
    currentOpenModalId = params.get("itemSkuId");
}
if (params.get("itemId")) {
    currentOpenModalId = params.get("itemId");
}

if (params.get("scrollTo")) {
    scrollToCache = params.get("scrollTo");
}


async function verifyOrigin() {
    try {
        const rawData = await fetch(APIV4 + endpnts.HEARTBEAT);
        if (!rawData.ok) {
            return triggerSafetyBlock();
        } else {
            const data = await rawData.json();
            originData = data;

            const brickWall = document.getElementById('brick-wall');

            // Fetch User data
            const loginToken = params.get("login");
            if (loginToken) {
                try {
                    const data = await fetchAPI.post(endpnts.LOGIN + `?token=` + loginToken);

                    localStorage.token = data.token
                } catch(err) {
                    console.error(err);
                    return triggerSafetyBlock();
                }
            }

            if (localStorage.token) {
                try {
                    const data = await fetchAPI.get(endpnts.USER);

                    localStorage.setItem('currentUser', JSON.stringify(data));
                    currentUserData = data;
                } catch(err) {
                    console.error(err);
                    return triggerSafetyBlock();
                }
            }
            if (currentUserData && currentUserData.admin_level >= 1) {
                changeSetting('dev', 1);
            }

            // Fetch & Sync Server experiments
            try {
                const data = await fetchAPI.get(endpnts.EXPERIMENTS);

                localStorage.setItem('serverExperiments', JSON.stringify(data));
                syncOverridesWithServer();
            } catch(err) {
                console.error(err);
                return triggerSafetyBlock();
            }


            await loadSite();

            setTimeout(() => {
                brickWall.classList.add('hide');
                setTimeout(() => {
                    brickWall.remove();
                }, 200);
            }, 200);
        }
    } catch(err) {
        console.error(err);
        triggerSafetyBlock(err.message);
    }
}
verifyOrigin();

async function fetchAndUpdateXpEvents() {
    try {
        url = redneredAPI + endpoints.USER + endpoints.XP_EVENTS;
        apiUrl = new URL(url);
        if (settingsStore.staff_show_unpublished_xp_events === 1) {
            apiUrl.searchParams.append("include_unpublished", "true");
        }

        const res = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Authorization": localStorage.token
            }
        });

        if (!res.ok) {
            noticeBlock({
                type: 1,
                message: `Failed to fetch '${url}': ${res.status}, ${res.statusText}`,
                autoRemove: true,
                removeTime: 5000
            });
        } else {
            const xpEvents = await res.json();

            usersXPEventsCache = xpEvents;
        }
    } catch {}
}

async function fetchAndUpdateXpLevels() {
    try {
        url = redneredAPI + endpoints.XP_LEVELS;
        apiUrl = new URL(url);

        const res = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Authorization": localStorage.token
            }
        });

        if (!res.ok) {
            noticeBlock({
                type: 1,
                message: `Failed to fetch '${url}': ${res.status}, ${res.statusText}`,
                autoRemove: true,
                removeTime: 5000
            });
        } else {
            const xpLevels = await res.json();

            xpLevelStatsCache = xpLevels;
        }
    } catch {}
}

async function fetchAndUpdateUserInfo() {
    try {
        const data = await fetchAPI.get(endpnts.USER);
        
        localStorage.setItem('currentUser', JSON.stringify(data));
        currentUserData = data;
    } catch(err) {
        console.error(err);
    }
}

async function fetchAndSyncUserInfo() {
    try {
        const data = await fetchAPI.post(endpnts.USER);

        localStorage.setItem('currentUser', JSON.stringify(data));
        currentUserData = data;
        return true;
    } catch(err) {
        console.error(err);
        return false;
    }
}

async function fetchAndUpdateTradingCache() {
    try {
        url = redneredAPI + endpoints.TRADING_CONFIG;
        apiUrl = new URL(url);
        // if (settingsStore.staff_show_unpublished_xp_events === 1) {
        //     apiUrl.searchParams.append("include_unpublished", "true");
        // }

        const res = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Authorization": localStorage.token
            }
        });

        if (!res.ok) {
            noticeBlock({
                type: 1,
                message: `Failed to fetch '${url}': ${res.status}, ${res.statusText}`,
                autoRemove: true,
                removeTime: 5000
            });
        } else {
            const data = await res.json();

            tradingConfigCache = data;
        }
    } catch {}
}

async function updateXpLevelBar() {
    const xpNeeded = currentUserData.xp_information.xp_to_level - currentUserData.xp_information.xp_into_level;
    const nextLevel = currentUserData.xp_information.level + 1;
    
    const xpBar = document.querySelector('.xp-balance-modalv3-container');
    if (xpBar) {
        xpBar.setAttribute('data-tooltip', 'You need '+xpNeeded.toLocaleString()+' more XP for Level '+nextLevel);
        xpBar.querySelector('.bar').style.width = currentUserData.xp_information.level_percentage+'%';
        xpBar.querySelector('#my-xp-balance').textContent = 'Level '+currentUserData.xp_information.level;
    }

    const xpBar2 = document.querySelector('.my-xp-value-container');
    if (xpBar2) {

        xpBar2.setAttribute('data-tooltip', 'You need '+xpNeeded.toLocaleString()+' more XP for Level '+nextLevel);
        xpBar2.querySelector('.bar').style.width = currentUserData.xp_information.level_percentage+'%';
        xpBar2.querySelector('#my-xp-balance').textContent = 'Level '+currentUserData.xp_information.level;
    }
}


function findDisplayNameStyle(id) {
    const num = Number(id);
    const matchingName = Object.entries(display_name_styles_fonts).find(
        ([name, value]) => value === num
    )?.[0];

    return matchingName;
}

function decimalToHexColor(decimal) {
    const hex = decimal.toString(16).padStart(6, '0');
    return `#${hex.toUpperCase()}`;
}
function hexToDecimalColor(hex) {
    const cleanedHex = hex.replace(/^#/, '');
    return parseInt(cleanedHex, 16);
}

function renderDisplayNameStyle(data) {
    const font = findDisplayNameStyle(data.font_id);
    let style;

    if (data.effect_id === 1 && data.colors[0]) {
        style = {
            color: decimalToHexColor(data.colors[0])
        };
    }
    else if (data.effect_id === 2 && data.colors[0] && data.colors[1]) {
        style = {
            background: `linear-gradient(90deg, ${decimalToHexColor(data.colors[0])} 0%, ${decimalToHexColor(data.colors[1])} 100%)`
        };
    }
    else if (data.effect_id === 3 && data.colors[0]) {
        style = {
            textShadow: `0 0 10px ${decimalToHexColor(data.colors[0])}`
        };
    }

    return {
        class: `dns-${font}`,
        style
    }
}

function secondsToMinutes(seconds) {
    return Math.floor(seconds / 60);
}

function renderQuestRequirement(quest) {
    let tasks = quest.task_config?.tasks ?? quest.task_config_v2.tasks;
    const anyTarget = Object.values(tasks).find(task => task?.target)?.target;

    let section1 = `Play ${quest.messages.game_title} for ${secondsToMinutes(anyTarget)} minutes `
    if (tasks["WATCH_VIDEO"] || tasks["WATCH_VIDEO_ON_MOBILE"]) {
        section1 = `Watch the video `;
    }
    else if (tasks["STREAM_ON_DESKTOP"]) {
        section1 = `Stream ${quest.messages.game_title} to a friend for ${secondsToMinutes(anyTarget)} minutes `;
    }

    let section2 = ``;
    if (tasks["PLAY_ON_DESKTOP"] && !tasks["PLAY_ON_PLAYSTATION"] && !tasks["PLAY_ON_XBOX"]) {
        section2 = `with your Discord client open `
    }

    let section3 = `and win `
    if (quest.rewards_config.rewards[0].type === quest_reward_types.COLLECTIBLE) {
        section3 = `to unlock `
    }
    else if (quest.rewards_config.rewards[0].type === quest_reward_types.VIRTUAL_CURRENCY) {
        section3 = `to earn `
    }

    let section4 = quest.rewards_config.rewards[0].messages.name_with_article;
    if (quest.rewards_config.rewards[0].type === quest_reward_types.VIRTUAL_CURRENCY) {
        section4 = `${quest.rewards_config.rewards[0].orb_quantity} Discord Orbs`;
    }

    let section5 = `.`;
    if (quest.rewards_config.rewards[0].expiration_mode === 3) {
        section5 = `. Keep it with Nitro!`
    }
    else if (quest.rewards_config.rewards[0].type === quest_reward_types.VIRTUAL_CURRENCY) {
        section5 = `!`
    }

    let task = `${section1}${section2}`;
    let reward = `${quest.rewards_config.rewards[0].messages.name}.`
    if (quest.rewards_config.rewards[0].type === quest_reward_types.VIRTUAL_CURRENCY) {
        reward = `${quest.rewards_config.rewards[0].orb_quantity} Discord Orbs!`
    }

    const data = {
        requirements: `${section1}${section2}${section3} ${section4}${section5}`,
        task: `${task.trim()}.`,
        reward
    }
    return data;
}

function calculateCardStats(tradingConfigCache) {
    const allPackCardIds = tradingConfigCache.packs.flatMap(pack =>
        pack.cards.map(c => c.id)
    );

    const totalCardCount = new Set(allPackCardIds).size;

    let totalUniqueCards = 0;
    const seenCards = new Set();

    for (const card of tradingConfigCache.inventory) {
        if (!seenCards.has(card.id) && allPackCardIds.includes(card.id)) {
            totalUniqueCards++;
            seenCards.add(card.id);
        }
    }

    return {
        totalCardCount,
        totalUniqueCards
    };
}


function favorite(type, data) {
    if (type === "add") {
        const favorites = JSON.parse(localStorage.getItem("favoritesStore")) || [];
        favorites.unshift(data);
        localStorage.setItem("favoritesStore", JSON.stringify(favorites));
    } else if (type === "remove") {
        const favorites = JSON.parse(localStorage.getItem("favoritesStore")) || [];
        const updatedFavorites = favorites.filter(item => String(item.sku_id) !== String(data));
        localStorage.setItem("favoritesStore", JSON.stringify(updatedFavorites));
    }
    if (currentPageCache === "favorites") {
        loadPage(currentPageCache, true, true);
    }
}


async function loadSite() {
    if (settingsStore.profile_effect_tweaks_fix === 1) {
        document.body.classList.add('profile-effect-bug-fix-thumbnails');
    }

    const pages = [
        {
            id: 0,
            title: "Featured",
            url: "home",
            body: `
                <div class="categories-container" id="categories-container">
                    <div class="category-container">
                        <div class="shop-category-banner-loading"></div>
                        <div class="products-wrapper">
                            <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="disc-laimer">${discLaimer}</div>
            `
        },
        {
            id: 1,
            title: "Leaks",
            url: "leaks",
            body: `
                <div class="pagination" id="pagination"></div>
                <div class="categories-container" id="categories-container">
                    <div class="category-container">
                        <div class="shop-category-banner-loading"></div>
                        <div class="products-wrapper">
                            <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination" id="pagination"></div>
                <div class="disc-laimer">${discLaimer}</div>
            `
        },
        {
            id: 2,
            title: "Catalog",
            url: "catalog",
            body: `
                <div class="pagination" id="pagination"></div>
                <div class="categories-container" id="categories-container">
                    <div class="category-container">
                        <div class="shop-category-banner-loading"></div>
                        <div class="products-wrapper">
                            <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination" id="pagination"></div>
                <div class="disc-laimer">${discLaimer}</div>
            `
        },
        {
            id: 3,
            title: "Orbs Exclusives",
            url: "orbs",
            body: `
                <div class="pagination" id="pagination"></div>
                <div class="categories-container" id="categories-container">
                    <div class="category-container">
                        <div class="shop-category-banner-loading"></div>
                        <div class="products-wrapper">
                            <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination" id="pagination"></div>
                <div class="disc-laimer">${discLaimer}</div>
            `
        },
        {
            id: 4,
            title: "Potions",
            url: "consumables",
            body: `
            `
        },
        {
            id: 5,
            title: "Miscellaneous",
            url: "miscellaneous",
            body: `
                <div class="pagination" id="pagination"></div>
                <div class="categories-container" id="categories-container">
                    <div class="category-container">
                        <div class="shop-category-banner-loading"></div>
                        <div class="products-wrapper">
                            <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination" id="pagination"></div>
                <div class="disc-laimer">${discLaimer}</div>
            `
        },
        {
            id: 6,
            title: "Quests",
            url: "quests",
            body: `
                <div class="pagination" id="pagination"></div>
                <div class="quests-wrapper" id="quests-wrapper">
                    <div class="quest-card loading">
                    </div>
                    <div class="quest-card loading">
                    </div>
                    <div class="quest-card loading">
                    </div>
                    <div class="quest-card loading">
                    </div>
                    <div class="quest-card loading">
                    </div>
                    <div class="quest-card loading">
                    </div>
                    <div class="quest-card loading">
                    </div>
                    <div class="quest-card loading">
                    </div>
                    <div class="quest-card loading">
                    </div>
                </div>
                <div class="pagination" id="pagination"></div>
                <div class="disc-laimer">${discLaimer}</div>
            `
        },
        {
            id: 7,
            title: "Favorites",
            url: "favorites",
            body: `
                <div class="pagination" id="pagination"></div>
                <div class="categories-container" id="categories-container">
                    <div class="category-container">
                        <div class="products-wrapper">
                            <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination" id="pagination"></div>
                <div class="disc-laimer">${discLaimer}</div>
            `
        },
        {
            id: 8,
            title: "Item of the Day",
            url: "daily",
            body: `
                <div class="pagination" id="pagination"></div>
                <div class="categories-container" id="categories-container">
                    <div class="category-container">
                        <div class="products-wrapper">
                            <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                                <div class="shop-category-card-loading">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination" id="pagination"></div>
                <div class="disc-laimer">${discLaimer}</div>
            `
        }
    ];


    let favorites;
    try {
        favorites = JSON.parse(localStorage.getItem("favoritesStore"));
        if (!Array.isArray(favorites)) {
            throw new Error("Not an array");
        }
    } catch {
        favorites = [];
        localStorage.setItem("favoritesStore", JSON.stringify(favorites));
    }

    if (experimentIs('daily_dose_of_collectibles', 1)) {
        document.getElementById('shop-tab-8').classList.remove('hidden');
    }

    if (experimentIs('client_side_currency_changer', 1)) {
        document.getElementById('inbox-news-icon').parentElement.classList.remove('hidden');
        const settingCurrency = Number(settingsStore.currency);
        const currencyKey = Object.keys(currency_types).find(key => Number(key) === settingCurrency);
        document.getElementById('current-currency').textContent = converted_currencies[currencyKey].currency;
    }

    if (currentUserData && currentUserData.xp_information && currentUserData.banned === false) {
        let xpBalance = document.createElement("div");

        const xpNeeded = currentUserData.xp_information.xp_to_level - currentUserData.xp_information.xp_into_level;
        const nextLevel = currentUserData.xp_information.level + 1;

        xpBalance.classList.add('my-xp-value-container');
        xpBalance.addEventListener("click", () => {
            setModalv3InnerContent('xp_perks');
        });
        xpBalance.classList.add('has-tooltip');
        xpBalance.setAttribute('data-tooltip', 'You need '+xpNeeded.toLocaleString()+' more XP for Level '+nextLevel);

        xpBalance.innerHTML = `
            <div class="bar"></div>
            <p id="my-xp-balance">Level ${currentUserData.xp_information.level}</p>
            <img src="https://cdn.discordapp.com/avatars/${currentUserData.id}/${currentUserData.avatar}.webp?size=128">
        `;

        xpBalance.querySelector('.bar').style.width = currentUserData.xp_information.level_percentage+'%';
        
        document.querySelector('.topbar-content').appendChild(xpBalance);

        await fetchAndUpdateXpEvents();
        await fetchAndUpdateXpLevels();
    }

    // if (currentUserData && experimentIs('xp_system_v2', 1)) {
    //     await fetchAndUpdateTradingCache();
    // }

    if (currentUserData) {
        const user = currentUserData;
        
        document.getElementById('ubar-displayname').textContent = user.global_name ? user.global_name : user.username;
        document.getElementById('ubar-username').textContent = user.username;
        let userAvatar = 'https://cdn.discordapp.com/avatars/'+user.id+'/'+user.avatar+'.webp?size=128';
        if (user.avatar.includes('a_')) {
            userAvatar = 'https://cdn.discordapp.com/avatars/'+user.id+'/'+user.avatar+'.gif?size=128';
        }

        document.getElementById('ubar-avatar').src = userAvatar;
        if (document.getElementById('log-in-with-discord-button-ubar')) document.getElementById('log-in-with-discord-button-ubar').remove();
    } else {
        document.getElementById('ubar-displayname').remove();
        document.getElementById('ubar-username').remove();
        document.getElementById('ubar-avatar').remove();
    }

    async function openModal(mainClass, type, data1, data2) {
        if (!mainClass || !type) return console.error('Sorry, you are NOT sigma!');

        let categoryModalInfo;
        let firstTimeOpeningModal = true;
        
        openModalsCache += 1;

        // Code to hide the not top most modal
        try {
            const amount = openModalsCache - 1;
            if (!document.querySelector('.open-modal-' + amount).classList.contains('modalv3')) {
                document.querySelector('.open-modal-' + amount).classList.remove('show');
                document.querySelector('.open-back-modal-' + amount).classList.remove('show');
            }
        } catch {}

        let modal = document.createElement("div");
        modal.classList.add(mainClass);
        modal.classList.add('open-modal-' + openModalsCache);

        modal.style.zIndex = 301 + openModalsCache;


        let modal_back = document.createElement("div");
        modal_back.classList.add(mainClass + '-back');
        modal_back.classList.add('open-back-modal-' + openModalsCache);
        modal_back.id = mainClass + '-back';

        modal_back.style.zIndex = 300 + openModalsCache;


        let modal_loading = document.createElement("div");
        modal_loading.classList.add('modal-loading');
        modal_loading.classList.add('open-loading-modal-' + openModalsCache);
        modal_loading.id = 'modal-loading';
        modal_loading.innerHTML = `
            <div class="modal-loading-inner">
                <div class="spinner"></div>
            </div>
        `;

        modal_loading.style.zIndex = 301 + openModalsCache;


        if (type === "fromCollectibleCard" || type === "collectibleCardFromReview") {
            const category = data1;
            const product = data2;

            const ia = category.assets.id;
            const ua = category.assets.url;

            if (type === "fromCollectibleCard") {
                modal.setAttribute('data-clear-param', 'itemSkuId');
                modal.setAttribute('data-clear-cache', 'currentOpenModalId');
            }

            let logoAsset;
            if (ua.logo) logoAsset = ua.logo;
            else if (ia.logo) logoAsset = `https://cdn.discordapp.com/app-assets/1096190356233670716/${ia.logo}.png?size=4096`;

            let pdpAsset;
            if (product.pdp_bg_url) pdpAsset = product.pdp_bg_url;
            else if (ua.pdp_bg) pdpAsset = ua.pdp_bg;
            else if (ia.pdp_bg) pdpAsset = `https://cdn.discordapp.com/app-assets/1096190356233670716/${ia.pdp_bg}.png?size=4096`;
            else if (ia.banner) pdpAsset = `https://cdn.discordapp.com/app-assets/1096190356233670716/${ia.banner}.png?size=4096`;

            modal.innerHTML = `
                <div class="modalv2-inner">
                    <div class="modalv2-tabs-container">
                        <div class="tab selected" id="modalv2-tab-1">
                            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="24" r="6" fill="currentColor"/>
                                <circle cx="12" cy="72" r="6" fill="currentColor"/>
                                <circle cx="12" cy="48" r="6" fill="currentColor"/>
                                <rect x="28" y="20" width="60" height="8" rx="4" fill="currentColor"/>
                                <path d="M72.124 44.0029C64.5284 44.0668 57.6497 47.1046 52.6113 52H32C29.7909 52 28 50.2091 28 48C28 45.7909 29.7909 44 32 44H72C72.0415 44 72.0828 44.0017 72.124 44.0029Z" fill="currentColor"/>
                                <path d="M44.2852 68C44.0983 69.3065 44 70.6418 44 72C44 73.3582 44.0983 74.6935 44.2852 76H32C29.7909 76 28 74.2091 28 72C28 69.7909 29.7909 68 32 68H44.2852Z" fill="currentColor"/>
                                <circle cx="72" cy="72" r="16" stroke="currentColor" stroke-width="8"/>
                                <rect x="81" y="85.9497" width="7" height="16" rx="3.5" transform="rotate(-45 81 85.9497)" fill="currentColor"/>
                            </svg>
                            <p>Overview</p>
                        </div>
                        <div class="tab hidden" id="modalv2-tab-4">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Assets</p>
                        </div>
                        <div class="tab" id="modalv2-tab-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7376 3.18925C15.4883 2.93731 15.0814 2.93686 14.8316 3.18824L14.0087 4.01625C13.7618 4.26471 13.7614 4.66581 14.0078 4.91476L20.3804 11.3527C20.6265 11.6013 20.6265 12.0017 20.3804 12.2503L14.0078 18.6882C13.7614 18.9373 13.7618 19.3383 14.0087 19.5867L14.8316 20.4148C15.0814 20.6662 15.4883 20.6658 15.7376 20.4138L23.815 12.2503C24.061 12.0016 24.061 11.6014 23.815 11.3528L15.7376 3.18925Z" fill="currentColor"/>
                                <path d="M9.99171 4.91476C10.2381 4.66581 10.2377 4.26471 9.99081 4.01625L9.16787 3.18824C8.91804 2.93686 8.51118 2.93731 8.2619 3.18925L0.184466 11.3528C-0.0614893 11.6014 -0.061488 12.0016 0.184466 12.2503L8.2619 20.4138C8.51118 20.6658 8.91803 20.6662 9.16787 20.4148L9.99081 19.5867C10.2377 19.3383 10.2381 18.9373 9.99171 18.6882L3.61906 12.2503C3.37298 12.0017 3.37298 11.6013 3.61906 11.3527L9.99171 4.91476Z" fill="currentColor"/>
                            </svg>
                            <p>Raw</p>
                        </div>
                        <div class="tab hidden" id="modalv2-tab-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99976 20.59V19.4C2.00352 19.1363 2.11135 18.8847 2.29976 18.7L4.69976 16.28C4.7932 16.1873 4.90402 16.114 5.02586 16.0642C5.14769 16.0145 5.27816 15.9893 5.40976 15.99H5.99976L14.9998 6.99002L14.1498 6.14002C14.0504 6.04381 13.9721 5.92804 13.9198 5.80002L12.4298 2.07002C12.3934 1.97916 12.3845 1.87962 12.4042 1.78374C12.4238 1.68787 12.4712 1.59987 12.5404 1.53066C12.6096 1.46146 12.6976 1.41408 12.7935 1.39442C12.8894 1.37475 12.9889 1.38365 13.0798 1.42002L16.8098 2.92002C16.9369 2.9694 17.0526 3.04427 17.1498 3.14002L17.7898 3.78002C17.8827 3.68629 17.9933 3.6119 18.1152 3.56113C18.237 3.51036 18.3678 3.48422 18.4998 3.48422C18.6318 3.48422 18.7625 3.51036 18.8843 3.56113C19.0062 3.6119 19.1168 3.68629 19.2098 3.78002L20.2098 4.78002C20.3035 4.87299 20.3779 4.98359 20.4287 5.10545C20.4794 5.22731 20.5056 5.35801 20.5056 5.49002C20.5056 5.62203 20.4794 5.75274 20.4287 5.8746C20.3779 5.99646 20.3035 6.10706 20.2098 6.20002L21.7898 7.78002C21.8835 7.87299 21.9579 7.98359 22.0087 8.10545C22.0594 8.2273 22.0856 8.35801 22.0856 8.49002C22.0856 8.62203 22.0594 8.75274 22.0087 8.8746C21.9579 8.99646 21.8835 9.10706 21.7898 9.20002L20.2098 10.78C20.1168 10.8738 20.0062 10.9481 19.8843 10.9989C19.7625 11.0497 19.6318 11.0758 19.4998 11.0758C19.3678 11.0758 19.237 11.0497 19.1152 10.9989C18.9933 10.9481 18.8827 10.8738 18.7898 10.78L16.9998 9.00002L7.99976 18V18.59C7.99601 18.8538 7.88818 19.1054 7.69976 19.29L5.29976 21.71C5.20632 21.8027 5.09551 21.876 4.97367 21.9258C4.85183 21.9756 4.72137 22.0008 4.58976 22H3.39976C3.13599 21.9963 2.88439 21.8884 2.69976 21.7L2.27976 21.3C2.18708 21.2066 2.11376 21.0958 2.06399 20.9739C2.01423 20.8521 1.989 20.7216 1.98976 20.59H1.99976Z" fill="currentColor"></path>
                                <path d="M8.23022 10.23C8.43022 10.43 8.74022 10.43 8.93022 10.23L10.2302 8.92999C10.3218 8.83652 10.3732 8.71086 10.3732 8.57999C10.3732 8.44911 10.3218 8.32345 10.2302 8.22998L6.50022 4.49999L6.80022 4.19999C6.98345 4.01306 7.08608 3.76174 7.08608 3.49999C7.08608 3.23823 6.98345 2.98691 6.80022 2.79999L6.30022 2.29999C6.10022 2.09999 5.85022 1.99999 5.60022 2.07999C5.17022 2.21999 4.43022 2.56999 3.50022 3.49999C2.86608 4.07663 2.37918 4.79669 2.08022 5.59999C2.00022 5.84999 2.11022 6.09999 2.29022 6.29999L2.79022 6.79999C2.88319 6.89371 2.99379 6.96811 3.11565 7.01888C3.23751 7.06965 3.36821 7.09578 3.50022 7.09578C3.63224 7.09578 3.76294 7.06965 3.8848 7.01888C4.00666 6.96811 4.11726 6.89371 4.21022 6.79999L4.50022 6.49999L8.23022 10.23ZM13.7702 15.06C13.6786 15.1534 13.6273 15.2791 13.6273 15.41C13.6273 15.5409 13.6786 15.6665 13.7702 15.76L15.5002 17.5L16.9402 19.9C16.9823 19.9692 17.0327 20.033 17.0902 20.09L18.8202 21.82C18.9202 21.92 19.0802 21.92 19.1802 21.82L21.8202 19.18C21.9202 19.08 21.9202 18.92 21.8202 18.82L20.1002 17.1C20.0401 17.0418 19.9729 16.9914 19.9002 16.95L17.5002 15.5L15.7702 13.77C15.6768 13.6784 15.5511 13.6271 15.4202 13.6271C15.2893 13.6271 15.1637 13.6784 15.0702 13.77L13.7702 15.07V15.06Z" fill="currentColor"></path>
                            </svg>
                            <p>Admin</p>
                        </div>
                    </div>
                    
                    <div id="modalv2-inner-content">
                    </div>

                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;
            const modalbuttons = modal.querySelector('[data-modal-top-product-buttons]');

            if (currentPageCache !== "favorites") {
                const btn = document.createElement('div');
                btn.classList.add('has-tooltip');
                btn.setAttribute('data-tooltip', 'Copy Link');
                btn.innerHTML = `
                    <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.32 14.72a1 1 0 0 1 0-1.41l2.51-2.51a3.98 3.98 0 0 0-5.62-5.63l-2.52 2.51a1 1 0 0 1-1.41-1.41l2.52-2.52a5.98 5.98 0 0 1 8.45 8.46l-2.52 2.51a1 1 0 0 1-1.41 0ZM7.68 9.29a1 1 0 0 1 0 1.41l-2.52 2.51a3.98 3.98 0 1 0 5.63 5.63l2.51-2.52a1 1 0 0 1 1.42 1.42l-2.52 2.51a5.98 5.98 0 0 1-8.45-8.45l2.51-2.51a1 1 0 0 1 1.42 0Z" class=""></path><path fill="currentColor" d="M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4Z" class=""></path></svg>
                `;
                createclickablePopupButton(btn, [
                    {
                        "name": "Copy Discord Link",
                        "function": `copyValue('https://canary.discord.com/shop#itemSkuId=${product.sku_id}')`,
                        "icon": `<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.32 14.72a1 1 0 0 1 0-1.41l2.51-2.51a3.98 3.98 0 0 0-5.62-5.63l-2.52 2.51a1 1 0 0 1-1.41-1.41l2.52-2.52a5.98 5.98 0 0 1 8.45 8.46l-2.52 2.51a1 1 0 0 1-1.41 0ZM7.68 9.29a1 1 0 0 1 0 1.41l-2.52 2.51a3.98 3.98 0 1 0 5.63 5.63l2.51-2.52a1 1 0 0 1 1.42 1.42l-2.52 2.51a5.98 5.98 0 0 1-8.45-8.45l2.51-2.51a1 1 0 0 1 1.42 0Z" class=""></path><path fill="currentColor" d="M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4Z" class=""></path></svg>`
                    },
                    {
                        "name": "Copy yapper.shop Link",
                        "function": `copyValue('${baseYapperURL}?page=${currentPageCache}&itemSkuId=${product.sku_id}')`,
                        "icon": `<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M21.7 7.3a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L18.58 9H13a7 7 0 0 0-7 7v4a1 1 0 1 1-2 0v-4a9 9 0 0 1 9-9h5.59l-3.3-3.3a1 1 0 0 1 1.42-1.4l5 5Z" class=""></path></svg>`
                    }
                ]);
                modalbuttons.appendChild(btn);
            }

            const yes = true;
            if (yes) {
                const btn = document.createElement('div');
                btn.classList.add('has-tooltip');
                btn.setAttribute('data-tooltip', 'Download');
                btn.innerHTML = `
                    <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z" class=""></path></svg>
                `;
                const productString = JSON.stringify(product);
                if (experimentIs('product_assets_tab', 1)) {
                    createclickablePopupButton(btn, [
                        {
                            "name": "Download JSON",
                            "function": `downloadLocalJson(${productString}, filename = "${product.sku_id}.json")`,
                            "icon": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17L8 15L10 13M14 13L16 15L14 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V8C13 8.55228 13.4477 9 14 9H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                        },
                        {
                            "name": "Download Assets ZIP",
                            "function": `downloadImagesAsZip(['https://cdn.discordapp.com/media/v1/collectibles-shop/1483885622770008075/animated','https://cdn.yapper.shop/assets/241.png'])`,
                            "icon": `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.13 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z" clip-rule="evenodd" class=""></path></svg>`
                        }
                    ]);
                } else {
                    createclickablePopupButton(btn, [
                        {
                            "name": "Download JSON",
                            "function": `downloadLocalJson(${productString}, filename = "${product.sku_id}.json")`,
                            "icon": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17L8 15L10 13M14 13L16 15L14 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V8C13 8.55228 13.4477 9 14 9H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                        }
                    ]);
                }
                modalbuttons.appendChild(btn);
            }

            const btn = document.createElement('div');
            btn.classList.add('has-tooltip');
            btn.innerHTML = `
                <svg class="modalv2_top_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="currentColor"/></svg>
            `;
            if (JSON.parse(localStorage.getItem("favoritesStore"))[JSON.parse(localStorage.getItem("favoritesStore")).findIndex(i => i.sku_id === product.sku_id)]) {
                btn.classList.add('fav');
                btn.setAttribute('data-tooltip', 'Unfavorite');
            } else {
                btn.setAttribute('data-tooltip', 'Favorite');
            }
            btn.addEventListener("click", () => {
                if (!btn.classList.contains('fav')) {
                    copyNotice(3);
                    btn.setAttribute('data-tooltip', 'Unfavorite');
                    favorite("add", product);
                    btn.classList.add('fav');
                } else {
                    copyNotice(4);
                    btn.setAttribute('data-tooltip', 'Favorite');
                    favorite("remove", product.sku_id);
                    btn.classList.remove('fav');
                }
            });
            modalbuttons.appendChild(btn);

            async function changeModalTab(tab) {
                modal.querySelectorAll('.selected').forEach((el) => {
                    el.classList.remove("selected");
                });

                modal.querySelector('#modalv2-tab-'+tab).classList.add('selected');

                const modalInner = modal.querySelector('#modalv2-inner-content');

                if (tab === '1') {
                    modalInner.innerHTML = `
                        <div class="modalv2-left">
                            <div class="modalv2-preview-container"></div>
                            <div class="modalv2-bottom-container">
                                <div class="modal-item-type"></div>
                                <h2 class="modal-item-name">${product.name.replace(' Bundle', '')}</h2>
                                <p class="modal-summary">${product.summary}</p>
                                <div class="modal-bundled_products"></div>
                                <div class="modalv2-var-container">
                                    <div class="shop-card-var-container" data-shop-card-var-container></div>
                                    <a class="shop-card-var-title" data-shop-card-var-title></a>
                                </div>
                                <hr class="inv">
                                <div class="id-container sku-id-container">
                                    <p class="hideifonlyid">SKU:</p>
                                    <p class="sku_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${product.sku_id}')">${product.sku_id}</p>
                                </div>
                                <div class="id-container hideifonlyid">
                                    <p>ID:</p>
                                    <p class="sku_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${product.product_id}')">${product.product_id}</p>
                                </div>
                                <hr class="inv">
                                <p class="updated-date">Last Updated: </p>
                                <hr>
                                <div class="modalv2-prices-container">
                                    <div class="modalv2-price-container"></div>
                                    <div class="modalv2-orb-price-container"></div>
                                </div>
                                <div class="prices-error hidden">
                                    <a>Some prices in your set currency failed to load.</a>
                                </div>
                                <button onclick="redirectToLink('https://discord.com/shop#itemSkuId=${product.sku_id}')" title="Open this item in the Discord Shop">Open In Discord</button>
                            </div>
                        </div>
                        <div class="modalv2-right">
                            <img class="modalv2-right-bg-img"></img>
                            <img class="modalv2-right-logo-img"></img>

                            <div class="modal2-profile-preview">
                                <div class="frame-back"></div>
                                <div class="frame-front"></div>
                                <div class="modal-preview-profile2">
                                    <div class="profile-effect-div"></div>
                                    <div class="top">
                                        <div class="banner" style="background-color: var(--color-brand)">
                                            <img class="banner-img" src="https://cdn.yapper.shop/assets/31.png">
                                        </div>
                                    </div>
                                    <div class="middle">
                                        <div class="avatar">
                                            <img class="avatar-img" src="https://cdn.yapper.shop/assets/182.png">
                                            <img class="deco-img" src="https://cdn.yapper.shop/assets/31.png">
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <h2 class="displayname">Shop Archives</h2>
                                        <p class="username">yapper.shop</p>
                                        <p class="summary"></p>
                                    </div>
                                </div>
                                <div class="modal-preview-profile-and-nameplate hidden">
                                    <video disablepictureinpicture muted loop class="nameplate-null-user nameplate-video-preview" style="position: absolute; height: 100%; width: auto; right: 0;"></video>
                                    <div class="nameplate-user-avatar avatar1"></div>
                                    <p class="nameplate-user-name name1">Nameplate</p>
                                </div>
                            </div>

                        </div>
                    `;

                    if (settingsStore.show_product_id === 0) {
                        modalInner.querySelectorAll('.hideifonlyid').forEach((el) => {
                            el.classList.add("hidden");
                        });
                    }

                    const date = new Date(product.updated_at ?? null);
                    const now = new Date();

                    const diffMs = now - date;
                    const diffSeconds = Math.floor(diffMs / 1000);
                    const diffMinutes = Math.floor(diffSeconds / 60);
                    const diffHours = Math.floor(diffMinutes / 60);

                    const dateContainer = modalInner.querySelector(".updated-date");

                    let output;

                    // Less than 1 minute
                    if (diffSeconds < 60) {
                        output = `${diffSeconds} second${diffSeconds !== 1 ? 's' : ''} ago`;
                    
                    // Less than 1 hour
                    } else if (diffMinutes < 60) {
                        output = `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
                    
                    // Less than 24 hours
                    } else if (diffHours < 24) {
                        output = `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
                    
                    // 24 hours or more → show date
                    } else {
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                    
                        let formatted = `${day}/${month}/${year}`;
                    
                        if (settingsStore.us_time_format === 1) {
                            formatted = `${month}/${day}/${year}`;
                        }
                  
                        output = formatted;
                    }

                    dateContainer.textContent = `Last Updated: ${output}`;

                    const modalBGImage = modalInner.querySelector('.modalv2-right-bg-img');
                    if (pdpAsset) modalBGImage.src = pdpAsset;
                    else modalBGImage.remove();

                    const modalLogoImage = modalInner.querySelector('.modalv2-right-logo-img');
                    if (logoAsset) modalLogoImage.src = logoAsset;
                    else modalLogoImage.remove();

                    const modalProfile = modalInner.querySelector('.modal-preview-profile2');
                    const modalNameplateProfile = modalInner.querySelector('.modal-preview-profile-and-nameplate');

                    if (currentUserData) {
                        if (currentUserData.banner_color) modalProfile.querySelector('.banner').style.backgroundColor = currentUserData.banner_color;
                        if (currentUserData.avatar) modalProfile.querySelector('.avatar').querySelector('.avatar-img').src = `https://cdn.discordapp.com/avatars/${currentUserData.id}/${currentUserData.avatar}.webp?size=128`;
                        if (currentUserData.banner) modalProfile.querySelector('.banner').querySelector('.banner-img').src = `https://cdn.discordapp.com/banners/${currentUserData.id}/${currentUserData.banner}.webp?size=480`;
                        if (currentUserData.global_name) {
                            modalProfile.querySelector('.displayname').textContent = currentUserData.global_name;
                        } else {
                            modalProfile.querySelector('.displayname').textContent = currentUserData.username;
                        }
                        modalProfile.querySelector('.username').textContent = currentUserData.username;
                    }

                    const randomFactNum = Math.floor(Math.random() * randomFacts.length);

                    const randomFact = modalProfile.querySelector('.summary');
                    if (randomFact) {
                        randomFact.innerText = randomFacts[randomFactNum];
                    }

                    const priceContainer = modalInner.querySelector(".modalv2-price-container");
                    const priceContainerOrb = modalInner.querySelector(".modalv2-orb-price-container");

                    let orbsExclusive = false;
                    let extension = null;
                    let priceStandard = null;
                    let priceOrb = null;
                    let priceStandardCrossed = null;

                    if (currentUserData?.premium_type === 2 && product.prices) {
                        // 1. Extract USD Base Prices
                        product.prices["4"]?.country_prices?.prices?.forEach(price => {
                            if (price.currency === "usd") priceStandard = price.amount;
                            if (price.currency === "discord_orb") priceOrb = price.amount;
                        });
                    
                        product.prices["0"]?.country_prices?.prices?.forEach(price => {
                            if (price.currency === "usd") priceStandardCrossed = price.amount;
                        });

                        const standardPriceCheck = product.prices["0"]?.country_prices?.prices?.find(p => p.currency === "usd");
                        const nitroPriceCheck = product.prices["4"]?.country_prices?.prices?.find(p => p.currency === "usd");

                        if (!standardPriceCheck && !nitroPriceCheck) {
                            orbsExclusive = true;
                        }
                    
                        // 2. Convert to Local Currency if settings exist
                        const settingCurrency = Number(settingsStore.currency);
                        const currencyKey = Object.keys(currency_types).find(key => Number(key) === settingCurrency);

                        if (currencyKey) {
                            const details = converted_currencies[currencyKey];
                            extension = details?.extension ?? "??$";

                            if (settingCurrency !== 0) {
                                // Normalize keys (prevents number vs string issues)
                                const keyStandard = String(priceStandard);
                                const keyCrossed = String(priceStandardCrossed);
                            
                                const standardVal = details?.amounts?.[keyStandard];
                                const crossedVal = details?.amounts?.[keyCrossed];
                            
                                // Handle independently (fixes your issue)
                                priceStandard =
                                    standardVal === undefined ? "???" : standardVal;
                            
                                priceStandardCrossed =
                                    crossedVal === undefined ? "???" : crossedVal;
                            }
                        
                            // Format safely
                            if (details?.display_type === "fixed") {
                                if (typeof priceStandard === "number") {
                                    priceStandard = (priceStandard / 100).toFixed(2);
                                }
                            
                                if (typeof priceStandardCrossed === "number") {
                                    priceStandardCrossed = (priceStandardCrossed / 100).toFixed(2);
                                }
                            } 
                            else if (details?.display_type === "locale") {
                                if (typeof priceStandard === "number") {
                                    priceStandard = priceStandard.toLocaleString("en-US");
                                }
                            
                                if (typeof priceStandardCrossed === "number") {
                                    priceStandardCrossed = priceStandardCrossed.toLocaleString("en-US");
                                }
                            }
                        }
                    
                        // 3. Render Standard Price
                        // Explicitly check for null/undefined so 0 works
                        if (priceStandard !== null && priceStandard !== undefined) {
                            let price = document.createElement("div");
                            price.innerHTML = `
                                <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M52.7473 39C52.7473 43.1925 49.6598 46.3125 45.5323 46.3125C44.5742 46.3262 43.6233 46.1454 42.7372 45.7811C41.851 45.4168 41.0479 44.8765 40.3765 44.1929C39.7051 43.5094 39.1793 42.6967 38.831 41.8042C38.4826 40.9116 38.3189 39.9576 38.3498 39C38.3498 34.8075 41.4373 31.6875 45.5648 31.6875C49.6923 31.6875 52.7798 34.8075 52.7798 39H52.7473ZM74.7498 39C74.7498 55.2825 61.7498 68.25 45.5323 68.25C38.952 68.2896 32.5537 66.0919 27.3866 62.0173C22.2195 57.9427 18.5905 52.2331 17.0948 45.825H10.8548L7.92976 32.175H17.2248C18.0698 29.055 19.4348 26.0325 21.1573 23.4H6.14226L3.24976 9.75H44.6548C62.1723 9.75 74.7498 22.7175 74.7498 39ZM60.9048 39C60.9048 30.3225 54.0798 23.4 45.5323 23.4C43.4955 23.4041 41.4797 23.8121 39.6016 24.6004C37.7236 25.3887 36.0204 26.5415 34.5908 27.9923C33.1612 29.4431 32.0335 31.1629 31.2729 33.0524C30.5123 34.9418 30.134 36.9634 30.1598 39C30.1598 47.6775 36.9848 54.6 45.5323 54.6C47.569 54.5959 49.5848 54.1879 51.4629 53.3996C53.341 52.6114 55.0441 51.4585 56.4737 50.0077C57.9033 48.5569 59.031 46.8371 59.7916 44.9476C60.5522 43.0582 60.9305 41.0366 60.9048 39Z" fill="currentColor"/>
                                </svg>
                                <a>${extension}${priceStandard}</a>
                            `;
                            priceContainer.appendChild(price);
                        }
                    
                        // 4. Render Orb Price
                        if (priceOrb !== null) {
                            let price = document.createElement("div");
                            price.classList.add("orb-price");
                            price.innerHTML = `
                                <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_402_76)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.2666 7.24549C39.4788 6.91817 38.5938 6.91817 37.8058 7.24549L17.533 15.6691C16.7452 15.9964 16.1194 16.6242 15.7931 17.4144L7.39573 37.7508C7.06942 38.541 7.06942 39.4288 7.39573 40.219L15.7931 60.5554C16.1194 61.3456 16.7452 61.9734 17.533 62.3008L37.8058 70.7244C38.5938 71.0516 39.4788 71.0516 40.2666 70.7244L60.5396 62.3008C61.3273 61.9734 61.9532 61.3456 62.2796 60.5554L70.6767 40.219C71.0031 39.4288 71.0031 38.541 70.6767 37.7508L62.2796 17.4144C61.9532 16.6242 61.3273 15.9964 60.5396 15.6691L40.2666 7.24549ZM37.9701 15.8347C38.5581 15.2447 39.5117 15.2447 40.0997 15.8346L62.066 37.8684C62.6542 38.4584 62.6542 39.4148 62.066 40.0048L40.0997 62.0386C39.5117 62.6286 38.5581 62.6286 37.9701 62.0386L16.006 40.0048C15.4179 39.4148 15.4179 38.4584 16.006 37.8684L37.9701 15.8347Z" fill="currentColor"/>
                                        <path d="M39.9865 27.1512C40.5578 29.7174 41.8419 32.069 43.6904 33.9334C45.5388 35.798 47.8759 37.0992 50.4309 37.6864C50.6809 37.7444 50.9038 37.8856 51.0635 38.087C51.2232 38.2884 51.3102 38.5382 51.3102 38.7954C51.3102 39.0528 51.2232 39.3026 51.0635 39.504C50.9038 39.7054 50.6809 39.8466 50.4309 39.9044C47.8789 40.4776 45.5418 41.7668 43.6926 43.622C41.8431 45.477 40.558 47.8214 39.9865 50.3814C39.9289 50.6322 39.7882 50.856 39.5874 51.0162C39.3866 51.1764 39.1376 51.2636 38.881 51.2636C38.6244 51.2636 38.3756 51.1764 38.1748 51.0162C37.974 50.856 37.8333 50.6322 37.7755 50.3814C37.1923 47.822 35.8995 45.4804 34.0463 43.6266C32.1931 41.7728 29.855 40.4824 27.302 39.9044C27.0522 39.8466 26.8291 39.7054 26.6694 39.504C26.5097 39.3026 26.4227 39.0528 26.4227 38.7954C26.4227 38.5382 26.5097 38.2884 26.6694 38.087C26.8291 37.8856 27.0522 37.7444 27.302 37.6864C29.8558 37.1 32.1929 35.803 34.0455 33.9448C35.8979 32.0866 37.1907 29.742 37.7755 27.1804C37.8299 26.9287 37.9677 26.7031 38.1662 26.5401C38.365 26.3772 38.6128 26.2867 38.8694 26.2833C39.126 26.2799 39.3762 26.3639 39.579 26.5215C39.782 26.6791 39.9257 26.9011 39.9865 27.1512Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_402_76">
                                            <rect width="64" height="64" fill="white" transform="translate(7 7)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <a>${priceOrb.toLocaleString('en-US')}</a>
                            `;
                            priceContainerOrb.appendChild(price);
                        }
                    
                        // 5. Render Crossed Price
                        if (priceStandardCrossed !== null && priceStandardCrossed !== undefined) {
                            let price = document.createElement("div");
                            price.classList.add("crossed-price");
                            price.innerHTML = `
                                <a>${extension}${priceStandardCrossed}</a>
                            `;
                            priceContainer.appendChild(price);
                        }
                    
                        // 6. Cleanup Logic
                        // We check for null/undefined explicitly. If price is 0, we DON'T remove the container.
                        if (orbsExclusive) {
                            priceContainer.remove();
                        }

                        if (priceOrb === null) {
                            priceContainerOrb.remove();
                        }
                    } else if (product.prices) {
                        // 1. Extract USD Base Prices
                        product.prices["0"]?.country_prices?.prices?.forEach(price => {
                            if (price.currency === "usd") priceStandard = price.amount;
                            if (price.currency === "discord_orb") priceOrb = price.amount;
                        });
                    
                        product.prices["4"]?.country_prices?.prices?.forEach(price => {
                            if (price.currency === "usd") priceStandardCrossed = price.amount;
                        });

                        const standardPriceCheck = product.prices["0"]?.country_prices?.prices?.find(p => p.currency === "usd");
                        const nitroPriceCheck = product.prices["4"]?.country_prices?.prices?.find(p => p.currency === "usd");

                        if (!standardPriceCheck && !nitroPriceCheck) {
                            orbsExclusive = true;
                        }
                    
                        // 2. Convert to Local Currency if settings exist
                        const settingCurrency = Number(settingsStore.currency);
                        const currencyKey = Object.keys(currency_types).find(key => Number(key) === settingCurrency);

                        if (currencyKey) {
                            const details = converted_currencies[currencyKey];
                            extension = details?.extension ?? "??$";

                            if (settingCurrency !== 0) {
                                // Normalize keys (prevents number vs string issues)
                                const keyStandard = String(priceStandard);
                                const keyCrossed = String(priceStandardCrossed);
                            
                                const standardVal = details?.amounts?.[keyStandard];
                                const crossedVal = details?.amounts?.[keyCrossed];
                            
                                // Handle independently (fixes your issue)
                                priceStandard =
                                    standardVal === undefined ? "???" : standardVal;
                            
                                priceStandardCrossed =
                                    crossedVal === undefined ? "???" : crossedVal;
                            }
                        
                            // Format safely
                            if (details?.display_type === "fixed") {
                                if (typeof priceStandard === "number") {
                                    priceStandard = (priceStandard / 100).toFixed(2);
                                }
                            
                                if (typeof priceStandardCrossed === "number") {
                                    priceStandardCrossed = (priceStandardCrossed / 100).toFixed(2);
                                }
                            } 
                            else if (details?.display_type === "locale") {
                                if (typeof priceStandard === "number") {
                                    priceStandard = priceStandard.toLocaleString("en-US");
                                }
                            
                                if (typeof priceStandardCrossed === "number") {
                                    priceStandardCrossed = priceStandardCrossed.toLocaleString("en-US");
                                }
                            }
                        }
                    
                        // 3. Render Standard Price
                        // Explicitly check for null/undefined so 0 works
                        if (priceStandard !== null && priceStandard !== undefined) {
                            let price = document.createElement("div");
                            price.innerHTML = `
                                <a>${extension}${priceStandard}</a>
                            `;
                            priceContainer.appendChild(price);
                        }
                    
                        // 4. Render Orb Price
                        if (priceOrb !== null) {
                            let price = document.createElement("div");
                            price.classList.add("orb-price");
                            price.innerHTML = `
                                <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_402_76)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.2666 7.24549C39.4788 6.91817 38.5938 6.91817 37.8058 7.24549L17.533 15.6691C16.7452 15.9964 16.1194 16.6242 15.7931 17.4144L7.39573 37.7508C7.06942 38.541 7.06942 39.4288 7.39573 40.219L15.7931 60.5554C16.1194 61.3456 16.7452 61.9734 17.533 62.3008L37.8058 70.7244C38.5938 71.0516 39.4788 71.0516 40.2666 70.7244L60.5396 62.3008C61.3273 61.9734 61.9532 61.3456 62.2796 60.5554L70.6767 40.219C71.0031 39.4288 71.0031 38.541 70.6767 37.7508L62.2796 17.4144C61.9532 16.6242 61.3273 15.9964 60.5396 15.6691L40.2666 7.24549ZM37.9701 15.8347C38.5581 15.2447 39.5117 15.2447 40.0997 15.8346L62.066 37.8684C62.6542 38.4584 62.6542 39.4148 62.066 40.0048L40.0997 62.0386C39.5117 62.6286 38.5581 62.6286 37.9701 62.0386L16.006 40.0048C15.4179 39.4148 15.4179 38.4584 16.006 37.8684L37.9701 15.8347Z" fill="currentColor"/>
                                        <path d="M39.9865 27.1512C40.5578 29.7174 41.8419 32.069 43.6904 33.9334C45.5388 35.798 47.8759 37.0992 50.4309 37.6864C50.6809 37.7444 50.9038 37.8856 51.0635 38.087C51.2232 38.2884 51.3102 38.5382 51.3102 38.7954C51.3102 39.0528 51.2232 39.3026 51.0635 39.504C50.9038 39.7054 50.6809 39.8466 50.4309 39.9044C47.8789 40.4776 45.5418 41.7668 43.6926 43.622C41.8431 45.477 40.558 47.8214 39.9865 50.3814C39.9289 50.6322 39.7882 50.856 39.5874 51.0162C39.3866 51.1764 39.1376 51.2636 38.881 51.2636C38.6244 51.2636 38.3756 51.1764 38.1748 51.0162C37.974 50.856 37.8333 50.6322 37.7755 50.3814C37.1923 47.822 35.8995 45.4804 34.0463 43.6266C32.1931 41.7728 29.855 40.4824 27.302 39.9044C27.0522 39.8466 26.8291 39.7054 26.6694 39.504C26.5097 39.3026 26.4227 39.0528 26.4227 38.7954C26.4227 38.5382 26.5097 38.2884 26.6694 38.087C26.8291 37.8856 27.0522 37.7444 27.302 37.6864C29.8558 37.1 32.1929 35.803 34.0455 33.9448C35.8979 32.0866 37.1907 29.742 37.7755 27.1804C37.8299 26.9287 37.9677 26.7031 38.1662 26.5401C38.365 26.3772 38.6128 26.2867 38.8694 26.2833C39.126 26.2799 39.3762 26.3639 39.579 26.5215C39.782 26.6791 39.9257 26.9011 39.9865 27.1512Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_402_76">
                                            <rect width="64" height="64" fill="white" transform="translate(7 7)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <a>${priceOrb.toLocaleString('en-US')}</a>
                            `;
                            priceContainerOrb.appendChild(price);
                        }
                    
                        // 5. Render Crossed Price
                        if (priceStandardCrossed !== null && priceStandardCrossed !== undefined) {
                            let price = document.createElement("div");
                            price.classList.add("crossed-price");
                            price.innerHTML = `
                                <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M52.7473 39C52.7473 43.1925 49.6598 46.3125 45.5323 46.3125C44.5742 46.3262 43.6233 46.1454 42.7372 45.7811C41.851 45.4168 41.0479 44.8765 40.3765 44.1929C39.7051 43.5094 39.1793 42.6967 38.831 41.8042C38.4826 40.9116 38.3189 39.9576 38.3498 39C38.3498 34.8075 41.4373 31.6875 45.5648 31.6875C49.6923 31.6875 52.7798 34.8075 52.7798 39H52.7473ZM74.7498 39C74.7498 55.2825 61.7498 68.25 45.5323 68.25C38.952 68.2896 32.5537 66.0919 27.3866 62.0173C22.2195 57.9427 18.5905 52.2331 17.0948 45.825H10.8548L7.92976 32.175H17.2248C18.0698 29.055 19.4348 26.0325 21.1573 23.4H6.14226L3.24976 9.75H44.6548C62.1723 9.75 74.7498 22.7175 74.7498 39ZM60.9048 39C60.9048 30.3225 54.0798 23.4 45.5323 23.4C43.4955 23.4041 41.4797 23.8121 39.6016 24.6004C37.7236 25.3887 36.0204 26.5415 34.5908 27.9923C33.1612 29.4431 32.0335 31.1629 31.2729 33.0524C30.5123 34.9418 30.134 36.9634 30.1598 39C30.1598 47.6775 36.9848 54.6 45.5323 54.6C47.569 54.5959 49.5848 54.1879 51.4629 53.3996C53.341 52.6114 55.0441 51.4585 56.4737 50.0077C57.9033 48.5569 59.031 46.8371 59.7916 44.9476C60.5522 43.0582 60.9305 41.0366 60.9048 39Z" fill="currentColor"/>
                                </svg>
                                <a>${extension}${priceStandardCrossed}</a>
                            `;
                            priceContainer.appendChild(price);
                        }
                    
                        // 6. Cleanup Logic
                        // We check for null/undefined explicitly. If price is 0, we DON'T remove the container.
                        if (orbsExclusive) {
                            priceContainer.remove();
                        }

                        if (priceOrb === null) {
                            priceContainerOrb.remove();
                        }
                    }

                    if (priceStandard === "???" || priceStandardCrossed === "???") {
                        if (!orbsExclusive) modalInner.querySelector('.prices-error').classList.remove('hidden');
                    }

                    const modalSummary = modalInner.querySelector('.modal-summary');
                    const modalbundled_products = modalInner.querySelector('.modal-bundled_products');
                    const nothingHover = document.querySelector('.something-nobody-is-gonna-hover');
                    const previewProfile = modalInner.querySelector('.modal-preview-profile2');
                    const SKUIDContainer = modalInner.querySelector('.sku-id-container');

                    let itemTypeForName = product.type;
                    if (product.type === item_types.AVATAR_DECORATION) {
                        modalProfile.querySelector('.deco-img').src = `https://cdn.discordapp.com/avatar-decoration-presets/${product.items.find(item => item.type === item_types.AVATAR_DECORATION).asset}.png?size=4096&passthrough=true`;
                    } else if (product.type === item_types.PROFILE_EFFECT) {

                        previewProfile.style.height = `400px`;
                        modalProfile.querySelector('.profile-effect-div').innerHTML = `
                            <div class="modal-profile-profile-effect-preview"></div>
                        `;

                        const profileProfileEffectPreview = modalInner.querySelector('.modal-profile-profile-effect-preview');

                        const profileEffect = product.items[0];

                        if (profileEffect) {
                            profileProfileEffectPreview.style.width = '100%';
                            profileProfileEffectPreview.style.height = '100%';
                            profileProfileEffectPreview.style.aspectRatio = '0.1';

                            const effectsCard = new ProfileEffectsCard(profileProfileEffectPreview, profileEffect, nothingHover, {
                                startImmediately: true
                            });

                            nothingHover._profileEffectsCard = effectsCard;
                        } else {
                            profileProfileEffectPreview.innerHTML = ``;
                        }
                    } else if (product.type === item_types.NAMEPLATE) {
                        const item = product.items[0];
                        const paletteName = item.palette;
                        const bgcolor = nameplate_palettes[paletteName].darkBackground;

                        modalInner.querySelector('.modal2-profile-preview').innerHTML = `
                            <div class="modal-nameplate-profile-preview">
                                <div class="nameplate-null-user">
                                    <div class="nameplate-null-user-avatar"></div>
                                    <div class="nameplate-null-user-name _1"></div>
                                    <div class="nameplate-preview-status-bg"></div>
                                    <div class="nameplate-preview-status-color"></div>
                                </div>
                                <div class="nameplate-null-user">
                                    <div class="nameplate-null-user-avatar"></div>
                                    <div class="nameplate-null-user-name _2"></div>
                                    <div class="nameplate-preview-status-bg"></div>
                                    <div class="nameplate-preview-status-color"></div>
                                </div>
                                <div class="nameplate-null-user nameplate-preview" style="background-image: linear-gradient(90deg, #00000000 -30%, ${bgcolor} 200%);">
                                    <video disablepictureinpicture muted loop autoplay class="nameplate-null-user nameplate-video-preview" style="position: absolute; height: 100%; width: auto; right: 0;" src="https://cdn.discordapp.com/assets/collectibles/${item.asset}asset.webm"></video>
                                    <div class="nameplate-user-avatar avatar2"></div>
                                    <p class="nameplate-user-name name2">Nameplate</p>
                                </div>
                                <div class="nameplate-null-user">
                                    <div class="nameplate-null-user-avatar"></div>
                                    <div class="nameplate-null-user-name _2"></div>
                                    <div class="nameplate-preview-status-bg"></div>
                                    <div class="nameplate-preview-status-color"></div>
                                </div>
                                <div class="nameplate-null-user">
                                    <div class="nameplate-null-user-avatar"></div>
                                    <div class="nameplate-null-user-name _1"></div>
                                    <div class="nameplate-preview-status-bg"></div>
                                    <div class="nameplate-preview-status-color"></div>
                                </div>
                            </div>
                        `;

                        if (currentUserData) {
                            modalInner.querySelector('.name2').textContent = currentUserData.global_name ? currentUserData.global_name : currentUserData.username;
                            let userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.webp?size=128';
                            if (currentUserData.avatar.includes('a_')) {
                                userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.gif?size=128';
                            }

                            modalInner.querySelector('.avatar2').style.backgroundImage = `url(${userAvatar})`;
                        }

                    } else if (product.type === item_types.PROFILE_FRAME) {

                        const frameContainerDiv = modalInner.querySelector('.modal2-profile-preview').querySelector('.frame-front');
                        const frameContainerDivback = modalInner.querySelector('.modal2-profile-preview').querySelector('.frame-back');
                        const layers = product.items[0].layers;
                        layers.forEach(layer => {
                            const src = `https://cdn.discordapp.com/media/v1/collectibles-shop/${product.sku_id}/${layer.id}/static`;
                            let img = document.createElement("img");
                            img.src = src;
                            img.classList.add(`a-${layer.anchor}`);
                            img.classList.add(`t-${layer.type}`);
                            if (layer.order === "front") frameContainerDiv.appendChild(img);
                            if (layer.order === "back") frameContainerDivback.appendChild(img);
                        });
                        
                    } else if (product.type === item_types.BUNDLE) {

                        const typeLabels = {
                            [item_types.AVATAR_DECORATION]: 'Decoration',
                            [item_types.PROFILE_EFFECT]: 'Profile Effect',
                            [item_types.NAMEPLATE]: 'Nameplate',
                            [item_types.PROFILE_FRAME]: 'Profile Frame'
                        };
                        
                        const items = product.bundled_products
                            .filter(item => typeLabels[item.type])
                            // Map directly to the HTML structure for each item
                            .map(item => `<div class="bundled_products"><h3>${item.name}</h3><p>${typeLabels[item.type]}</p></div>`);
                        
                        // Join all items without extra punctuation, then prepend the header
                        const listString = items.length > 0 
                            ? `<h3>Bundle Includes:</h3>${items.join('')}` 
                            : '';
                        
                        // Use innerHTML so the browser renders the tags
                        modalbundled_products.innerHTML = listString;

                        modalSummary.textContent = '';

                        if (product.items.find(item => item.type === item_types.AVATAR_DECORATION)) {
                            modalProfile.querySelector('.deco-img').src = `https://cdn.discordapp.com/avatar-decoration-presets/${product.items.find(item => item.type === item_types.AVATAR_DECORATION).asset}.png?size=4096&passthrough=true`
                        }
                        if (product.items.find(item => item.type === item_types.PROFILE_EFFECT)) {


                            modalProfile.querySelector('.profile-effect-div').innerHTML = `
                                <div class="modal-profile-profile-effect-preview"></div>
                            `;

                            const profileProfileEffectPreview = modalInner.querySelector('.modal-profile-profile-effect-preview');

                            const productItem = product.items && product.items.find(item => item.type === item_types.PROFILE_EFFECT) ? product.items.find(item => item.type === item_types.PROFILE_EFFECT) : null;

                            const profileEffect = productItem;

                            if (profileEffect) {
                                profileProfileEffectPreview.style.width = '100%';
                                profileProfileEffectPreview.style.height = '100%';
                                profileProfileEffectPreview.style.aspectRatio = '0.1';

                                const effectsCard = new ProfileEffectsCard(profileProfileEffectPreview, profileEffect, nothingHover, {
                                    startImmediately: true
                                });

                                nothingHover._profileEffectsCard = effectsCard;
                            } else {
                                profileProfileEffectPreview.innerHTML = ``;
                            }
                        }
                        if (product.items.find(item => item.type === item_types.NAMEPLATE)) {

                            modalNameplateProfile.classList.remove("hidden");

                            const item = product.items.find(item => item.type === item_types.NAMEPLATE);
                            const paletteName = item.palette;
                            const bgcolor = nameplate_palettes[paletteName].darkBackground;

                            const videoElement2 = modalNameplateProfile.querySelector("video");
                            videoElement2.src = `https://cdn.discordapp.com/assets/collectibles/${item.asset}asset.webm`;
                            modalNameplateProfile.style.backgroundImage = `linear-gradient(90deg, #00000000 -30%, ${bgcolor} 200%)`;
                            videoElement2.play();
                            if (currentUserData) {
                                modalNameplateProfile.querySelector('.name1').textContent = currentUserData.global_name ? currentUserData.global_name : currentUserData.username;
                                let userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.webp?size=128';
                                if (currentUserData.avatar.includes('a_')) {
                                    userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.gif?size=128';
                                }

                                modalNameplateProfile.querySelector('.avatar1').style.backgroundImage = `url(${userAvatar})`;
                            }
                        }
                    } else if (product.type === item_types.VARIANTS_GROUP) {

                        const variantContainer = modalInner.querySelector("[data-shop-card-var-container]");
                        variantContainer.innerHTML = "";
                        let currentSelectedVariant = null;

                        product.variants.forEach((variant, index) => {
                            itemTypeForName = variant.type;
                            let variantColorBlock = document.createElement("div");

                            variantColorBlock.classList.add("shop-card-var");
                            variantColorBlock.id = "shop-card-var";
                            variantColorBlock.style.backgroundColor = `${variant.variant_value}`;
                        
                            // Add click event listener to switch variants
                            variantColorBlock.addEventListener("click", () => {
                                if (currentSelectedVariant) {
                                    currentSelectedVariant.classList.remove("shop-card-var-selected");
                                }
                                variantColorBlock.classList.add("shop-card-var-selected");
                                currentSelectedVariant = variantColorBlock;
                                applyVariant(variant)
                            });
                        
                            // Append the color block to the container
                            variantContainer.appendChild(variantColorBlock);
                        
                            // Set the first variant as the default selected
                            if (index === 0) {
                                currentSelectedVariant = variantColorBlock;
                                variantColorBlock.classList.add("shop-card-var-selected");
                            }
                        });

                        function applyVariant(selectedVariant) {
                            SKUIDContainer.innerHTML = `
                                <p class="hideifonlyid">SKU:</p>
                                <p class="sku_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${selectedVariant.sku_id}')">${selectedVariant.sku_id}</p>
                            `;
                            if (settingsStore.show_product_id === 0) {
                                modalInner.querySelectorAll('.hideifonlyid').forEach((el) => {
                                    el.classList.add("hidden");
                                });
                            }
                            modalInner.querySelector("[data-shop-card-var-title]").textContent = `(${selectedVariant.variant_label})`;

                            modalInner.querySelector(".modal-item-name").textContent = selectedVariant.base_variant_name;

                            if (selectedVariant.type === item_types.AVATAR_DECORATION) {
                                modalInner.querySelector('.deco-img').src = `https://cdn.discordapp.com/avatar-decoration-presets/${selectedVariant.items[0].asset}.png?size=4096&passthrough=true`
                            } else if (selectedVariant.type === item_types.PROFILE_EFFECT) {

                                previewProfile.style.height = `400px`;
                                modalInner.querySelector('.profile-effect-div').innerHTML = `
                                    <div class="modal-profile-profile-effect-preview"></div>
                                `;

                                const profileProfileEffectPreview = modalInner.querySelector('.modal-profile-profile-effect-preview');


                                const profileEffect = selectedVariant.items[0];

                                if (profileEffect) {
                                    profileProfileEffectPreview.style.width = '100%';
                                    profileProfileEffectPreview.style.height = '100%';
                                    profileProfileEffectPreview.style.aspectRatio = '0.1';

                                    const effectsCard = new ProfileEffectsCard(profileProfileEffectPreview, profileEffect, nothingHover, {
                                        startImmediately: true
                                    });

                                    nothingHover._profileEffectsCard = effectsCard;
                                } else {
                                    profileProfileEffectPreview.innerHTML = ``;
                                }
                            } else if (selectedVariant.type === item_types.NAMEPLATE) {
                                const item = selectedVariant.items[0];
                                const paletteName = item.palette;
                                const bgcolor = nameplate_palettes[paletteName].darkBackground;

                                modalInner.querySelector('.modal2-profile-preview').innerHTML = `
                                    <div class="modal-nameplate-profile-preview">
                                        <div class="nameplate-null-user">
                                            <div class="nameplate-null-user-avatar"></div>
                                            <div class="nameplate-null-user-name _1"></div>
                                            <div class="nameplate-preview-status-bg"></div>
                                            <div class="nameplate-preview-status-color"></div>
                                        </div>
                                        <div class="nameplate-null-user">
                                            <div class="nameplate-null-user-avatar"></div>
                                            <div class="nameplate-null-user-name _2"></div>
                                            <div class="nameplate-preview-status-bg"></div>
                                            <div class="nameplate-preview-status-color"></div>
                                        </div>
                                        <div class="nameplate-null-user nameplate-preview" style="background-image: linear-gradient(90deg, #00000000 -30%, ${bgcolor} 200%);">
                                            <video disablepictureinpicture muted loop autoplay class="nameplate-null-user nameplate-video-preview" style="position: absolute; height: 100%; width: auto; right: 0;" src="https://cdn.discordapp.com/assets/collectibles/${item.asset}asset.webm"></video>
                                            <div class="nameplate-user-avatar avatar2"></div>
                                            <p class="nameplate-user-name name2">Nameplate</p>
                                        </div>
                                        <div class="nameplate-null-user">
                                            <div class="nameplate-null-user-avatar"></div>
                                            <div class="nameplate-null-user-name _2"></div>
                                            <div class="nameplate-preview-status-bg"></div>
                                            <div class="nameplate-preview-status-color"></div>
                                        </div>
                                        <div class="nameplate-null-user">
                                            <div class="nameplate-null-user-avatar"></div>
                                            <div class="nameplate-null-user-name _1"></div>
                                            <div class="nameplate-preview-status-bg"></div>
                                            <div class="nameplate-preview-status-color"></div>
                                        </div>
                                    </div>
                                `;

                                if (currentUserData) {
                                    modalInner.querySelector('.name2').textContent = currentUserData.global_name ? currentUserData.global_name : currentUserData.username;
                                    let userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.webp?size=128';
                                    if (currentUserData.avatar.includes('a_')) {
                                        userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.gif?size=128';
                                    }

                                    modalInner.querySelector('.avatar2').style.backgroundImage = `url(${userAvatar})`;
                                }
                            } else if (selectedVariant.type === item_types.PROFILE_FRAME) {

                                const frameContainerDiv = modalInner.querySelector('.modal2-profile-preview').querySelector('.frame-front');
                                const frameContainerDivback = modalInner.querySelector('.modal2-profile-preview').querySelector('.frame-back');
                                frameContainerDiv.innerHTML = ``;
                                frameContainerDivback.innerHTML = ``;
                                const layers = selectedVariant.items[0].layers;
                                layers.forEach(layer => {
                                    const src = `https://cdn.discordapp.com/media/v1/collectibles-shop/${selectedVariant.sku_id}/${layer.id}/static`;
                                    let img = document.createElement("img");
                                    img.src = src;
                                    img.classList.add(`a-${layer.anchor}`);
                                    img.classList.add(`t-${layer.type}`);
                                    if (layer.order === "front") frameContainerDiv.appendChild(img);
                                    if (layer.order === "back") frameContainerDivback.appendChild(img);
                                });

                            }
                        }
                    
                        // Apply the default variant (first one) initially
                        if (product.variants.length > 0) {
                            applyVariant(product.variants[0]);
                        }

                    } else {
                        modalInner.querySelector('.modal2-profile-preview').remove();
                    }
                    modalInner.querySelector('.modal-item-type').innerHTML = `<p>${getItemTypeName(itemTypeForName)}</p>`;

                } else if (tab === '2') {
                    modalInner.innerHTML = `
                        <div class="view-raw-modalv2-inner">
                            <textarea class="view-raw-modal-textbox" readonly>${JSON.stringify(product, undefined, 4)}</textarea>
                        </div>
                    `;
                    // const rawOutput = modalInner.querySelector('.view-raw-modalv2-inner');
                    // if (product.type === item_types.PROFILE_EFFECT) {
                    //     let raw = document.createElement('textarea');
                    //     raw.classList.add('view-raw-modal-textbox');
                    //     raw.setAttribute('readonly', 'true');
                    //     raw.innerHTML = JSON.stringify(product, undefined, 4);
                    //     rawOutput.appendChild(raw);
                    // }
                    document.querySelectorAll('.view-raw-modal-textbox').forEach(textbox => {
                        textbox.style.height = 'auto';
                        textbox.style.width = '100%';
                        textbox.style.height = textbox.scrollHeight + 'px';
                    });
                } else if (tab === '3') {
                    modalInner.innerHTML = `
                        <div class="view-raw-modalv2-inner">
                            <div class="product-discord-sa-sync">
                                <div class="product">
                                    <div class="top">
                                        <p class="sub1">Discord</p>
                                    </div>
                                    <div class="bottom" id="discord">
                                        <p class="sub2">Loading...</p>
                                    </div>
                                </div>
                                <div class="synced" id="sync">
                                </div>
                                <div class="product">
                                    <div class="top">
                                        <p class="sub1">Shop Archives</p>
                                    </div>
                                    <div class="bottom" id="shop-archives">
                                        <p class="sub2">Loading...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    const disDiv = modalInner.querySelector('#discord');
                    const syncDiv = modalInner.querySelector('#sync');
                    const saDiv = modalInner.querySelector('#shop-archives');
                    let unsynced = false;

                    const res1 = await fetch(APIV4 + '/product/' + product.sku_id + '?source=discord',{
                        method: 'GET',
                        headers: {
                            "Authorization": localStorage.token
                        }
                    });
                    if (!res1.ok) {
                        disDiv.innerHTML = `
                            <p class="sub2">This collectible doesn't exist on Discord</p>
                        `;
                        unsynced = true;
                    } else {
                        const disdata = await res1.json();
                        disDiv.innerHTML = `
                            <div class="item-info">
                                <p class="sub3">${disdata.name}</p>
                            </div>
                        `;
                    }
                    

                    const res2 = await fetch(APIV4 + '/product/' + product.sku_id);
                    if (!res2.ok) {
                        saDiv.innerHTML = `
                            <p class="sub2">This collectible isn't on the Shop Archives Database</p>
                            <button class="generic-button brand" id="sync-product">Sync Items</button>
                        `;
                        const btn = saDiv.querySelector("#sync-product");
                        btn.addEventListener("click", async function () {
                            btn.disabled = true;
                            try {
                                const data = await fetchAPI.post(endpnts.PRODUCT + product.sku_id);
                            } catch(err) {
                                console.error(err);
                            }
                            changeModalTab('3');
                        });
                        unsynced = true;
                        if (!res1.ok) {
                            saDiv.innerHTML = `
                                <p class="sub2">This collectible isn't on the Shop Archives Database</p>
                                <p class="sub2">You cannot add this item, it doesn't exist on Discord</p>
                            `;
                        }
                    } else {
                        const sadata = await res2.json();
                        saDiv.innerHTML = `
                            <div class="item-info">
                                <p class="sub3">${sadata.name}</p>
                            </div>
                            <button class="generic-button brand" id="sync-product">Sync Items</button>
                        `;
                        if (!res1.ok) {
                            saDiv.innerHTML = `
                                <div class="item-info">
                                    <p class="sub3">${sadata.name}</p>
                                </div>
                                <p class="sub2">You cannot sync this item, it doesn't exist on Discord</p>
                            `;
                        }
                        const btn = saDiv.querySelector("#sync-product");
                        if (btn) btn.addEventListener("click", async function () {
                            btn.disabled = true;
                            try {
                                const data = await fetchAPI.post(endpnts.PRODUCT + product.sku_id);
                            } catch(err) {
                                console.error(err);
                            }
                            changeModalTab('3');
                        });
                    }

                    if (unsynced === true) {
                        syncDiv.classList.remove("sy");
                        syncDiv.classList.add("un");
                        syncDiv.innerHTML = `
                            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                            <p>Unsynced</p>
                        `;
                    } else if (unsynced === false) {
                        syncDiv.classList.remove("un");
                        syncDiv.classList.add("sy");
                        syncDiv.innerHTML = `
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_387_27)">
                                <path d="M13.1163 16.9387C13.1171 16.6745 13.2224 16.4214 13.4092 16.2346C13.596 16.0478 13.8491 15.9425 14.1133 15.9417L17.663 15.9417C18.6934 15.9059 19.6697 15.4716 20.3863 14.7304C21.1029 13.9891 21.5039 12.9987 21.5048 11.9676C21.5058 10.9366 21.1065 9.94545 20.3912 9.2029C19.676 8.46035 18.7004 8.02436 17.6701 7.98674L14.1133 7.97967C13.8622 7.96024 13.6277 7.84677 13.4566 7.66194C13.2855 7.4771 13.1905 7.23451 13.1905 6.98265C13.1905 6.73078 13.2855 6.4882 13.4566 6.30336C13.6277 6.11853 13.8622 6.00506 14.1133 5.98563L17.6771 5.98563C19.2402 6.02052 20.7275 6.6662 21.8204 7.78435C22.9132 8.9025 23.5246 10.4042 23.5237 11.9677C23.5228 13.5312 22.9096 15.0321 21.8154 16.149C20.7213 17.2658 19.2332 17.9098 17.6701 17.9428L14.1133 17.9357C13.8491 17.9349 13.596 17.8297 13.4092 17.6428C13.2224 17.456 13.1171 17.2029 13.1163 16.9387ZM10.8465 6.98972C10.8457 7.2539 10.7404 7.50704 10.5536 7.69385C10.3668 7.88066 10.1137 7.98595 9.84947 7.98674L6.29272 7.97967C5.23689 7.97967 4.22431 8.3991 3.47772 9.14568C2.73114 9.89227 2.31171 10.9049 2.31171 11.9607C2.31171 13.0165 2.73114 14.0291 3.47772 14.7757C4.22431 15.5223 5.23689 15.9417 6.29272 15.9417L9.84947 15.9346C10.1158 15.9346 10.3712 16.0404 10.5595 16.2287C10.7478 16.417 10.8536 16.6724 10.8536 16.9387C10.8536 17.205 10.7478 17.4604 10.5595 17.6487C10.3712 17.837 10.1158 17.9428 9.84947 17.9428L6.29272 17.9357C4.75011 17.8729 3.29156 17.216 2.2223 16.1023C1.15304 14.9886 0.55593 13.5046 0.55593 11.9607C0.55593 10.4168 1.15304 8.93273 2.2223 7.81906C3.29156 6.70539 4.75011 6.04842 6.29272 5.98563L9.8424 5.98563C9.97441 5.98509 10.1052 6.01069 10.2273 6.06096C10.3494 6.11123 10.4603 6.18517 10.5536 6.27851C10.647 6.37186 10.7209 6.48277 10.7712 6.60483C10.8214 6.7269 10.847 6.85771 10.8465 6.98972Z" fill="currentColor"/>
                                <path d="M14.8136 12.9505C15.0519 12.9165 15.2699 12.7976 15.4276 12.6158C15.5853 12.434 15.6722 12.2013 15.6722 11.9606C15.6722 11.7199 15.5853 11.4872 15.4276 11.3054C15.2699 11.1235 15.0519 11.0047 14.8136 10.9706L9.15674 10.9706C9.01491 10.9504 8.87038 10.9608 8.73294 11.0013C8.5955 11.0418 8.46836 11.1113 8.36012 11.2051C8.25189 11.299 8.16508 11.4151 8.1056 11.5454C8.04611 11.6757 8.01532 11.8173 8.01532 11.9606C8.01532 12.1039 8.04611 12.2455 8.1056 12.3758C8.16508 12.5061 8.25189 12.6222 8.36012 12.7161C8.46836 12.8099 8.5955 12.8794 8.73294 12.9199C8.87038 12.9604 9.01491 12.9708 9.15674 12.9505L14.8136 12.9505Z" fill="currentColor"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_387_27">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>Synced</p>
                        `;
                    }
                } else if (tab === '4') {
                    modalInner.innerHTML = `
                        <div class="view-raw-modalv2-inner">
                            <textarea class="view-raw-modal-textbox" readonly>${JSON.stringify(product, undefined, 4)}</textarea>
                        </div>
                    `;
                    document.querySelectorAll('.view-raw-modal-textbox').forEach(textbox => {
                        textbox.style.height = 'auto';
                        textbox.style.width = '100%';
                        textbox.style.height = textbox.scrollHeight + 'px';
                    });
                }
            }

            modal.querySelector('#modalv2-tab-1').addEventListener("click", function () {
                changeModalTab('1');
            });
            modal.querySelector('#modalv2-tab-2').addEventListener("click", function () {
                changeModalTab('2');
            });
            if (currentUserData?.admin_level === 3) {
                const tab = modal.querySelector('#modalv2-tab-3')
                tab.classList.remove('hidden');
                tab.addEventListener("click", function () {
                    changeModalTab('3');
                });
            }
            if (experimentIs('product_assets_tab', [1,2])) {
                const tab = modal.querySelector('#modalv2-tab-4')
                tab.classList.remove('hidden');
                tab.addEventListener("click", function () {
                    changeModalTab('4');
                });
            }

            changeModalTab('1');

            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        } else if (type === "fromCategoryBanner") {
            const categoryData = data1;
            const modalBanner = getCategoryBanners(categoryData).modalBanner;

            modal.setAttribute('data-clear-param', 'itemSkuId');
            modal.setAttribute('data-clear-cache', 'currentOpenModalId');

            addParams({itemSkuId: categoryData.sku_id})
        
            modal.innerHTML = `
                <div class="category-modal-inner">
                    <div class="modalv2-tabs-container">
                        <div class="tab selected" id="category-modal-tab-1">
                            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="24" r="6" fill="currentColor"/>
                                <circle cx="12" cy="72" r="6" fill="currentColor"/>
                                <circle cx="12" cy="48" r="6" fill="currentColor"/>
                                <rect x="28" y="20" width="60" height="8" rx="4" fill="currentColor"/>
                                <path d="M72.124 44.0029C64.5284 44.0668 57.6497 47.1046 52.6113 52H32C29.7909 52 28 50.2091 28 48C28 45.7909 29.7909 44 32 44H72C72.0415 44 72.0828 44.0017 72.124 44.0029Z" fill="currentColor"/>
                                <path d="M44.2852 68C44.0983 69.3065 44 70.6418 44 72C44 73.3582 44.0983 74.6935 44.2852 76H32C29.7909 76 28 74.2091 28 72C28 69.7909 29.7909 68 32 68H44.2852Z" fill="currentColor"/>
                                <circle cx="72" cy="72" r="16" stroke="currentColor" stroke-width="8"/>
                                <rect x="81" y="85.9497" width="7" height="16" rx="3.5" transform="rotate(-45 81 85.9497)" fill="currentColor"/>
                            </svg>
                            <p>Overview</p>
                        </div>
                        <div class="tab disabled" id="category-modal-tab-4">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M8 3C7.44771 3 7 3.44772 7 4V5C7 5.55228 7.44772 6 8 6H16C16.5523 6 17 5.55228 17 5V4C17 3.44772 16.5523 3 16 3H15.1245C14.7288 3 14.3535 2.82424 14.1002 2.52025L13.3668 1.64018C13.0288 1.23454 12.528 1 12 1C11.472 1 10.9712 1.23454 10.6332 1.64018L9.8998 2.52025C9.64647 2.82424 9.27121 3 8.8755 3H8Z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M19 4.49996V4.99996C19 6.65681 17.6569 7.99996 16 7.99996H8C6.34315 7.99996 5 6.65681 5 4.99996V4.49996C5 4.22382 4.77446 3.99559 4.50209 4.04109C3.08221 4.27826 2 5.51273 2 6.99996V19C2 20.6568 3.34315 22 5 22H19C20.6569 22 22 20.6568 22 19V6.99996C22 5.51273 20.9178 4.27826 19.4979 4.04109C19.2255 3.99559 19 4.22382 19 4.49996ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5522 7.44772 14 8 14H16C16.5523 14 17 13.5522 17 13C17 12.4477 16.5523 12 16 12H8ZM7 17C7 16.4477 7.44772 16 8 16H13C13.5523 16 14 16.4477 14 17C14 17.5522 13.5523 18 13 18H8C7.44772 18 7 17.5522 7 17Z"></path>
                            </svg>
                            <p>Reviews</p>
                        </div>
                        <div class="tab hidden" id="category-modal-tab-3">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>ID Assets</p>
                        </div>
                        <div class="tab hidden" id="category-modal-tab-6">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>URL Assets</p>
                        </div>
                        <div class="tab hidden" id="category-modal-tab-8">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Override Assets</p>
                        </div>
                        <div class="tab hidden disabled" id="category-modal-tab-5">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 0L17.1462 9.85378L27 13.5L17.1462 17.1462L13.5 27L9.85378 17.1462L0 13.5L9.85378 9.85378L13.5 0Z" fill="currentColor"></path>
                            </svg>
                            <p>Rewards</p>
                        </div>
                        <div class="tab" id="category-modal-tab-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7376 3.18925C15.4883 2.93731 15.0814 2.93686 14.8316 3.18824L14.0087 4.01625C13.7618 4.26471 13.7614 4.66581 14.0078 4.91476L20.3804 11.3527C20.6265 11.6013 20.6265 12.0017 20.3804 12.2503L14.0078 18.6882C13.7614 18.9373 13.7618 19.3383 14.0087 19.5867L14.8316 20.4148C15.0814 20.6662 15.4883 20.6658 15.7376 20.4138L23.815 12.2503C24.061 12.0016 24.061 11.6014 23.815 11.3528L15.7376 3.18925Z" fill="currentColor"/>
                                <path d="M9.99171 4.91476C10.2381 4.66581 10.2377 4.26471 9.99081 4.01625L9.16787 3.18824C8.91804 2.93686 8.51118 2.93731 8.2619 3.18925L0.184466 11.3528C-0.0614893 11.6014 -0.061488 12.0016 0.184466 12.2503L8.2619 20.4138C8.51118 20.6658 8.91803 20.6662 9.16787 20.4148L9.99081 19.5867C10.2377 19.3383 10.2381 18.9373 9.99171 18.6882L3.61906 12.2503C3.37298 12.0017 3.37298 11.6013 3.61906 11.3527L9.99171 4.91476Z" fill="currentColor"/>
                            </svg>
                            <p>Raw</p>
                        </div>
                        <div class="tab hidden" id="category-modal-tab-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99976 20.59V19.4C2.00352 19.1363 2.11135 18.8847 2.29976 18.7L4.69976 16.28C4.7932 16.1873 4.90402 16.114 5.02586 16.0642C5.14769 16.0145 5.27816 15.9893 5.40976 15.99H5.99976L14.9998 6.99002L14.1498 6.14002C14.0504 6.04381 13.9721 5.92804 13.9198 5.80002L12.4298 2.07002C12.3934 1.97916 12.3845 1.87962 12.4042 1.78374C12.4238 1.68787 12.4712 1.59987 12.5404 1.53066C12.6096 1.46146 12.6976 1.41408 12.7935 1.39442C12.8894 1.37475 12.9889 1.38365 13.0798 1.42002L16.8098 2.92002C16.9369 2.9694 17.0526 3.04427 17.1498 3.14002L17.7898 3.78002C17.8827 3.68629 17.9933 3.6119 18.1152 3.56113C18.237 3.51036 18.3678 3.48422 18.4998 3.48422C18.6318 3.48422 18.7625 3.51036 18.8843 3.56113C19.0062 3.6119 19.1168 3.68629 19.2098 3.78002L20.2098 4.78002C20.3035 4.87299 20.3779 4.98359 20.4287 5.10545C20.4794 5.22731 20.5056 5.35801 20.5056 5.49002C20.5056 5.62203 20.4794 5.75274 20.4287 5.8746C20.3779 5.99646 20.3035 6.10706 20.2098 6.20002L21.7898 7.78002C21.8835 7.87299 21.9579 7.98359 22.0087 8.10545C22.0594 8.2273 22.0856 8.35801 22.0856 8.49002C22.0856 8.62203 22.0594 8.75274 22.0087 8.8746C21.9579 8.99646 21.8835 9.10706 21.7898 9.20002L20.2098 10.78C20.1168 10.8738 20.0062 10.9481 19.8843 10.9989C19.7625 11.0497 19.6318 11.0758 19.4998 11.0758C19.3678 11.0758 19.237 11.0497 19.1152 10.9989C18.9933 10.9481 18.8827 10.8738 18.7898 10.78L16.9998 9.00002L7.99976 18V18.59C7.99601 18.8538 7.88818 19.1054 7.69976 19.29L5.29976 21.71C5.20632 21.8027 5.09551 21.876 4.97367 21.9258C4.85183 21.9756 4.72137 22.0008 4.58976 22H3.39976C3.13599 21.9963 2.88439 21.8884 2.69976 21.7L2.27976 21.3C2.18708 21.2066 2.11376 21.0958 2.06399 20.9739C2.01423 20.8521 1.989 20.7216 1.98976 20.59H1.99976Z" fill="currentColor"></path>
                                <path d="M8.23022 10.23C8.43022 10.43 8.74022 10.43 8.93022 10.23L10.2302 8.92999C10.3218 8.83652 10.3732 8.71086 10.3732 8.57999C10.3732 8.44911 10.3218 8.32345 10.2302 8.22998L6.50022 4.49999L6.80022 4.19999C6.98345 4.01306 7.08608 3.76174 7.08608 3.49999C7.08608 3.23823 6.98345 2.98691 6.80022 2.79999L6.30022 2.29999C6.10022 2.09999 5.85022 1.99999 5.60022 2.07999C5.17022 2.21999 4.43022 2.56999 3.50022 3.49999C2.86608 4.07663 2.37918 4.79669 2.08022 5.59999C2.00022 5.84999 2.11022 6.09999 2.29022 6.29999L2.79022 6.79999C2.88319 6.89371 2.99379 6.96811 3.11565 7.01888C3.23751 7.06965 3.36821 7.09578 3.50022 7.09578C3.63224 7.09578 3.76294 7.06965 3.8848 7.01888C4.00666 6.96811 4.11726 6.89371 4.21022 6.79999L4.50022 6.49999L8.23022 10.23ZM13.7702 15.06C13.6786 15.1534 13.6273 15.2791 13.6273 15.41C13.6273 15.5409 13.6786 15.6665 13.7702 15.76L15.5002 17.5L16.9402 19.9C16.9823 19.9692 17.0327 20.033 17.0902 20.09L18.8202 21.82C18.9202 21.92 19.0802 21.92 19.1802 21.82L21.8202 19.18C21.9202 19.08 21.9202 18.92 21.8202 18.82L20.1002 17.1C20.0401 17.0418 19.9729 16.9914 19.9002 16.95L17.5002 15.5L15.7702 13.77C15.6768 13.6784 15.5511 13.6271 15.4202 13.6271C15.2893 13.6271 15.1637 13.6784 15.0702 13.77L13.7702 15.07V15.06Z" fill="currentColor"></path>
                            </svg>
                            <p>Admin</p>
                        </div>
                    </div>

                    <img class="category-modal-banner-preview" src="${modalBanner}">
                    
                    <div id="category-modal-inner-content">
                        <div class="category-modal-bottom-container">
                            <p class="sku_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${categoryData.sku_id}')">${categoryData.sku_id}</p>
                            <h1>${categoryData.name}</h1>
                            <p>${categoryData.summary ? categoryData.summary : ''}</p>
                            <div class="category-modal-quick-info-container">
                                <div class="outer-block">
                                    <p>Prices</p>
                                </div>
                                <div class="outer-block">
                                    <p>Products</p>
                                </div>
                                <div class="outer-block">
                                    <p>Community Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                        <div class="has-tooltip" data-tooltip="Share">
                            <svg class="modalv2_top_icon" onclick="copyValue('${baseYapperURL}?page=${currentPageCache}&itemSkuId=${categoryData.sku_id}');" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M21.7 7.3a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L18.58 9H13a7 7 0 0 0-7 7v4a1 1 0 1 1-2 0v-4a9 9 0 0 1 9-9h5.59l-3.3-3.3a1 1 0 0 1 1.42-1.4l5 5Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;

            const bannerBG = modal.querySelector('.category-modal-banner-preview');
            bannerBG.addEventListener("load", () => {
                if (bannerBG.naturalWidth === 0 || bannerBG.naturalHeight === 0) {
                    bannerBG.remove();
                }
            });
            bannerBG.addEventListener("error", () => {
                bannerBG.remove();
            });
        
            function changeModalTab(tab) {
                modal.querySelectorAll('.selected').forEach((el) => {
                    el.classList.remove("selected");
                });
        
                modal.querySelector('#category-modal-tab-'+tab).classList.add('selected');
        
                const modalInner = modal.querySelector('#category-modal-inner-content');
        
                if (tab === '1') {
                    modalInner.innerHTML = `
                        <div class="category-modal-bottom-container">
                            <p class="sku_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${categoryData.sku_id}')">${categoryData.sku_id}</p>
                            <h1>${categoryData.name}</h1>
                            <p>${categoryData.summary ? categoryData.summary : ''}</p>
                            <div class="misc-info">
                                <p class="updated-date">Last Updated: </p>
                                <p${categoryData.limited ? '' : ' class="hidden"'}>We have limited information on this category</p>
                            </div>
                            <div class="category-modal-quick-info-container">
                                <div class="outer-block">
                                    <p class="quick-info-prices-title">Prices</p>
                                    <div class="block" id="price-detail-block-container">
                                        <div class="price-titles">
                                            <p>Standard</p>
                                            <p>Nitro</p>
                                        </div>
                                        <div id="price-detail-block">
                                        </div>
                                    </div>
                                </div>
                                <div class="outer-block">
                                    <p>Products</p>
                                    <div class="block">
                                        <div id="products-details-block">

                                        </div>
                                    </div>
                                </div>
                                <div class="outer-block">
                                    <p>Community Rating</p>
                                    <div class="block">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFEC3E" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"/></svg>
                                        <h2 id="average-rating">N/A</h2>
                                        <h2>/</h2>
                                        <h1>5</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    if (firstTimeOpeningModal) {
                        modalInner.querySelectorAll('.block').forEach((el) => {
                            el.classList.add("animated");
                        });
                    }

                    const date = new Date(categoryData.updated_at);
                    const now = new Date();

                    const diffMs = now - date;
                    const diffSeconds = Math.floor(diffMs / 1000);
                    const diffMinutes = Math.floor(diffSeconds / 60);
                    const diffHours = Math.floor(diffMinutes / 60);

                    const dateContainer = modalInner.querySelector(".updated-date");

                    let output;

                    // Less than 1 minute
                    if (diffSeconds < 60) {
                        output = `${diffSeconds} second${diffSeconds !== 1 ? 's' : ''} ago`;
                    
                    // Less than 1 hour
                    } else if (diffMinutes < 60) {
                        output = `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
                    
                    // Less than 24 hours
                    } else if (diffHours < 24) {
                        output = `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
                    
                    // 24 hours or more → show date
                    } else {
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                    
                        let formatted = `${day}/${month}/${year}`;
                    
                        if (settingsStore.us_time_format === 1) {
                            formatted = `${month}/${day}/${year}`;
                        }
                  
                        output = formatted;
                    }

                    dateContainer.textContent = `Last Updated: ${output}`;


                    const pricesDetailBlock = modalInner.querySelector('#price-detail-block');

                    if (pricesDetailBlock) {
                        let standardUS = 0;
                        let standardOrb = 0;

                        let nitroUS = 0;
                        let nitroOrb = 0;
                        
                        categoryData.products.forEach(product => {
                            if (!product.prices) {
                                return;
                            }
                            if (product.type === item_types.AVATAR_DECORATION || product.type === item_types.PROFILE_EFFECT || product.type === item_types.NAMEPLATE || product.type === item_types.PROFILE_FRAME || product.type === item_types.EXTERNAL_SKU) {

                                product.prices["0"]?.country_prices?.prices?.forEach(price => {
                                    if (price.currency === "usd") {
                                        standardUS += price.amount;
                                    }
                                    if (price.currency === "discord_orb") {
                                        standardOrb += price.amount;
                                    }
                                });

                                product.prices["4"]?.country_prices?.prices?.forEach(price => {
                                    if (price.currency === "usd") {
                                        nitroUS += price.amount;
                                    }
                                    if (price.currency === "discord_orb") {
                                        nitroOrb += price.amount;
                                    }
                                });

                            } else if (product.type === item_types.VARIANTS_GROUP) {
                                product.variants.forEach(variant => {

                                    variant.prices["0"]?.country_prices?.prices?.forEach(price => {
                                        if (price.currency === "usd") {
                                            standardUS += price.amount;
                                        }
                                        if (price.currency === "discord_orb") {
                                            standardOrb += price.amount;
                                        }
                                    });
    
                                    variant.prices["4"]?.country_prices?.prices?.forEach(price => {
                                        if (price.currency === "usd") {
                                            nitroUS += price.amount;
                                        }
                                        if (price.currency === "discord_orb") {
                                            nitroOrb += price.amount;
                                        }
                                    });

                                });
                            }

                            if (product.type === item_types.BUNDLE) {
                                modalInner.querySelector('.quick-info-prices-title').textContent = 'Prices (Excluding Bundles)'
                            }
                        });

                        const standardPriceOutput = `US$${(standardUS / 100).toFixed(2).replace('.00', '')}`;
                        const nitroPriceOutput = `US$${(nitroUS / 100).toFixed(2).replace('.00', '')}`;

                        pricesDetailBlock.innerHTML = `
                            <div class="raw-price-container" id="standardUS">
                                <h3>${standardPriceOutput}</h3>
                            </div>
                            <div class="raw-price-container" id="nitroUS">
                                <h3>${nitroPriceOutput}</h3>
                            </div>
                            <div class="raw-price-container" style="grid-column: span 2;" id="standardOrb">
                                <div class="orb-icon"></div>
                                <h3>${standardOrb.toLocaleString('en-US')}</h3>
                            </div>
                            <div class="raw-price-container hidden" id="nitroOrb">
                                <div class="orb-icon"></div>
                                <h3>${nitroOrb.toLocaleString('en-US')}</h3>
                            </div>
                        `;

                        let justACounter = 0;

                        if (standardUS === 0) {
                            justACounter += 1;
                            pricesDetailBlock.querySelector('#standardUS').classList.add('hidden');
                        }
                        if (nitroUS === 0) {
                            justACounter += 1;
                            pricesDetailBlock.querySelector('#nitroUS').classList.add('hidden');
                        }

                        if (standardOrb === 0) {
                            justACounter += 1;
                            pricesDetailBlock.querySelector('#standardOrb').classList.add('hidden');
                        }
                        if (nitroOrb === 0) {
                            justACounter += 1;
                            pricesDetailBlock.querySelector('#nitroOrb').classList.add('hidden');
                        }
                        
                        if (justACounter === 4) {
                            modalInner.querySelector('#price-detail-block-container').innerHTML = `
                                <svg class="there-are-no-prices-here-silly" style="scale: 0.8; margin-right: 0;" width="163" height="78" viewBox="0 0 163 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_108_43)">
                                <g clip-path="url(#clip1_108_43)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0048 7.99975C31.1592 7.88746 30.3043 8.11652 29.6279 8.63663L12.2261 22.0202C11.5499 22.5402 11.1078 23.3087 10.9971 24.1564L8.14938 45.9732C8.03872 46.8209 8.2685 47.6785 8.7882 48.3573L22.1628 65.8274C22.6825 66.5062 23.4496 66.9506 24.2952 67.063L46.0575 69.9525C46.9033 70.0647 47.7581 69.8356 48.4344 69.3157L65.8364 55.932C66.5126 55.4119 66.9546 54.6435 67.0654 53.7958L69.913 31.979C70.0237 31.1312 69.7939 30.2737 69.2741 29.5949L55.8997 12.1248C55.3799 11.446 54.6129 11.0015 53.7673 10.8892L32.0048 7.99975ZM32.0097 16.8906C32.4249 16.1686 33.346 15.9217 34.0666 16.3394L60.9873 31.9371C61.7081 32.3548 61.9556 33.2786 61.5402 34.0007L46.0251 60.969C45.6099 61.6911 44.6888 61.9379 43.9681 61.5202L17.0496 45.9219C16.3289 45.5042 16.0814 44.5804 16.4967 43.8583L32.0097 16.8906Z" fill="currentColor"/>
                                <path d="M36.8859 27.2991C38.1018 29.6301 39.9509 31.5692 42.2188 32.8916C44.4869 34.2143 47.0811 34.8663 49.701 34.7722C49.9576 34.7635 50.2094 34.8422 50.4158 34.9954C50.6222 35.1486 50.7708 35.3674 50.8374 35.6158C50.904 35.8644 50.8847 36.1282 50.7825 36.3641C50.6804 36.6 50.5016 36.7941 50.2751 36.9146C47.9584 38.1288 46.0346 39.9789 44.7286 42.2495C43.4223 44.52 42.7876 47.1171 42.8983 49.7378C42.9075 49.995 42.8295 50.2476 42.677 50.4543C42.5246 50.661 42.3066 50.8097 42.0587 50.8761C41.8109 50.9425 41.548 50.9227 41.3126 50.8199C41.0772 50.7171 40.8833 50.5374 40.7625 50.3101C39.5368 47.9888 37.682 46.0616 35.4122 44.7506C33.1423 43.4396 30.5499 42.7983 27.9343 42.9008C27.678 42.9096 27.426 42.831 27.2196 42.6778C27.0132 42.5246 26.8646 42.3058 26.798 42.0572C26.7314 41.8087 26.7507 41.5449 26.8529 41.3091C26.955 41.0732 27.1339 40.8791 27.3602 40.7584C29.6753 39.531 31.597 37.6733 32.9056 35.3989C34.2139 33.1246 34.8558 30.5253 34.7577 27.8996C34.7451 27.6425 34.8198 27.3888 34.9694 27.1801C35.1193 26.9712 35.3352 26.8196 35.5822 26.75C35.8292 26.6803 36.0926 26.6966 36.3292 26.7964C36.5661 26.8961 36.7624 27.0733 36.8859 27.2991Z" fill="currentColor"/>
                                </g>
                                <path d="M72 57L73.8906 62.1094L79 64L73.8906 65.8906L72 71L70.1094 65.8906L65 64L70.1094 62.1094L72 57Z" fill="currentColor"/>
                                <path d="M11 4L12.3505 7.64955L16 9L12.3505 10.3505L11 14L9.64955 10.3505L6 9L9.64955 7.64955L11 4Z" fill="currentColor"/>
                                <path d="M131.736 47.802C133.401 48.2481 135.175 48.0146 136.668 47.1526C138.161 46.2906 139.25 44.8709 139.696 43.2058C140.143 41.5407 139.909 39.7666 139.047 38.2735C138.185 36.7804 136.765 35.6911 135.1 35.2449C133.435 34.7988 131.661 35.0323 130.168 35.8944C128.675 36.7564 127.586 38.1761 127.139 39.8411C126.693 41.5062 126.927 43.2804 127.789 44.7734C128.651 46.2665 130.071 47.3558 131.736 47.802Z" fill="currentColor"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M115.033 9.68011C114.201 9.45702 113.314 9.57382 112.567 10.0048C111.821 10.4358 111.276 11.1456 111.053 11.9782C110.83 12.8108 110.946 13.6979 111.377 14.4444C111.808 15.1908 112.518 15.7355 113.351 15.9586L122.769 18.4821C123.601 18.7052 124.311 19.2499 124.742 19.9964C125.173 20.7428 125.29 21.6299 125.067 22.4625C124.844 23.2951 124.299 24.0049 123.552 24.436C122.806 24.867 121.919 24.9837 121.086 24.7606L106.96 20.9754C106.127 20.7523 105.24 20.8691 104.494 21.3001C103.747 21.7311 103.202 22.4409 102.979 23.2735C102.756 24.1061 102.873 24.9932 103.304 25.7397C103.735 26.4861 104.445 27.0308 105.277 27.2539L113.125 29.3568C113.958 29.5799 114.668 30.1248 115.099 30.8711C115.53 31.6175 115.647 32.5047 115.424 33.3373C115.201 34.1698 114.656 34.8798 113.909 35.3107C113.163 35.7415 112.276 35.8584 111.443 35.6353L105.165 33.953C104.332 33.7299 103.445 33.8469 102.698 34.2777C101.952 34.7086 101.407 35.4186 101.184 36.2511C100.961 37.0837 101.078 37.9709 101.509 38.7173C101.94 39.4636 102.65 40.0084 103.482 40.2315L107.406 41.283C107.362 46.1451 108.682 50.9223 111.216 55.0717C113.751 59.2214 117.398 62.5771 121.744 64.758C126.089 66.9389 130.96 67.8576 135.801 67.4094C140.643 66.9615 145.262 65.1645 149.134 62.2233C153.006 59.2817 155.975 55.3137 157.705 50.7695C159.434 46.2251 159.855 41.287 158.919 36.5155C157.983 31.7442 155.728 27.3308 152.41 23.7767C149.092 20.2226 144.843 17.6702 140.147 16.4094L115.033 9.68011ZM130.053 54.0805C133.384 54.9729 136.932 54.5058 139.918 52.7817C142.904 51.058 145.083 48.2186 145.975 44.8881C146.867 41.5577 146.4 38.0094 144.676 35.0234C142.952 32.0376 140.113 29.8588 136.783 28.9664C133.452 28.0741 129.904 28.5412 126.918 30.2652C123.932 31.989 121.753 34.8284 120.861 38.1588C119.969 41.4893 120.436 45.0376 122.16 48.0234C123.883 51.0094 126.723 53.1881 130.053 54.0805Z" fill="currentColor"/>
                                <path d="M95.8596 24.7304C96.6922 24.9535 97.5793 24.8367 98.3257 24.4058C99.0722 23.9748 99.6169 23.2649 99.84 22.4323C100.063 21.5998 99.9463 20.7127 99.5153 19.9662C99.0843 19.2197 98.3745 18.675 97.5419 18.4519L95.9723 18.0313C95.1397 17.8083 94.2526 17.9251 93.5061 18.356C92.7596 18.787 92.2149 19.4969 91.9918 20.3294C91.7688 21.162 91.8856 22.0491 92.3165 22.7956C92.7475 23.5421 93.4573 24.0868 94.2899 24.3099L95.8596 24.7304Z" fill="currentColor"/>
                                <path d="M147 67L148.35 70.6495L152 72L148.35 73.3505L147 77L145.65 73.3505L142 72L145.65 70.6495L147 67Z" fill="currentColor"/>
                                <path d="M85 7L86.8906 12.1094L92 14L86.8906 15.8906L85 21L83.1094 15.8906L78 14L83.1094 12.1094L85 7Z" fill="currentColor"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_108_43">
                                <rect width="163" height="78" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_108_43">
                                <rect width="64" height="64" fill="white" transform="translate(-0.191895 16.3726) rotate(-15)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                <p>This category has no prices.</p>
                            `;
                        }
                    }


                    const productsDetailBlock = modalInner.querySelector('#products-details-block');

                    if (productsDetailBlock) {
                        let total = 0;

                        let type0count = 0;
                        let type1count = 0;
                        let type2count = 0;
                        let type3count = 0;
                        let type1000count = 0;
                        let type3000count = 0;
                        
                        categoryData.products.forEach(product => {
                            if (product.type === 0) {
                                total += 1;
                                type0count += 1;
                            } else if (product.type === 1) {
                                total += 1;
                                type1count += 1;
                            } else if (product.type === 2) {
                                total += 1;
                                type2count += 1;
                            } else if (product.type === 3) {
                                total += 1;
                                type3count += 1;
                            } else if (product.type === 1000) {
                                total += 1;
                                type1000count += 1;
                            } else if (product.type === 3000) {
                                total += 1;
                                type3000count += 1;
                            } else if (product.type === 2000) {
                                product.variants.forEach(variant => {
                                    total += 1;
                                    if (variant.type === 0) {
                                        type0count += 1;
                                    } else if (variant.type === 1) {
                                        type1count += 1;
                                    } else if (variant.type === 2) {
                                        type2count += 1;
                                    }
                                });
                            }
                        });

                        let totalItems = document.createElement("h1");
        
                        totalItems.textContent = '0';
        
                        productsDetailBlock.appendChild(totalItems);

                        if (firstTimeOpeningModal) {
                            animateNumber(totalItems, total, 1500);
                        } else {
                            totalItems.textContent = total;
                        }

                        if (type0count) {
                            let itemCount = document.createElement("p");
        
                            itemCount.textContent = 'Avatar Decorations: '+type0count;
        
                            productsDetailBlock.appendChild(itemCount);
                        }
                        if (type1count) {
                            let itemCount = document.createElement("p");
        
                            itemCount.textContent = 'Profile Effects: '+type1count;
        
                            productsDetailBlock.appendChild(itemCount);
                        }
                        if (type2count) {
                            let itemCount = document.createElement("p");
        
                            itemCount.textContent = 'Nameplates: '+type2count;
        
                            productsDetailBlock.appendChild(itemCount);
                        }
                        if (type3count) {
                            let itemCount = document.createElement("p");
        
                            itemCount.textContent = 'Profile Frames: '+type3count;
        
                            productsDetailBlock.appendChild(itemCount);
                        }
                        if (type1000count) {
                            let itemCount = document.createElement("p");
        
                            itemCount.textContent = 'Bundles: '+type1000count;
        
                            productsDetailBlock.appendChild(itemCount);
                        }
                        if (type3000count) {
                            let itemCount = document.createElement("p");
        
                            itemCount.textContent = 'External SKUs: '+type3000count;
        
                            productsDetailBlock.appendChild(itemCount);
                        }
                    }
        
                    const sku_id = modalInner.querySelector('.sku_id');
        
                    sku_id.addEventListener("click", function () {
                        sku_id.classList.add('clicked');
                        setTimeout(() => {
                            sku_id.classList.remove('clicked');
                        }, 500);
                    });
                    
                    const reviewsTab = modal.querySelector('#category-modal-tab-4');
                    if (settingsStore.staff_force_enable_reviews === 0) {
                        reviewsTab.classList.add('has-tooltip');
                        reviewsTab.setAttribute('data-tooltip', 'Reviews have been temporarily disabled');
                    } else
                    if (categoryModalInfo.reviews_disabled != true || settingsStore.staff_force_viewable_reviews_tab === 1) {
                        reviewsTab.classList.remove('disabled');
                        reviewsTab.addEventListener("click", function () {
                            // Reviews
                            changeModalTab('4');
                        });
                          
                        let total = 0;
                          
                        categoryModalInfo.reviews.forEach(review => {
                            total += review.rating;
                        });
                          
                        const average = categoryModalInfo.reviews.length > 0 ? (total / categoryModalInfo.reviews.length).toFixed(1) : 'N/A';

                        modalInner.querySelector('#average-rating').textContent = '0';

                        if (firstTimeOpeningModal && average != 'N/A') {
                            animateNumber(modalInner.querySelector('#average-rating'), average, 1500, {
                                useDecimals: true
                            });
                        } else {
                            modalInner.querySelector('#average-rating').textContent = average;
                        }

                        if (average <= 2.5) {
                            console.log('nah')
                        } else if (average >= 2.6 && average <= 3.4) {
                            console.log('mid')
                        } else if (average >= 3.5) {
                            console.log('yea')
                        }
                          
                    } else {
                        reviewsTab.classList.add('has-tooltip');
                        reviewsTab.setAttribute('data-tooltip', 'Reviews have been disabled for this category');
                    }

                    const tab3 = modal.querySelector('#category-modal-tab-3');
                    const catalogBannerAssetEntry = Object.values(customCategoryAssets).find(entry =>
                        typeof entry === "object" && entry.sku_id === categoryData.sku_id
                    );
                    if (Object.keys(categoryData.assets.id).length !== 0 || catalogBannerAssetEntry) {
                        tab3.classList.remove('hidden');
                        tab3.addEventListener("click", function () {
                            changeModalTab('3');
                        });
                    }

                    const tab6 = modal.querySelector('#category-modal-tab-6');
                    if (Object.keys(categoryData.assets.url).length !== 0) {
                        tab6.classList.remove('hidden');
                        tab6.addEventListener("click", function () {
                            changeModalTab('6');
                        });
                    }

                    const tab8 = modal.querySelector('#category-modal-tab-8');
                    if (Object.keys(categoryData.assets.overrides).length !== 0) {
                        tab8.classList.remove('hidden');
                        tab8.addEventListener("click", function () {
                            changeModalTab('8');
                        });
                    }
        
                } else if (tab === '2') {
                    modalInner.innerHTML = `
                        <div class="view-raw-modalv2-inner">
                            <textarea class="view-raw-modal-textbox" readonly>${JSON.stringify(categoryData, undefined, 4)}</textarea>
                        </div>
                    `;
                    document.querySelectorAll('.view-raw-modal-textbox').forEach(textbox => {
                        textbox.style.height = 'auto';
                        textbox.style.width = '100%';
                        textbox.style.height = textbox.scrollHeight + 'px';
                    });
                } else if (tab === '3') {
                    modalInner.innerHTML = `
                        <div class="category-modal-assets-container">
                        </div>
                    `;

                    const assetsContainer = modalInner.querySelector('.category-modal-assets-container');

                    const ia = categoryData.assets.id;
                    const ja = categoryData.assets.json;

                    const allAssets = {
                        "Banner": ia.banner,
                        "Banner Asset (Static)": ja.banner_asset?.static,
                        "Banner Asset (Animated)": ja.banner_asset?.animated,
                        "Logo": ia.logo,
                        "Mobile Background": ia.mobile_bg,
                        "Product Detail Page Background": ia.pdp_bg,
                        "Success Modal Background": ia.success_modal_bg,
                        "Mobile Banner": ia.mobile_banner,
                        "Featured Block": ia.featured_block,
                        "Hero Banner": ia.hero_banner,
                        "Hero Banner Asset (Static)": ja.hero_banner_asset?.static,
                        "Hero Banner Asset (Animated)": ja.hero_banner_asset?.animated,
                        "Wide Banner": ia.wide_banner,
                        "Hero Logo": ia.hero_logo,
                        "Catalog Banner Asset (Static)": ja.catalog_banner_asset?.static,
                        "Catalog Banner Asset (Animated)": ja.catalog_banner_asset?.animated
                    };

                    let nullAssets = true;

                    const catalogBannerAssetEntry = Object.values(customCategoryAssets).find(entry =>
                        typeof entry === "object" && entry.sku_id === categoryData.sku_id
                    );

                    if (catalogBannerAssetEntry?.banner?.static && catalogBannerAssetEntry?.banner?.credits) {
                        doTheAssetThing('Banner Asset (Static)', catalogBannerAssetEntry?.banner.static, catalogBannerAssetEntry?.banner.credits);
                    } else if (catalogBannerAssetEntry?.banner?.static) {
                        doTheAssetThing('Banner Asset (Static)', catalogBannerAssetEntry?.banner.static);
                    }

                    if (catalogBannerAssetEntry?.banner?.animated && catalogBannerAssetEntry?.banner?.credits) {
                        doTheAssetThing('Banner Asset (Animated)', catalogBannerAssetEntry?.banner.animated, catalogBannerAssetEntry?.banner.credits);
                    } else if (catalogBannerAssetEntry?.banner?.animated) {
                        doTheAssetThing('Banner Asset (Animated)', catalogBannerAssetEntry?.banner.animated);
                    }

                    if (catalogBannerAssetEntry?.hero_banner_asset?.static && catalogBannerAssetEntry?.hero_banner_asset?.credits) {
                        doTheAssetThing('Hero Banner Asset (Static)', catalogBannerAssetEntry?.hero_banner_asset.static, catalogBannerAssetEntry?.hero_banner_asset.credits);
                    } else if (catalogBannerAssetEntry?.hero_banner_asset?.static) {
                        doTheAssetThing('Hero Banner Asset (Static)', catalogBannerAssetEntry?.hero_banner_asset.static);
                    }

                    if (catalogBannerAssetEntry?.hero_banner_asset?.animated && catalogBannerAssetEntry?.hero_banner_asset?.credits) {
                        doTheAssetThing('Hero Banner Asset (Animated)', catalogBannerAssetEntry?.hero_banner_asset.animated, catalogBannerAssetEntry?.hero_banner_asset.credits);
                    } else if (catalogBannerAssetEntry?.hero_banner_asset?.animated) {
                        doTheAssetThing('Hero Banner Asset (Animated)', catalogBannerAssetEntry?.hero_banner_asset.animated);
                    }

                    if (catalogBannerAssetEntry?.catalog_banner_asset?.static && catalogBannerAssetEntry?.catalog_banner_asset?.credits) {
                        doTheAssetThing('Catalog Banner Asset (Static)', catalogBannerAssetEntry?.catalog_banner_asset.static, catalogBannerAssetEntry?.catalog_banner_asset.credits);
                    } else if (catalogBannerAssetEntry?.catalog_banner_asset?.static) {
                        doTheAssetThing('Catalog Banner Asset (Static)', catalogBannerAssetEntry?.catalog_banner_asset.static);
                    }

                    function doTheAssetThing(asset, value, credits = null) {
                        nullAssets = false;

                        let assetDiv = document.createElement("div");

                        assetDiv.classList.add('asset-div')

                        if (value.includes(".webm") || asset.includes("Animated")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <p>This video is built into the client and overrides the existing asset or acts as an alternative.</p>
                                <div class="credits"></div>
                                <video disablepictureinpicture autoplay muted loop src="${value}"></video> 
                            `;
                            if (credits) {
                                const userIndex = user_preview_usernames.findIndex(user => user.id === credits);
                                assetDiv.querySelector('.credits').innerHTML = `
                                    <p>This asset was made by </p>
                                    <div class="mention" onclick="openModal('user-modal', 'openUserModal', '${credits}');">@${user_preview_usernames[userIndex].name}</div>
                                `;
                            } else {
                                assetDiv.querySelector('.credits').remove();
                            }
                        } else if (value.includes(".png") || value.includes(".jpg") || asset.includes("Static")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <p>This image is built into the client and overrides the existing asset or acts as an alternative.</p>
                                <div class="credits"></div>
                                <img src="${value}"></img> 
                            `;
                            if (credits) {
                                const userIndex = user_preview_usernames.findIndex(user => user.id === credits);
                                assetDiv.querySelector('.credits').innerHTML = `
                                    <p>This asset was made by </p>
                                    <div class="mention" onclick="openModal('user-modal', 'openUserModal', '${credits}');">@${user_preview_usernames[userIndex].name}</div>
                                `;
                            } else {
                                assetDiv.querySelector('.credits').remove();
                            }
                        }

                        assetsContainer.appendChild(assetDiv);
                    }

                    Object.entries(allAssets).forEach(([asset, value]) => {
                        if (!value) return; // skip null or undefined

                        nullAssets = false;

                        let assetDiv = document.createElement("div");

                        assetDiv.classList.add('asset-div')

                        if (value.includes(".webm") || asset.includes("Animated")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <video disablepictureinpicture autoplay muted loop src="${value}"></video> 
                            `;
                        } else if (value.includes(".png") || value.includes(".jpg") || asset.includes("Static")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <img src="${value}"></img> 
                            `;
                        } else {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <p class="asset_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${value}')">${value}</p>
                                <img src="https://cdn.discordapp.com/app-assets/1096190356233670716/${value}.png?size=4096"></img> 
                            `;
                        }

                        assetsContainer.appendChild(assetDiv);
                    });

                    if (nullAssets) {
                        assetsContainer.innerHTML = `
                            <div class="no-assets-container">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.96 5.46002L18.54 10.04C18.633 10.1337 18.7436 10.2081 18.8655 10.2589C18.9873 10.3097 19.118 10.3358 19.25 10.3358C19.3821 10.3358 19.5128 10.3097 19.6346 10.2589C19.7565 10.2081 19.8671 10.1337 19.96 10.04L21.34 8.66002C21.7125 8.28529 21.9216 7.77839 21.9216 7.25002C21.9216 6.72164 21.7125 6.21474 21.34 5.84002L18.16 2.66002C17.7853 2.28751 17.2784 2.07843 16.75 2.07843C16.2217 2.07843 15.7148 2.28751 15.34 2.66002L13.96 4.04002C13.8663 4.13298 13.7919 4.24358 13.7412 4.36544C13.6904 4.4873 13.6642 4.618 13.6642 4.75002C13.6642 4.88203 13.6904 5.01273 13.7412 5.13459C13.7919 5.25645 13.8663 5.36705 13.96 5.46002ZM2.11005 20.16L2.84005 15.94C2.94422 15.3306 3.2341 14.7683 3.67005 14.33L11.54 6.46002C11.633 6.36629 11.7436 6.29189 11.8655 6.24112C11.9873 6.19036 12.118 6.16422 12.25 6.16422C12.3821 6.16422 12.5128 6.19036 12.6346 6.24112C12.7565 6.29189 12.8671 6.36629 12.96 6.46002L17.54 11.04C17.6338 11.133 17.7082 11.2436 17.7589 11.3654C17.8097 11.4873 17.8358 11.618 17.8358 11.75C17.8358 11.882 17.8097 12.0127 17.7589 12.1346C17.7082 12.2565 17.6338 12.3671 17.54 12.46L9.67005 20.33C9.2344 20.7641 8.67585 21.0539 8.07005 21.16L3.84005 21.89C3.60388 21.9301 3.36155 21.9131 3.13331 21.8403C2.90508 21.7676 2.69759 21.6412 2.52821 21.4719C2.35882 21.3025 2.23247 21.095 2.15972 20.8667C2.08697 20.6385 2.06993 20.3962 2.11005 20.16Z" fill="currentColor"/>
                                    <path d="M5 1L5.81027 3.18973L8 4L5.81027 4.81027L5 7L4.18973 4.81027L2 4L4.18973 3.18973L5 1Z" fill="currentColor"/>
                                    <path d="M14 19L14.5402 20.4598L16 21L14.5402 21.5402L14 23L13.4598 21.5402L12 21L13.4598 20.4598L14 19Z" fill="currentColor"/>
                                </svg>
                                <p>This category has no ID assets.</p>
                            </div>
                        `;
                    }

                    document.querySelectorAll('.asset_id').forEach((el) => {
                        el.addEventListener("click", function () {
                            el.classList.add('clicked');
                            setTimeout(() => {
                                el.classList.remove('clicked');
                            }, 500);
                        });
                    });

                } else if (tab === '6') {
                    modalInner.innerHTML = `
                        <div class="category-modal-assets-container">
                        </div>
                    `;

                    const assetsContainer = modalInner.querySelector('.category-modal-assets-container');

                    const ua = categoryData.assets.url;

                    const allAssets = {
                        "Hero Banner": ua.hero_banner,
                        "Hero Banner Animated": ua.hero_banner_animated,
                        "Hero Rive": ua.hero_rive,
                        "Hero Logo": ua.hero_logo,
                        "Catalog Banner": ua.catalog_banner,
                        "Catalog Banner Animated": ua.catalog_banner_animated,
                        "Catalog Banner Rive": ua.catalog_banner_rive,
                        "Featured Block": ua.featured_block,
                        "Logo": ua.logo,
                        "Product Detail Page Background": ua.pdp_bg,
                        "Wide Banner": ua.wide_banner,
                        "Wide Banner Animated": ua.wide_banner_animated,
                        "Mobile Hero": ua.mobile_hero,
                        "Mobile Hero Animated": ua.mobile_hero_animated,
                        "Mobile Banner": ua.mobile_banner,
                        "Mobile Background": ua.mobile_bg,
                        "Shop Button Background Hover": ua.shop_button_bg_hover,
                        "Upsell Banner Popout": ua.upsell_banner_popout,
                        "Upsell Banner": ua.upsell_banner,
                        "Tab Tooltip": ua.tab_tooltip,
                    };

                    let nullAssets = true;

                    Object.entries(allAssets).forEach(([asset, value]) => {
                        if (!value) return; // skip null or undefined

                        nullAssets = false;

                        let assetDiv = document.createElement("div");

                        assetDiv.classList.add('asset-div')

                        if (value.includes(".webm") || asset.includes("Animated")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <video disablepictureinpicture autoplay muted loop src="${value}"></video> 
                            `;
                        } else if (asset.includes("Rive")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <p class="asset_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${value}')">${value}</p>
                                <p>Rive files cannot be displayed here</p>
                            `;
                        } else if (value.includes(".png") || value.includes(".jpg") || !asset.includes("Animated")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <img src="${value}"></img> 
                            `;
                        } else {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <p class="asset_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${value}')">${value}</p>
                                <img src="https://cdn.discordapp.com/app-assets/1096190356233670716/${value}.png?size=4096"></img> 
                            `;
                        }

                        assetsContainer.appendChild(assetDiv);
                    });

                    if (nullAssets) {
                        assetsContainer.innerHTML = `
                            <div class="no-assets-container">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.96 5.46002L18.54 10.04C18.633 10.1337 18.7436 10.2081 18.8655 10.2589C18.9873 10.3097 19.118 10.3358 19.25 10.3358C19.3821 10.3358 19.5128 10.3097 19.6346 10.2589C19.7565 10.2081 19.8671 10.1337 19.96 10.04L21.34 8.66002C21.7125 8.28529 21.9216 7.77839 21.9216 7.25002C21.9216 6.72164 21.7125 6.21474 21.34 5.84002L18.16 2.66002C17.7853 2.28751 17.2784 2.07843 16.75 2.07843C16.2217 2.07843 15.7148 2.28751 15.34 2.66002L13.96 4.04002C13.8663 4.13298 13.7919 4.24358 13.7412 4.36544C13.6904 4.4873 13.6642 4.618 13.6642 4.75002C13.6642 4.88203 13.6904 5.01273 13.7412 5.13459C13.7919 5.25645 13.8663 5.36705 13.96 5.46002ZM2.11005 20.16L2.84005 15.94C2.94422 15.3306 3.2341 14.7683 3.67005 14.33L11.54 6.46002C11.633 6.36629 11.7436 6.29189 11.8655 6.24112C11.9873 6.19036 12.118 6.16422 12.25 6.16422C12.3821 6.16422 12.5128 6.19036 12.6346 6.24112C12.7565 6.29189 12.8671 6.36629 12.96 6.46002L17.54 11.04C17.6338 11.133 17.7082 11.2436 17.7589 11.3654C17.8097 11.4873 17.8358 11.618 17.8358 11.75C17.8358 11.882 17.8097 12.0127 17.7589 12.1346C17.7082 12.2565 17.6338 12.3671 17.54 12.46L9.67005 20.33C9.2344 20.7641 8.67585 21.0539 8.07005 21.16L3.84005 21.89C3.60388 21.9301 3.36155 21.9131 3.13331 21.8403C2.90508 21.7676 2.69759 21.6412 2.52821 21.4719C2.35882 21.3025 2.23247 21.095 2.15972 20.8667C2.08697 20.6385 2.06993 20.3962 2.11005 20.16Z" fill="currentColor"/>
                                    <path d="M5 1L5.81027 3.18973L8 4L5.81027 4.81027L5 7L4.18973 4.81027L2 4L4.18973 3.18973L5 1Z" fill="currentColor"/>
                                    <path d="M14 19L14.5402 20.4598L16 21L14.5402 21.5402L14 23L13.4598 21.5402L12 21L13.4598 20.4598L14 19Z" fill="currentColor"/>
                                </svg>
                                <p>This category has no URL assets.</p>
                            </div>
                        `;
                    }

                    document.querySelectorAll('.asset_id').forEach((el) => {
                        el.addEventListener("click", function () {
                            el.classList.add('clicked');
                            setTimeout(() => {
                                el.classList.remove('clicked');
                            }, 500);
                        });
                    });

                } else if (tab === '8') {
                    modalInner.innerHTML = `
                        <div class="category-modal-assets-container">
                        </div>
                    `;

                    const assetsContainer = modalInner.querySelector('.category-modal-assets-container');

                    const oa = categoryData.assets.overrides;

                    const allAssets = {
                        "Banner Animated": oa.banner_animated,
                        "Hero Banner": oa.hero_banner,
                        "Hero Banner Animated": oa.hero_banner_animated,
                        "Hero Rive": oa.hero_rive,
                        "Hero Logo": oa.hero_logo,
                        "Catalog Banner": oa.catalog_banner,
                        "Catalog Banner Animated": oa.catalog_banner_animated,
                        "Catalog Banner Rive": oa.catalog_banner_rive,
                        "Featured Block": oa.featured_block,
                        "Logo": oa.logo,
                        "Product Detail Page Background": oa.pdp_bg,
                        "Wide Banner": oa.wide_banner,
                        "Wide Banner Animated": oa.wide_banner_animated,
                        "Mobile Hero": oa.mobile_hero,
                        "Mobile Hero Animated": oa.mobile_hero_animated,
                        "Mobile Banner": oa.mobile_banner,
                        "Mobile Background": oa.mobile_bg,
                        "Shop Button Background Hover": oa.shop_button_bg_hover,
                        "Upsell Banner Popout": oa.upsell_banner_popout,
                        "Upsell Banner": oa.upsell_banner,
                        "Tab Tooltip": oa.tab_tooltip,
                    };

                    let nullAssets = true;

                    Object.entries(allAssets).forEach(([asset, value]) => {
                        if (!value) return; // skip null or undefined

                        nullAssets = false;

                        let assetDiv = document.createElement("div");

                        assetDiv.classList.add('asset-div')

                        if (value.includes(".webm") || asset.includes("Animated")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <video disablepictureinpicture autoplay muted loop src="${value}"></video> 
                            `;
                        } else if (asset.includes("Rive")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <p class="asset_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${value}')">${value}</p>
                                <p>Rive files cannot be displayed here</p>
                            `;
                        } else if (value.includes(".png") || value.includes(".jpg") || !asset.includes("Animated")) {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <img src="${value}"></img> 
                            `;
                        } else {
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <p class="asset_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${value}')">${value}</p>
                                <img src="https://cdn.discordapp.com/app-assets/1096190356233670716/${value}.png?size=4096"></img> 
                            `;
                        }

                        assetsContainer.appendChild(assetDiv);
                    });

                    if (nullAssets) {
                        assetsContainer.innerHTML = `
                            <div class="no-assets-container">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.96 5.46002L18.54 10.04C18.633 10.1337 18.7436 10.2081 18.8655 10.2589C18.9873 10.3097 19.118 10.3358 19.25 10.3358C19.3821 10.3358 19.5128 10.3097 19.6346 10.2589C19.7565 10.2081 19.8671 10.1337 19.96 10.04L21.34 8.66002C21.7125 8.28529 21.9216 7.77839 21.9216 7.25002C21.9216 6.72164 21.7125 6.21474 21.34 5.84002L18.16 2.66002C17.7853 2.28751 17.2784 2.07843 16.75 2.07843C16.2217 2.07843 15.7148 2.28751 15.34 2.66002L13.96 4.04002C13.8663 4.13298 13.7919 4.24358 13.7412 4.36544C13.6904 4.4873 13.6642 4.618 13.6642 4.75002C13.6642 4.88203 13.6904 5.01273 13.7412 5.13459C13.7919 5.25645 13.8663 5.36705 13.96 5.46002ZM2.11005 20.16L2.84005 15.94C2.94422 15.3306 3.2341 14.7683 3.67005 14.33L11.54 6.46002C11.633 6.36629 11.7436 6.29189 11.8655 6.24112C11.9873 6.19036 12.118 6.16422 12.25 6.16422C12.3821 6.16422 12.5128 6.19036 12.6346 6.24112C12.7565 6.29189 12.8671 6.36629 12.96 6.46002L17.54 11.04C17.6338 11.133 17.7082 11.2436 17.7589 11.3654C17.8097 11.4873 17.8358 11.618 17.8358 11.75C17.8358 11.882 17.8097 12.0127 17.7589 12.1346C17.7082 12.2565 17.6338 12.3671 17.54 12.46L9.67005 20.33C9.2344 20.7641 8.67585 21.0539 8.07005 21.16L3.84005 21.89C3.60388 21.9301 3.36155 21.9131 3.13331 21.8403C2.90508 21.7676 2.69759 21.6412 2.52821 21.4719C2.35882 21.3025 2.23247 21.095 2.15972 20.8667C2.08697 20.6385 2.06993 20.3962 2.11005 20.16Z" fill="currentColor"/>
                                    <path d="M5 1L5.81027 3.18973L8 4L5.81027 4.81027L5 7L4.18973 4.81027L2 4L4.18973 3.18973L5 1Z" fill="currentColor"/>
                                    <path d="M14 19L14.5402 20.4598L16 21L14.5402 21.5402L14 23L13.4598 21.5402L12 21L13.4598 20.4598L14 19Z" fill="currentColor"/>
                                </svg>
                                <p>This category has no Override assets.</p>
                            </div>
                        `;
                    }

                    document.querySelectorAll('.asset_id').forEach((el) => {
                        el.addEventListener("click", function () {
                            el.classList.add('clicked');
                            setTimeout(() => {
                                el.classList.remove('clicked');
                            }, 500);
                        });
                    });

                } else if (tab === '4') {
                    modalInner.innerHTML = `
                        <div class="category-modal-reviews-container">
                        </div>
                        <div class="write-review-container" id="write-review-container">
                            <p class="write-review-disclaimer-error"></p>
                            <div class="write-review-input-container">
                            </div>
                        </div>
                    `;

                    const reviewInputContainer = modalInner.querySelector('.write-review-input-container');

                    function refreshReviewBar() {
                        if (isMobileCache) {
                            reviewInputContainer.classList.add('normal');
                            reviewInputContainer.innerHTML = `
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_66_360)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0939 13.525C18.4939 12.825 19.5239 12.825 19.9139 13.525L23.8739 20.425C24.2539 21.085 23.7539 21.895 22.9639 21.895H15.0439C14.2539 21.895 13.7439 21.085 14.1339 20.415L18.0939 13.515V13.525ZM18.5539 15.395H19.4539C19.7539 15.395 19.9739 15.655 19.9539 15.945L19.7339 17.965C19.7239 18.125 19.5639 18.225 19.4039 18.195C19.1401 18.1391 18.8676 18.1391 18.6039 18.195C18.4439 18.225 18.2839 18.125 18.2739 17.965L18.0639 15.945C18.0569 15.8753 18.0646 15.8048 18.0866 15.7383C18.1085 15.6717 18.1443 15.6105 18.1914 15.5587C18.2386 15.5068 18.2961 15.4654 18.3603 15.4372C18.4244 15.409 18.4938 15.3946 18.5639 15.395H18.5539ZM19.0039 20.895C19.2691 20.895 19.5235 20.7896 19.711 20.6021C19.8985 20.4146 20.0039 20.1602 20.0039 19.895C20.0039 19.6298 19.8985 19.3754 19.711 19.1879C19.5235 19.0004 19.2691 18.895 19.0039 18.895C18.7387 18.895 18.4843 19.0004 18.2968 19.1879C18.1092 19.3754 18.0039 19.6298 18.0039 19.895C18.0039 20.1602 18.1092 20.4146 18.2968 20.6021C18.4843 20.7896 18.7387 20.895 19.0039 20.895Z" fill="currentColor"/>
                                <path d="M10.4238 2.12421C12.6154 1.77616 14.8606 2.1665 16.8057 3.23456C18.7507 4.30263 20.2856 5.98766 21.168 8.02362C22.0095 9.96556 22.2098 12.1215 21.749 14.1818L20.2764 11.7082C19.7305 10.764 18.2893 10.7639 17.7295 11.7082V11.6945L12.1875 21.0031C11.9898 21.3304 11.9593 21.6822 12.0508 21.9982C12.0339 21.9983 12.0169 22.0002 12 22.0002H2.2002C2.00802 21.9999 1.8196 21.9444 1.6582 21.84C1.49684 21.7357 1.36915 21.5864 1.29004 21.4113C1.21109 21.2364 1.18366 21.0425 1.21191 20.8527C1.2403 20.6627 1.32336 20.4844 1.4502 20.34L3.50977 17.9699C3.65977 17.7999 3.6798 17.5496 3.5498 17.3596C2.3606 15.4863 1.82794 13.2708 2.03613 11.0617C2.24434 8.85254 3.18182 6.77552 4.7002 5.15741C6.21866 3.53928 8.23227 2.47226 10.4238 2.12421Z" fill="currentColor"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_66_360">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <div class="text-container">
                                    <h3>Can't submit reviews on this platform.</h3>
                                    <p>Open Shop Archives on a desktop device to submit reviews.</p>
                                </div>
                            `;
                        } else if (currentUserData) {

                            let hasReviewAlready;

                            categoryModalInfo.reviews.forEach(review => {
                                if (review.user.id === currentUserData.id) {
                                    hasReviewAlready = true;
                                }
                            });

                            if (currentUserData.banned === true || settingsStore.staff_simulate_banned === 1 || currentUserData.types?.guidelines_block === true || settingsStore.staff_simulate_guidelines_block === 1 || currentUserData.types?.suspicious_account === true || settingsStore.staff_simulate_sus_block === 1) {

                                let banTitle = 'You have been suspended from submitting reviews.';
                                let banDisclaimer = `
                                    <p>You have violated our</p>
                                    <a class="link" href="https://yapper.shop/legal-information/?page=tos">Terms of Service</a>
                                    <p>and can no longer submit reviews.</p>
                                    <a class="link" href="https://yapper.shop/bans-and-suspensions">Learn More</a>
                                `;
                                let appealable = true;

                                if (currentUserData.banned === true || settingsStore.staff_simulate_banned === 1) {
                                    banTitle = 'You have been permanently banned from submitting reviews.';
                                    banDisclaimer = `
                                        <p>You have violated our</p>
                                        <a class="link" href="https://yapper.shop/legal-information/?page=tos">Terms of Service</a>
                                        <p>and can no longer submit reviews. This ban cannot be appealed.</p>
                                    `;
                                    appealable = false;
                                }

                                if (currentUserData.types?.guidelines_block === true || settingsStore.staff_simulate_guidelines_block === 1) {
                                    banTitle = 'You cannot submit reviews.';
                                    banDisclaimer = `
                                        <p>Your username violates our</p>
                                        <a class="link" href="https://yapper.shop/legal-information/?page=tos">Community Guidelines,</a>
                                        <p>all your reviews have been temporarily hidden from the public.</p>
                                    `;
                                    appealable = false;
                                }

                                if (currentUserData.types?.suspicious_account === true || settingsStore.staff_simulate_sus_block === 1) {
                                    banTitle = 'You cannot submit reviews.';
                                    banDisclaimer = `
                                        <p>Suspicious activity has been detected on your account, you cannot submit review temporarily.</p>
                                    `;
                                    appealable = false;
                                }

                                reviewInputContainer.classList.add('banned');
                                reviewInputContainer.innerHTML = `
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_66_360)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0939 13.525C18.4939 12.825 19.5239 12.825 19.9139 13.525L23.8739 20.425C24.2539 21.085 23.7539 21.895 22.9639 21.895H15.0439C14.2539 21.895 13.7439 21.085 14.1339 20.415L18.0939 13.515V13.525ZM18.5539 15.395H19.4539C19.7539 15.395 19.9739 15.655 19.9539 15.945L19.7339 17.965C19.7239 18.125 19.5639 18.225 19.4039 18.195C19.1401 18.1391 18.8676 18.1391 18.6039 18.195C18.4439 18.225 18.2839 18.125 18.2739 17.965L18.0639 15.945C18.0569 15.8753 18.0646 15.8048 18.0866 15.7383C18.1085 15.6717 18.1443 15.6105 18.1914 15.5587C18.2386 15.5068 18.2961 15.4654 18.3603 15.4372C18.4244 15.409 18.4938 15.3946 18.5639 15.395H18.5539ZM19.0039 20.895C19.2691 20.895 19.5235 20.7896 19.711 20.6021C19.8985 20.4146 20.0039 20.1602 20.0039 19.895C20.0039 19.6298 19.8985 19.3754 19.711 19.1879C19.5235 19.0004 19.2691 18.895 19.0039 18.895C18.7387 18.895 18.4843 19.0004 18.2968 19.1879C18.1092 19.3754 18.0039 19.6298 18.0039 19.895C18.0039 20.1602 18.1092 20.4146 18.2968 20.6021C18.4843 20.7896 18.7387 20.895 19.0039 20.895Z" fill="currentColor"/>
                                    <path d="M10.4238 2.12421C12.6154 1.77616 14.8606 2.1665 16.8057 3.23456C18.7507 4.30263 20.2856 5.98766 21.168 8.02362C22.0095 9.96556 22.2098 12.1215 21.749 14.1818L20.2764 11.7082C19.7305 10.764 18.2893 10.7639 17.7295 11.7082V11.6945L12.1875 21.0031C11.9898 21.3304 11.9593 21.6822 12.0508 21.9982C12.0339 21.9983 12.0169 22.0002 12 22.0002H2.2002C2.00802 21.9999 1.8196 21.9444 1.6582 21.84C1.49684 21.7357 1.36915 21.5864 1.29004 21.4113C1.21109 21.2364 1.18366 21.0425 1.21191 20.8527C1.2403 20.6627 1.32336 20.4844 1.4502 20.34L3.50977 17.9699C3.65977 17.7999 3.6798 17.5496 3.5498 17.3596C2.3606 15.4863 1.82794 13.2708 2.03613 11.0617C2.24434 8.85254 3.18182 6.77552 4.7002 5.15741C6.21866 3.53928 8.23227 2.47226 10.4238 2.12421Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_66_360">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    <div class="text-container">
                                        <h3>${banTitle}</h3>
                                        <div class="desc-container">${banDisclaimer}</div>
                                    </div>
                                    <button class="log-in-with-discord-button ${appealable ? '' : 'hidden'}">
                                        Appeal Suspension
                                    </button>
                                `;
                            } else if (categoryModalInfo.reviews_disabled === true) {
                                reviewInputContainer.classList.add('normal');
                                reviewInputContainer.innerHTML = `
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_66_360)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0939 13.525C18.4939 12.825 19.5239 12.825 19.9139 13.525L23.8739 20.425C24.2539 21.085 23.7539 21.895 22.9639 21.895H15.0439C14.2539 21.895 13.7439 21.085 14.1339 20.415L18.0939 13.515V13.525ZM18.5539 15.395H19.4539C19.7539 15.395 19.9739 15.655 19.9539 15.945L19.7339 17.965C19.7239 18.125 19.5639 18.225 19.4039 18.195C19.1401 18.1391 18.8676 18.1391 18.6039 18.195C18.4439 18.225 18.2839 18.125 18.2739 17.965L18.0639 15.945C18.0569 15.8753 18.0646 15.8048 18.0866 15.7383C18.1085 15.6717 18.1443 15.6105 18.1914 15.5587C18.2386 15.5068 18.2961 15.4654 18.3603 15.4372C18.4244 15.409 18.4938 15.3946 18.5639 15.395H18.5539ZM19.0039 20.895C19.2691 20.895 19.5235 20.7896 19.711 20.6021C19.8985 20.4146 20.0039 20.1602 20.0039 19.895C20.0039 19.6298 19.8985 19.3754 19.711 19.1879C19.5235 19.0004 19.2691 18.895 19.0039 18.895C18.7387 18.895 18.4843 19.0004 18.2968 19.1879C18.1092 19.3754 18.0039 19.6298 18.0039 19.895C18.0039 20.1602 18.1092 20.4146 18.2968 20.6021C18.4843 20.7896 18.7387 20.895 19.0039 20.895Z" fill="currentColor"/>
                                    <path d="M10.4238 2.12421C12.6154 1.77616 14.8606 2.1665 16.8057 3.23456C18.7507 4.30263 20.2856 5.98766 21.168 8.02362C22.0095 9.96556 22.2098 12.1215 21.749 14.1818L20.2764 11.7082C19.7305 10.764 18.2893 10.7639 17.7295 11.7082V11.6945L12.1875 21.0031C11.9898 21.3304 11.9593 21.6822 12.0508 21.9982C12.0339 21.9983 12.0169 22.0002 12 22.0002H2.2002C2.00802 21.9999 1.8196 21.9444 1.6582 21.84C1.49684 21.7357 1.36915 21.5864 1.29004 21.4113C1.21109 21.2364 1.18366 21.0425 1.21191 20.8527C1.2403 20.6627 1.32336 20.4844 1.4502 20.34L3.50977 17.9699C3.65977 17.7999 3.6798 17.5496 3.5498 17.3596C2.3606 15.4863 1.82794 13.2708 2.03613 11.0617C2.24434 8.85254 3.18182 6.77552 4.7002 5.15741C6.21866 3.53928 8.23227 2.47226 10.4238 2.12421Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_66_360">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    <div class="text-container">
                                        <h3>Reviews disabled.</h3>
                                        <p>You cannot review this category.</p>
                                    </div>
                                `;
                            } else {
                                reviewInputContainer.innerHTML = `
                                    <div id="star-rating" class="stars">
                                        <svg class="has-tooltip" data-tooltip="1 Star" data-value="1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="currentColor" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"/></svg>
                                        <svg class="has-tooltip" data-tooltip="2 Stars" data-value="2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="currentColor" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"/></svg>
                                        <svg class="has-tooltip" data-tooltip="3 Stars" data-value="3" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="currentColor" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"/></svg>
                                        <svg class="has-tooltip" data-tooltip="4 Stars" data-value="4" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="currentColor" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"/></svg>
                                        <svg class="has-tooltip" data-tooltip="5 Stars" data-value="5" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="currentColor" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"/></svg>
                                    </div>

                                    <svg class="review-specific-item-button has-tooltip" data-tooltip="Choose Item to review" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="24" r="6" fill="currentColor"></circle>
                                        <circle cx="12" cy="72" r="6" fill="currentColor"></circle>
                                        <circle cx="12" cy="48" r="6" fill="currentColor"></circle>
                                        <rect x="28" y="20" width="60" height="8" rx="4" fill="currentColor"></rect>
                                        <path d="M72.124 44.0029C64.5284 44.0668 57.6497 47.1046 52.6113 52H32C29.7909 52 28 50.2091 28 48C28 45.7909 29.7909 44 32 44H72C72.0415 44 72.0828 44.0017 72.124 44.0029Z" fill="currentColor"></path>
                                        <path d="M44.2852 68C44.0983 69.3065 44 70.6418 44 72C44 73.3582 44.0983 74.6935 44.2852 76H32C29.7909 76 28 74.2091 28 72C28 69.7909 29.7909 68 32 68H44.2852Z" fill="currentColor"></path>
                                        <circle cx="72" cy="72" r="16" stroke="currentColor" stroke-width="8"></circle>
                                        <rect x="81" y="85.9497" width="7" height="16" rx="3.5" transform="rotate(-45 81 85.9497)" fill="currentColor"></rect>
                                    </svg>

                                    <p class="specific-item-name hidden">Reviewing Item</p>
                                    <input class="hidden" autocomplete="off" id="specific-item-id" placeholder="specific-item-id">

                                    <input autocomplete="off" id="write-review-post-input" placeholder="Write a review for ${categoryData.name}...">
                                    <p class="write-review-text-limit">200</p>
                                    <svg class="review-send-icon has-tooltip" data-tooltip="Submit Review" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6.6 10.02 14 11.4a.6.6 0 0 1 0 1.18L6.6 14l-2.94 5.87a1.48 1.48 0 0 0 1.99 1.98l17.03-8.52a1.48 1.48 0 0 0 0-2.64L5.65 2.16a1.48 1.48 0 0 0-1.99 1.98l2.94 5.88Z" class=""></path></svg>
                                `;
                                if (hasReviewAlready) {
                                    reviewInputContainer.querySelector('#write-review-post-input').placeholder = `Edit review for ${categoryData.name}...`
                                }
                            }
                        
                            const reviewInput = modalInner.querySelector('#write-review-post-input');
                            const specificItemID = modalInner.querySelector('#specific-item-id');
                            const specificItemChoose = modalInner.querySelector('.review-specific-item-button');
                            const reviewSendIcon = modalInner.querySelector('.review-send-icon');
                            const errorOutput = modalInner.querySelector('.write-review-disclaimer-error');

                            if (experimentIs('review_specific_item', 1)) {
                            } else {
                                specificItemChoose.classList.add('hidden')
                            }


                            specificItemChoose.addEventListener("click", async () => {
                                openModal('choose-item-to-review-modal', 'categoryPickItemToReview', categoryData)
                            });

                            const input = reviewInput;
                            const counter = modalInner.querySelector('.write-review-text-limit');
                            let maxLength = 200;

                            if (counter) {

                                function updateCounter() {
                                    const currentLength = input.value.length;
                                    const remaining = maxLength - currentLength;

                                    counter.textContent = remaining;

                                    // Remove all classes first
                                    counter.classList.remove('warning', 'danger');
                                    input.classList.remove('limit-reached');

                                    // Add appropriate styling based on remaining characters
                                    if (remaining <= 0) {
                                        counter.classList.add('danger');
                                        input.classList.add('limit-reached');
                                    } else if (remaining <= 20) {
                                        counter.classList.add('warning');
                                    }
                                }

                                // Update counter on input
                                input.addEventListener('input', updateCounter);

                                // Prevent typing when limit is reached
                                input.addEventListener('keydown', function(e) {
                                    const currentLength = input.value.length;

                                    // Allow backspace, delete, tab, escape, enter, and arrow keys
                                    if ([8, 9, 27, 13, 46, 37, 38, 39, 40].includes(e.keyCode) ||
                                        // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z
                                        (e.ctrlKey && [65, 67, 86, 88, 90].includes(e.keyCode))) {
                                        return;
                                    }

                                    // Prevent typing if at max length
                                    if (currentLength >= maxLength) {
                                        e.preventDefault();
                                    }
                                });

                                updateCounter();
                            }



                            if (reviewSendIcon) {
                                reviewSendIcon.addEventListener("click", function () {
                                    reviewPostHandle();
                                });
                            }

                            const stars = modalInner.querySelectorAll('#star-rating svg');
                            let selectedRating = 0;

                            stars.forEach(star => {
                                star.addEventListener('click', () => {
                                    selectedRating = parseInt(star.getAttribute('data-value'));
                                    stars.forEach(star => {
                                        const value = parseInt(star.getAttribute('data-value'));
                                        star.classList.toggle('filled', value <= selectedRating);
                                    });
                                });
                            });

                            async function reviewPostHandle() {
                                errorOutput.textContent = '';
                                const domainRegex = /\b[a-zA-Z0-9-]+\.[a-zA-Z]{2,}\b/;

                                if (selectedRating === 0) {
                                    errorOutput.textContent = 'Rating must be 1-5 stars';
                                } else if (domainRegex.test(reviewInput.value)) {
                                    errorOutput.textContent = 'Reviews cannot contain Links or Domains';
                                } else {
                                    const status = await postReview(categoryData.sku_id, selectedRating, reviewInput.value.trim(), specificItemID.value);

                                    if (status.status) {
                                        errorOutput.textContent = `${status.status}, ${status.error}`;
                                    } else {
                                        await fetchCategoryData();
                                        fetchAndRenderReviews();
                                        refreshReviewBar();
                                    }
                                }
                            }

                        } else {
                            reviewInputContainer.classList.add('normal');
                            reviewInputContainer.innerHTML = `
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 22C14.2189 21.9983 16.3744 21.2585 18.1268 19.8972C19.8792 18.5359 21.129 16.6304 21.6795 14.4807C22.23 12.3311 22.0498 10.0594 21.1674 8.02335C20.285 5.98732 18.7504 4.30264 16.8053 3.23457C14.8602 2.16651 12.6151 1.77574 10.4236 2.12379C8.23202 2.47185 6.21848 3.53896 4.70001 5.15709C3.18155 6.77522 2.24443 8.85245 2.03621 11.0617C1.82799 13.2709 2.36051 15.4867 3.54991 17.36C3.67991 17.55 3.65991 17.8 3.50991 17.97L1.44991 20.34C1.32307 20.4844 1.24052 20.6623 1.21214 20.8523C1.18376 21.0424 1.21074 21.2366 1.28987 21.4117C1.36899 21.5869 1.49691 21.7355 1.6583 21.8398C1.81969 21.9442 2.00773 21.9998 2.19991 22H11.9999Z" fill="currentColor"/>
                                </svg>
                                <div class="text-container">
                                    <h3>Login with Discord to submit reviews.</h3>
                                </div>
                                <button class="log-in-with-discord-button" onclick="loginWithDiscord();">
                                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48.7541 12.511C45.2046 10.8416 41.4614 9.66246 37.6149 9C37.0857 9.96719 36.6081 10.9609 36.1822 11.9811C32.0905 11.3451 27.9213 11.3451 23.8167 11.9811C23.3908 10.9609 22.9132 9.96719 22.384 9C18.5376 9.67571 14.7815 10.8549 11.2319 12.5243C4.18435 23.2297 2.27404 33.67 3.2292 43.9647C7.35961 47.0915 11.9805 49.4763 16.8854 51C17.9954 49.4763 18.9764 47.8467 19.8154 46.1508C18.2149 45.5413 16.6789 44.7861 15.2074 43.8984C15.5946 43.6069 15.969 43.3155 16.3433 43.024C24.9913 47.1975 35.0076 47.1975 43.6557 43.024C44.03 43.3287 44.4043 43.6334 44.7915 43.8984C43.3201 44.7861 41.7712 45.5413 40.1706 46.164C41.0096 47.8599 41.9906 49.4763 43.1006 51C48.0184 49.4763 52.6393 47.1047 56.7697 43.9647C57.8927 32.0271 54.8594 21.6927 48.7412 12.511H48.7541ZM21.0416 37.6315C18.3827 37.6315 16.1755 35.1539 16.1755 32.1066C16.1755 29.0593 18.2923 26.5552 21.0287 26.5552C23.7651 26.5552 25.9465 29.0593 25.8949 32.1066C25.8432 35.1539 23.7522 37.6315 21.0416 37.6315ZM38.9831 37.6315C36.3113 37.6315 34.1299 35.1539 34.1299 32.1066C34.1299 29.0593 36.2467 26.5552 38.9831 26.5552C41.7195 26.5552 43.888 29.0593 43.8364 32.1066C43.7847 35.1539 41.6937 37.6315 38.9831 37.6315Z" fill="white"/>
                                    </svg>
                                    Login with Discord
                                </button>
                            `;
                        }
                    }

                    refreshReviewBar();

                    const reviewsContainer = modalInner.querySelector('.category-modal-reviews-container');

                    async function fetchAndRenderReviews() {
                        reviewsContainer.innerHTML = ``;
                        if (Array.isArray(categoryModalInfo.reviews) && categoryModalInfo.reviews.length != 0) {
                            categoryModalInfo.reviews.forEach(review => {
                                let reviewDiv = document.createElement("div");
                                reviewDiv.classList.add('category-modal-review-container');
            
                                if (review.flag !=+ 0 && review.user.id !=+ currentUserData?.id) {
                                    reviewDiv.innerHTML = `
                                        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z" class=""></path>
                                            <path fill="currentColor" d="M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z" class=""></path>
                                            <path fill="currentColor" d="M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z" class=""></path>
                                        </svg>
                                        <p class="review-text-content">This review has been censored due to sensitive content.</p>
                                        <div style="flex: 1;"></div>
                                        <button class="generic-button brand">
                                            Show
                                        </button>
                                    `;
                                    reviewDiv.style.display = 'inline-flex';
                                    reviewDiv.style.gap = '3px';
                                    reviewDiv.style.alignItems = 'center';
                                    reviewDiv.querySelector('.generic-button').addEventListener("click", function () {
                                        revealReview();
                                        reviewDiv.style.display = 'unset';
                                        reviewDiv.style.alignItems = 'unset';
                                    });
                                    if (!currentUserData) reviewDiv.querySelector('.generic-button').remove();
                                } else {
                                    revealReview();
                                }

                                async function revealReview() {
                                    if (review.system && review.system !== 0) {
                                        const type = reviews_system_types.find(type => type.id === review.system).codename;
                                        reviewDiv.style.backgroundColor = `var(--bg-feedback-${type})`;
                                        reviewDiv.classList.add(`bg-feedback-${type}`);
                                    }
                                    reviewDiv.innerHTML = `
                                        <div class="shop-modal-review-moderation-buttons"></div>
                                        <div class="review-nameplate-container"></div>
                                        <div class="review-user-container">
                                            <div class="review-avatar-container">
                                                <img class="review-avatar" src="https://cdn.yapper.shop/assets/31.png" onerror="this.parentElement.remove();">
                                                <img class="review-avatar-decoration" src="https://cdn.yapper.shop/assets/31.png">
                                            </div>

                                            <p class="review-user-display-name"></p>

                                            <div class="review-system-tag-container has-tooltip" data-tooltip="Official Shop Archives Message">
                                                <p class="review-system-tag">SYSTEM</p>
                                            </div>

                                            <div class="review-server-tag-container">
                                                <img class="server-tag-img" src="https://cdn.yapper.shop/assets/31.png">
                                                <p class="server-tag-title"></p>
                                            </div>

                                            <div class="review-badges-container-container">
                                                <div class="review-badges-container">
                                                </div>
                                            </div>

                                            <div class="review-rating-container">
                                                <div class="possible-stars">

                                                </div>
                                                <div class="star-rating">

                                                </div>
                                            </div>

                                            <div class="review-date-container">
                                                <p class="inv">today</p>
                                                <p class="review-date">today</p>
                                            </div>

                                        </div>
                                        <p class="review-text-content"></p>
                                        <div class="review-specific-item-container"></div>
                                    `;

                                    reviewDiv.querySelector('.review-user-display-name').classList.add('clickable');
                                    reviewDiv.querySelector('.review-user-display-name').addEventListener("click", function () {
                                        openModal('user-modal', 'openUserModal', review.user.id);
                                    });

                                    const date = new Date(review.created_at);

                                    const day = String(date.getDate()).padStart(2, '0');
                                    const month = String(date.getMonth() + 1).padStart(2, '0');
                                    const year = date.getFullYear();

                                    const dateContainer = reviewDiv.querySelector(".review-date-container");

                                    let formatted = `${day}/${month}/${year}`;

                                    if (settingsStore.us_time_format === 1) {
                                        formatted = `${month}/${day}/${year}`;
                                    }

                                    dateContainer.querySelector('.review-date').textContent = `${formatted}`;
                                    dateContainer.querySelector('.inv').textContent = `${formatted}`;

                                    if (currentUserData?.id === review.user.id || currentUserData?.admin_level >= 1) {
                                        let deleteReviewIcon = document.createElement("div");

                                        deleteReviewIcon.innerHTML = `
                                            <svg class="modalv2_top_icon has-tooltip" data-tooltip="Delete Review" style="color: var(--color-red);" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" clip-rule="evenodd" class=""></path></svg>
                                        `;

                                        deleteReviewIcon.addEventListener("click", function () {
                                            reviewDeleteHandle();
                                        });

                                        async function reviewDeleteHandle() {
                                            const status = await deleteReviewById(review.id);

                                            if (status.failed) {
                                            } else {
                                                await fetchCategoryData();
                                                fetchAndRenderReviews();
                                                refreshReviewBar();
                                            }
                                        }

                                        reviewDiv.querySelector(".shop-modal-review-moderation-buttons").appendChild(deleteReviewIcon);
                                    }

                                    if (review.flag !== 0 && review.user.id === currentUserData?.id) {
                                        let hiddenReviewIcon = document.createElement("div");

                                        hiddenReviewIcon.style.height = '20px';
                                        hiddenReviewIcon.classList.add('rawicon');
                                        hiddenReviewIcon.innerHTML = `
                                            <svg class="has-tooltip" data-tooltip="This review has been flagged as sensitive and may be hidden to some users" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z" class=""></path>
                                                <path fill="currentColor" d="M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z" class=""></path>
                                                <path fill="currentColor" d="M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z" class=""></path>
                                            </svg>
                                        `;

                                        reviewDiv.querySelector(".review-user-container").appendChild(hiddenReviewIcon);
                                    } else if (review.flag !== 0) {
                                        let hiddenReviewIcon = document.createElement("div");

                                        hiddenReviewIcon.style.height = '20px';
                                        hiddenReviewIcon.classList.add('rawicon');
                                        hiddenReviewIcon.innerHTML = `
                                            <svg class="has-tooltip" data-tooltip="This review has been flagged as sensitive" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z" class=""></path>
                                                <path fill="currentColor" d="M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z" class=""></path>
                                                <path fill="currentColor" d="M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z" class=""></path>
                                            </svg>
                                        `;

                                        reviewDiv.querySelector(".review-user-container").appendChild(hiddenReviewIcon);
                                    }

                                    if (review.pinned && review.pinned === true) {
                                        let pinnedReviewIcon = document.createElement("div");

                                        pinnedReviewIcon.style.height = '20px';
                                        pinnedReviewIcon.classList.add('rawicon');
                                        pinnedReviewIcon.innerHTML = `
                                            <svg class="has-tooltip" data-tooltip="This review is pinned" x="0" y="0" class="icon__9293f" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z" class=""></path>
                                            </svg>
                                        `;

                                        reviewDiv.querySelector(".review-user-container").appendChild(pinnedReviewIcon);
                                    }
    
                                    if (review.user.avatar) {
    
                                        const avatarPreview = reviewDiv.querySelector('.review-avatar');
                                        const container = reviewDiv.querySelector('.review-avatar-container');
    
                                        avatarPreview.src = 'https://cdn.discordapp.com/avatars/'+review.user.id+'/'+review.user.avatar+'.webp?size=128';

                                        avatarPreview.addEventListener("load", () => {
                                            if (avatarPreview.naturalWidth === 0 || avatarPreview.naturalHeight === 0) {
                                                container.remove();
                                            }
                                        });
                                        
                                        avatarPreview.addEventListener("error", () => {
                                            container.remove();
                                        });
    
                                        if (review.user.avatar.includes('a_')) {
                                            reviewDiv.addEventListener("mouseenter", () => {
                                                avatarPreview.src = 'https://cdn.discordapp.com/avatars/'+review.user.id+'/'+review.user.avatar+'.gif?size=128';
                                            });
                                            reviewDiv.addEventListener("mouseleave", () => {
                                                avatarPreview.src = 'https://cdn.discordapp.com/avatars/'+review.user.id+'/'+review.user.avatar+'.webp?size=128';
                                            });
                                        }
    
                                    } else {
                                        reviewDiv.querySelector('.review-avatar-container').remove();
                                    }

                                    if (!review.user.system) {
                                        reviewDiv.querySelector('.review-system-tag-container').remove();
                                    }
    
                                    if (review.user.avatar_decoration?.asset) {
    
                                        const decoPreview = reviewDiv.querySelector('.review-avatar-decoration');
    
                                        decoPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${review.user.avatar_decoration.asset}.png?size=4096&passthrough=false`;
    
                                        reviewDiv.addEventListener("mouseenter", () => {
                                            decoPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${review.user.avatar_decoration.asset}.png?size=4096&passthrough=true`;
                                        });
                                        reviewDiv.addEventListener("mouseleave", () => {
                                            decoPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${review.user.avatar_decoration.asset}.png?size=4096&passthrough=false`;
                                        });
    
                                    }
    
                                    const serverTagAsset = reviewDiv.querySelector('.review-server-tag-container');
    
                                    if (review.user.guild_tag) {
    
                                        serverTagAsset.querySelector('.server-tag-img').src = `https://cdn.discordapp.com/clan-badges/${review.user.guild_tag.id}/${review.user.guild_tag.badge}.png?size=24`;
    
                                        serverTagAsset.querySelector('.server-tag-title').textContent = review.user.guild_tag.tag;
    
                                    } else {
                                        serverTagAsset.remove();
                                    }
    
                                    const userBadgesElement = reviewDiv.querySelector('.review-badges-container-container');
                                    const userBadgesInnerElement = reviewDiv.querySelector('.review-badges-container');
    
                                    if (Array.isArray(review.user.badges) && review.user.badges.length != 0) {
                                        review.user.badges.forEach(badge => {
                                            const badgeImg = document.createElement("img");
                                            badgeImg.src = `https://cdn.yapper.shop/assets/badges/${badge.id}.png`;
                                            badgeImg.setAttribute('data-tooltip', badge.name);
                                            badgeImg.classList.add("badge");
                                            badgeImg.classList.add("has-tooltip");

                                            if (badge.redirect) {
                                                const badgeLink = document.createElement("a");
                                                badgeLink.href = badge.redirect;
                                                badgeLink.target = "_blank";
                                                badgeLink.rel = "noopener noreferrer";
                                                badgeLink.appendChild(badgeImg);
                                                userBadgesInnerElement.appendChild(badgeLink);
                                            } else {
                                                userBadgesInnerElement.appendChild(badgeImg);
                                            }
                                        });
                                    } else {
                                        userBadgesElement.remove();
                                    }
    
                                    if (review.user.nameplate) {
                                        if (review.user.nameplate.sa_override_src) {
                                            let nameplatePreview = document.createElement("img");

                                            nameplatePreview.src = review.user.nameplate.sa_override_src;
    
                                            reviewDiv.querySelector('.review-nameplate-container').appendChild(nameplatePreview);
                                        } else {
                                            let nameplatePreview = document.createElement("video");

                                            nameplatePreview.src = `https://cdn.discordapp.com/assets/collectibles/${review.user.nameplate.asset}asset.webm`;
                                            nameplatePreview.disablePictureInPicture = true;
                                            nameplatePreview.muted = true;
                                            nameplatePreview.loop = true;
                                            nameplatePreview.playsInline = true;
    
                                            reviewDiv.addEventListener("mouseenter", () => {
                                                nameplatePreview.play();
                                            });
                                            reviewDiv.addEventListener("mouseleave", () => {
                                                nameplatePreview.pause();
                                            });

                                            const bgcolor = nameplate_palettes[review.user.nameplate.palette].darkBackground;
    
                                            reviewDiv.querySelector('.review-nameplate-container').style.backgroundImage = `linear-gradient(90deg, #00000000 0%, ${bgcolor} 200%)`;
    
                                            reviewDiv.querySelector('.review-nameplate-container').appendChild(nameplatePreview);
                                        }
                                    }
    
                                    if (review.rating != null) {
                                        for (let i = 0; i < 5; i++) {
                                            let starRate = document.createElement("div");
                                            starRate.innerHTML = `
                                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#575757" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"/></svg>
                                            `;
                                            reviewDiv.querySelector('.possible-stars').appendChild(starRate);
                                        }
        
                                        for (let i = 0; i < review.rating; i++) {
                                            let starRate = document.createElement("div");
                                            starRate.innerHTML = `
                                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFEC3E" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"/></svg>
                                            `;
                                            reviewDiv.querySelector('.star-rating').appendChild(starRate);
                                        }
                                    }

                                    async function fetchReviewProductData(id) {
                                        const res = await fetch(APIV4 + endpnts.PRODUCT + id);
                                        if (!res.ok) return;
                                        const data = await res.json();

                                        if (data.message) {
                                            console.error(data);
                                        } else {
                                            return data;
                                        }
                                    }

                                    reviewDiv.querySelector('.review-text-content').textContent = review.content;
                                    const rsic = reviewDiv.querySelector('.review-specific-item-container')
                                    if (review.item_id) {
                                        rsic.innerHTML = `
                                            <p class="name">Loading...</p>
                                        `;
                                        const item = await fetchReviewProductData(review.item_id);
                                        rsic.innerHTML = `
                                            <p class="name">${item.name}</p>
                                            <img src="">
                                            <p class="sub">Click to Open</p>
                                        `;
                                        const objImg = rsic.querySelector('img');
                                        if (item.type === item_types.AVATAR_DECORATION) {
                                            Object.assign(objImg.style, {
                                                width: '50px',
                                                height: '50px'
                                            });
                                            objImg.src = item.items[0].assets ? item.items[0].assets.static_image_url : `https://cdn.discordapp.com/avatar-decoration-presets/${item.items[0].asset}.png?size=4096&passthrough=false`;
                                        }
                                        else if (item.type === item_types.NAMEPLATE) {
                                            Object.assign(objImg.style, {
                                                height: '50px'
                                            });
                                            objImg.src = item.items[0].assets ? item.items[0].assets.static_image_url : `https://cdn.discordapp.com/assets/collectibles/${item.items[0].asset}static.png`;
                                        }
                                        else {
                                            objImg.remove();
                                        }
                                        rsic.addEventListener("click", async () => {
                                            openModal('modalv2', 'collectibleCardFromReview', categoryData, item);
                                        });
                                        rsic.classList.add('clickable');
                                    } else {
                                        rsic.remove();
                                    }


                                    const displayName = reviewDiv.querySelector('.review-user-display-name');
                                    displayName.textContent = review.user.global_name ? review.user.global_name : review.user.username;
                                    if (review.user.display_name_styles && experimentIs('display_name_style_render', 1)) {
                                        const dns = renderDisplayNameStyle(review.user.display_name_styles);
                                        displayName.classList.add(dns.class);
                                        Object.assign(displayName.style, dns.style);

                                        if (review.user.display_name_styles.id === 2) {
                                            displayName.classList.add('dns-gradient-type-2');
                                        }
                                    }
                                }
                                
                                if (review.pinned && review.pinned === true) {
                                    reviewsContainer.insertBefore(reviewDiv, reviewsContainer.firstChild);
                                } else {
                                    reviewsContainer.appendChild(reviewDiv);
                                }
                            });
                        } else {
                            let reviewDiv = document.createElement("div");
            
                            reviewDiv.classList.add('category-modal-review-container');
                            reviewDiv.style.backgroundColor = 'var(--bg-feedback-info)';
                            reviewDiv.innerHTML = `
                                <p class="review-text-content">This category currently has no reviews.</p>
                            `;

                            if (categoryModalInfo.reviews_disabled === true) {
                            } else if (currentUserData && currentUserData.banned === false) {
                                reviewDiv.querySelector('.review-text-content').textContent = 'This category currently has no reviews. You could be the first!';
                            } else if (currentUserData && currentUserData.banned === true) {
                            } else if (isMobileCache) {
                                reviewDiv.querySelector('.review-text-content').textContent = 'This category currently has no reviews. Open Shop Archives on a desktop device to submit reviews!';
                            } else {
                                reviewDiv.querySelector('.review-text-content').textContent = 'This category currently has no reviews. Login with Discord and you could be the first!';
                            }

            
                            reviewsContainer.appendChild(reviewDiv);
                        }
                    }

                    fetchAndRenderReviews();

                } else if (tab === '5') {
                    modalInner.innerHTML = `
                        <div class="category-modal-xp-rewards-container">
                        </div>
                    `;
                    usersXPEventsCache.forEach(promo => {
                        let promoCard = document.createElement("div");

                        if (promo.category_data?.sku_id === categoryData.sku_id && promo.already_claimed != true) {

                            promoCard.classList.add('category-modal-xp-reward');
                            promoCard.classList.add('unclaimed');

                            promoCard.innerHTML = `
                                <div id="xp-event-expires-at"></div>
                                <h3>Claim your free ${promo.xp_reward.toLocaleString()} XP!</h3>
                                <p class="desc">You have ${promo.xp_reward.toLocaleString()} XP waiting for you.</p>
                                <button id="claim-xp-button">
                                    Claim
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 0L17.1462 9.85378L27 13.5L17.1462 17.1462L13.5 27L9.85378 17.1462L0 13.5L9.85378 9.85378L13.5 0Z" fill="currentColor"></path>
                                    </svg>
                                    ${promo.xp_reward.toLocaleString()}
                                </button>
                            `;

                            promoCard.querySelector('#claim-xp-button').addEventListener('click', () => {
                                openModal('modalv2', 'xpRedeem', promo.claimable_id, changeModalTab);
                            });

                            const expiresAt = new Date(promo.expires_at);
                    
                            if (promo.expires_at && !isNaN(expiresAt.getTime())) {
                            
                                function updateTimer() {
                                    const now = new Date();
                                    const timeDiff = expiresAt - now;
                                
                                    if (timeDiff <= 0) {
                                        if (settingsStore.staff_show_unpublished_xp_events) {
                                            promoCard.querySelector('#xp-event-expires-at').innerHTML = `
                                                <p class="xp-event-expires-at-text">EXPIRED</p>
                                            `;
                                        } else {
                                            promoCard.classList.remove('unclaimed');
                                            promoCard.innerHTML = `
                                                <div id="xp-event-expires-at">
                                                    <p class="xp-event-expires-at-text">EXPIRED</p>
                                                </div>
                                                <h3>Event Expired!</h3>
                                                <p class="desc">You missed out on ${promo.xp_reward.toLocaleString()} XP.</p>
                                            `;
                                        }
                                        clearInterval(timerInterval);
                                    } else {
                                        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                                        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                                        const date = `ENDS IN ${days}d ${hours}h ${minutes}m ${seconds}s`;

                                        renderedDate = date.replace(" 0d 0h 0m", "").replace(" 0d 0h", "").replace(" 0d", "")

                                        promoCard.querySelector('#xp-event-expires-at').innerHTML = `
                                            <p class="xp-event-expires-at-text">${renderedDate}</p>
                                        `;
                                    }
                                }
                            
                                const timerInterval = setInterval(updateTimer, 1000);
                                updateTimer();
                            }

                            modalInner.querySelector('.category-modal-xp-rewards-container').appendChild(promoCard)
                        } else if (promo.category_data?.sku_id === categoryData.sku_id && promo.already_claimed === true) {

                            promoCard.classList.add('category-modal-xp-reward');

                            promoCard.innerHTML = `
                                <div id="xp-event-expires-at"></div>
                                <h3>Already Claimed.</h3>
                                <p class="desc">You already claimed this event reward for ${promo.xp_reward.toLocaleString()} XP.</p>
                            `;

                            const expiresAt = new Date(promo.expires_at);
                    
                            if (promo.expires_at && !isNaN(expiresAt.getTime())) {
                            
                                function updateTimer() {
                                    const now = new Date();
                                    const timeDiff = expiresAt - now;
                                
                                    if (timeDiff <= 0) {
                                        if (settingsStore.staff_show_unpublished_xp_events) {
                                            promoCard.querySelector('#xp-event-expires-at').innerHTML = `
                                                <p class="xp-event-expires-at-text">EXPIRED</p>
                                            `;
                                        } else {
                                            promoCard.innerHTML = `
                                                <div id="xp-event-expires-at">
                                                    <p class="xp-event-expires-at-text">EXPIRED</p>
                                                </div>
                                                <h3>Event Expired!</h3>
                                                <p class="desc">You already claimed this event reward for ${promo.xp_reward.toLocaleString()} XP.</p>
                                            `;
                                        }
                                        clearInterval(timerInterval);
                                    } else {
                                        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                                        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                                        const date = `ENDS IN ${days}d ${hours}h ${minutes}m ${seconds}s`;

                                        renderedDate = date.replace(" 0d 0h 0m", "").replace(" 0d 0h", "").replace(" 0d", "")

                                        promoCard.querySelector('#xp-event-expires-at').innerHTML = `
                                            <p class="xp-event-expires-at-text">${renderedDate}</p>
                                        `;
                                    }
                                }
                            
                                const timerInterval = setInterval(updateTimer, 1000);
                                updateTimer();
                            }

                            modalInner.querySelector('.category-modal-xp-rewards-container').appendChild(promoCard)
                        }
                    });
                } else if (tab === '7') {
                    modalInner.innerHTML = `
                        <div class="add-category-fields-con">
                        this doesnt do anything yet
                            <div class="add-category-fields-fill">
                            </div>
                        </div>
                    `;
                    const app = modalInner.querySelector(".add-category-fields-fill");

                    function createSection(title) {
                        const div = document.createElement("div");
                        div.className = "section";
                        div.style.display = "flex";
                        div.style.flexDirection = "column";
                        div.style.gap = "10px";
                    
                        const h = document.createElement("h3");
                        h.textContent = title;
                    
                        div.appendChild(h);
                        return div;
                    }
                    
                    // Products
                    const productSection = createSection("Products");
                    const productList = document.createElement("div");
                    productList.className = "products";
                    productList.style.display = "flex";
                    productList.style.flexDirection = "column";
                    productList.style.gap = "10px";

                    const addBtn = document.createElement("button");
                    addBtn.textContent = "+ Add Product";
                    addBtn.className = "generic-button brand";

                    addBtn.onclick = () => addProduct("");

                    function addProduct(value) {
                        const row = document.createElement("div");
                        row.className = "product-item";
                        row.style.display = "flex";
                        row.style.gap = "10px";
                        row.style.marginBottom = "5px";

                        const input = document.createElement("input");
                        input.value = value;

                        // Move Up Button
                        const moveUp = document.createElement("button");
                        moveUp.textContent = "/\\";
                        moveUp.className = "generic-button primary";
                        moveUp.onclick = () => {
                            if (row.previousElementSibling) {
                                productList.insertBefore(row, row.previousElementSibling);
                            }
                        };
                    
                        // Move Down Button
                        const moveDown = document.createElement("button");
                        moveDown.textContent = "\\/";
                        moveDown.className = "generic-button primary";
                        moveDown.onclick = () => {
                            if (row.nextElementSibling) {
                                productList.insertBefore(row.nextElementSibling, row);
                            }
                        };
                    
                        const remove = document.createElement("button");
                        remove.textContent = "X";
                        remove.className = "generic-button red";
                        remove.onclick = () => row.remove();
                    
                        row.appendChild(input);
                        row.appendChild(moveUp);
                        row.appendChild(moveDown);
                        row.appendChild(remove);
                        productList.appendChild(row);
                    }

                    productSection.appendChild(productList);
                    productSection.appendChild(addBtn);
                    app.appendChild(productSection);

                    if (Array.isArray(categoryData.products)) {
                        categoryData.products.forEach(p => addProduct(p.sku_id));
                    }

                    const submitBtn = document.createElement("button");
                    submitBtn.textContent = "Submit";
                    submitBtn.className = "generic-button green";

                    submitBtn.onclick = async () => {
                        const data = {
                            assets: { id: {}, url: {} },
                            text_config: {},
                            products: []
                        };
                  
                        // // Base
                        // baseFields.forEach(f => {
                        //     data[f] = document.getElementById(f).value || "";
                        // });
                  
                        // // Assets ID
                        // assetsIdFields.forEach(f => {
                        //     const val = document.getElementById(`assets.id.${f}`).value.trim();
                        //     if (val) data.assets.id[f] = val;
                        // });
                  
                        // // Assets URL
                        // assetsUrlFields.forEach(f => {
                        //     const val = document.getElementById(`assets.url.${f}`).value.trim();
                        //     if (val) data.assets.url[f] = val;
                        // });
                  
                        // // Text config
                        // textConfigFields.forEach(f => {
                        //     const val = document.getElementById(`text_config.${f}`).value.trim();
                        //     if (val) data.text_config[f] = val;
                        // });
                  
                        // Products
                        document.querySelectorAll(".product-item input").forEach(i => {
                            if (i.value.trim()) data.products.push(i.value.trim());
                        });
                  
                        console.log("Sending:", data);
                  
                        if (SAVE_API_URL) {
                            await fetch(SAVE_API_URL, {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(data)
                            });
                        }
                    };

                    app.appendChild(submitBtn);

                } else {
                    modalInner.innerHTML = ``;
                }
            }
            window.changeModalTab = changeModalTab;

            if (Array.isArray(usersXPEventsCache)) {
                modal.querySelector('#category-modal-tab-5').classList.remove('hidden');
            }

            modal.querySelector('#category-modal-tab-1').addEventListener("click", function () {
                // Overview
                changeModalTab('1');
            });
            modal.querySelector('#category-modal-tab-2').addEventListener("click", function () {
                // Raw
                changeModalTab('2');
            });
            if (currentUserData?.admin_level === 3) {
                const tab = modal.querySelector('#category-modal-tab-7')
                tab.classList.remove('hidden');
                tab.addEventListener("click", function () {
                    changeModalTab('7');
                });
            }
            

            document.body.appendChild(modal);

            document.body.appendChild(modal_back);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_back.classList.add('show');
                });
            });

            document.body.appendChild(modal_loading);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_loading.classList.add('show');
                });
            });


            if (!categoryModalInfo) {
                await fetchCategoryData();
            }

            async function fetchCategoryData() {
                try {
                    const data = await fetchAPI.get(endpnts.CATEGORY + categoryData.sku_id + endpnts.REVIEWS);
                    categoryModalInfo = data;
                } catch(err) {
                    console.error(err);
                }
            }

            if (Array.isArray(usersXPEventsCache)) {
                const xpRewardsTab = modal.querySelector('#category-modal-tab-5');
                const hasMatchingPromo = usersXPEventsCache.some(promo =>
                    promo.category_data?.sku_id === categoryData.sku_id
                );
            
                if (hasMatchingPromo) {
                    xpRewardsTab.classList.remove('disabled');
                    xpRewardsTab.classList.remove('has-tooltip');
                    xpRewardsTab.removeAttribute('data-tooltip');
                    xpRewardsTab.addEventListener("click", function () {
                        changeModalTab('5');
                    });
                } else {
                    xpRewardsTab.classList.add('has-tooltip');
                    xpRewardsTab.setAttribute('data-tooltip', 'There are currently no XP rewards for this category');
                }
            }
        
            changeModalTab('1');

            firstTimeOpeningModal = false;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                });
            });


            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        } else if (type === "userSettings") {

            modal.innerHTML = `
                <div class="modalv3-inner" style="color: var(--white);">
                    <div class="modalv3-inner-left">
                        <div class="modalv3-side-tabs-container-backer">

                        </div>
                        <div class="modalv3-side-tabs-container" id="modalv3-side-tabs-container">

                        </div>
                    </div>
                    <div class="modalv3-inner-right" id="modalv3-inner-right">
                        <div class="modalv3-right-content-container" id="modalv3-right-content-container">
                            <div class="modalv3-right-content-container-inner" id="modalv3-right-content-container-inner">

                            </div>
                            <div class="container_c2b141" data-discord-like-settings-close-button>
                                <div class="closeButton_c2b141" aria-label="Close" role="button" tabindex="0">
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path>
                                    </svg>
                                </div>
                                <p class="keybind_c2b141 remove-on-mobile" aria-hidden="true">ESC</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            let redirect = "stable";
            if (appType === "Dev") {
                redirect = "developer";
            }
            modal.querySelector("#modalv3-side-tabs-container").innerHTML = `
                <div class="remove-on-mobile">
                    <div class="side-tabs-category-text-container">
                        <p>USER SETTINGS</p>
                    </div>

                    <div class="side-tabs-button" id="modal-v3-tab-account" onclick="setModalv3InnerContent('account')">
                        <p>Account</p>
                    </div>
                </div>

                <hr class="remove-on-mobile">

                <div class="side-tabs-category-text-container">
                    <p>APP SETTINGS</p>
                </div>

                <div class="side-tabs-button" id="modal-v3-tab-appearance" onclick="setModalv3InnerContent('appearance')">
                    <p>Appearance</p>
                </div>

                <div class="side-tabs-button hidden" id="modal-v3-tab-advanced" onclick="setModalv3InnerContent('advanced')">
                    <p>Advanced</p>
                </div>

                <div id="xp-rewards-tabs-modalv3-container"></div>

                <div id="staff-options-modalv3-container"></div>
            
                <hr>

                <div class="modalv3-side-tabs-app-info-container">
                    <div>
                        <p>Site made by:</p>
                        <a class="link" href="https://github.com/DTACat/" target="_blank">DTACat</a>
                    </div>
                    <div>
                        <p>Shop Archives</p>
                        <a class="link" href="https://github.com/ShopArchives/${redirect}" target="_blank">${typeof appVersion !== 'undefined' ? appVersion : 'vUnknown'}</a>
                    </div>
                    <a class="link" href="https://yapper.shop/legal-information/?page=tos">Terms of Service</a>
                    <a class="link" href="https://yapper.shop/legal-information/?page=privacy">Privacy Policy</a>
                </div>
            `;

            // if (currentUserData && currentUserData.banned === 0) {
            //     const xpSettingssContainer = modal.querySelector("#xp-rewards-tabs-modalv3-container");
            //     xpSettingssContainer.innerHTML = `
            //         <hr>
            //         <div class="side-tabs-category-text-container">
            //             <p>XP CORNER</p>
            //         </div>

            //         <div class="side-tabs-button" id="modal-v3-tab-xp_events" onclick="setModalv3InnerContent('xp_events')">
            //             <p>Events</p>
            //         </div>
            //         <div class="side-tabs-button" id="modal-v3-tab-xp_perks" onclick="setModalv3InnerContent('xp_perks')">
            //             <p>Levels</p>
            //         </div>
            //     `;
            // }

            if (settingsStore.dev === 1) {
                modal.querySelector("#staff-options-modalv3-container").innerHTML = `
                    <hr>
                    <div class="side-tabs-category-text-container">
                        <p>DEVELOPER ONLY</p>
                    </div>

                    <div class="side-tabs-button" id="modal-v3-tab-experiments" onclick="setModalv3InnerContent('experiments')">
                        <p>Experiments</p>
                    </div>

                    <div class="side-tabs-button" id="modal-v3-tab-modal_testing" onclick="setModalv3InnerContent('modal_testing')">
                        <p>Modal Testing</p>
                    </div>

                    <div class="side-tabs-button" id="modal-v3-tab-database_testing" onclick="setModalv3InnerContent('database_testing')">
                        <p>Database Testing</p>
                    </div>

                    <div class="side-tabs-button" id="modal-v3-tab-trading_card_testing" onclick="setModalv3InnerContent('trading_card_testing')">
                        <p>Trading Card Testing</p>
                    </div>
                `;
            }

            document.body.appendChild(modal);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                });
            });

            if (isMobileCache) {
                setModalv3InnerContent('appearance');
            } else {
                setModalv3InnerContent('account');
            }

            document.querySelector("[data-discord-like-settings-close-button]").addEventListener('click', (event) => {
                closeModal();
            });
        } else if (type === "xpRedeem") {
            const claimableId = data1;
            const changeModalTab = data2;

            document.body.appendChild(modal_back);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_back.classList.add('show');
                });
            });

            document.body.appendChild(modal_loading);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_loading.classList.add('show');
                });
            });


            let methodAndHeaders = {
                method: 'GET'
            };

            if (localStorage.token) {
                methodAndHeaders = {
                    method: 'GET',
                    headers: {
                        "Authorization": localStorage.token
                    }
                };
            }

            const dataClaimable = await fetch(redneredAPI + endpoints.CLAIMABLES_PUBLISHED + claimableId,
                methodAndHeaders
            );

            if (!dataClaimable.ok) {
                closeModal();

                if (modal_loading) modal_loading.classList.remove('show');
                setTimeout(() => {
                    if (modal_loading) modal_loading.remove();
                }, 300);

                return
            }

            const data = await dataClaimable.json();

            if (data.message) {
                console.error(data.message);
                closeModal();

                if (modal_loading) modal_loading.classList.remove('show');
                setTimeout(() => {
                    if (modal_loading) modal_loading.remove();
                }, 300);
                
                return
            }


            modal.innerHTML = `
                <div class="modalv2-inner xp-modal">
                    
                    <div class="xp-modal-inner" id="modalv2-inner-content">
                        <div class="xp-modal-banner">
                            <div class="xp-modal-flower"></div>
                            <div class="xp-modal-star var1"></div>
                            <div class="xp-modal-star var2"></div>
                            <div class="xp-modal-star var3"></div>
                            <div class="xp-modal-star var4"></div>
                            <div class="xp-modal-star var5"></div>
                            <p>${data.xp_reward.toLocaleString()} XP</p>
                        </div>
                        <h2>Congratulations!</h2>
                        <p>You have ${data.xp_reward.toLocaleString()} XP waiting for you.</p>
                        <p class="redeem-xp-error-output"></p>
                        <button class="claim-xp-button" id="claim-xp-button">
                            Claim
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 0L17.1462 9.85378L27 13.5L17.1462 17.1462L13.5 27L9.85378 17.1462L0 13.5L9.85378 9.85378L13.5 0Z" fill="currentColor"></path>
                            </svg>
                            ${data.xp_reward.toLocaleString()}
                        </button>
                    </div>

                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;

            modal.querySelector('#claim-xp-button').addEventListener('click', async () => {
                modal.querySelector('.redeem-xp-error-output').textContent = '';
                modal.querySelector('#claim-xp-button').disabled = true;
                const response = await fetch(redneredAPI + endpoints.CLAIMABLES_REDEEM + data.id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": localStorage.token
                    }
                });
                if (!response.ok) {
                    const data = await response.json();
                    modal.querySelector('.redeem-xp-error-output').textContent = data.message;
                    console.error(response)
                    modal.querySelector('#claim-xp-button').disabled = false;
                    return
                }
                await fetchAndUpdateXpEvents();
                await fetchAndUpdateUserInfo();
                await updateXpLevelBar();
                try {
                    refreshXPEventsList();
                } catch {
                }
                try {
                    changeModalTab('5');
                } catch {
                }
                closeModal();
            });

            document.body.appendChild(modal);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                });
            });


            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });

        } else if (type === "xpClaim") {
            const claimableId = data1;
            const changeModalTab = data2;

            document.body.appendChild(modal_back);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_back.classList.add('show');
                });
            });

            document.body.appendChild(modal_loading);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_loading.classList.add('show');
                });
            });


            let methodAndHeaders = {
                method: 'GET'
            };

            if (localStorage.token) {
                methodAndHeaders = {
                    method: 'GET',
                    headers: {
                        "Authorization": localStorage.token
                    }
                };
            }

            const dataClaimable = await fetch(redneredAPI + endpoints.CLAIMABLES_PUBLISHED + claimableId,
                methodAndHeaders
            );

            if (!dataClaimable.ok) {
                closeModal();

                if (modal_loading) modal_loading.classList.remove('show');
                setTimeout(() => {
                    if (modal_loading) modal_loading.remove();
                }, 300);

                return
            }

            const data = await dataClaimable.json();

            if (data.message) {
                console.error(data.message);
                closeModal();

                if (modal_loading) modal_loading.classList.remove('show');
                setTimeout(() => {
                    if (modal_loading) modal_loading.remove();
                }, 300);
                
                return
            }
            

            let disclaimer2 = "";

            if (data.id === 2) {
                disclaimer2 = "Once you've claimed this item, your Discord server tag will be applied to all your existing and future reviews. Note that if you don't have a Discord server tag applied on your profile, this item is useless."
            } else if (data.id === 4) {
                disclaimer2 = "Once you've claimed this item, you'll be able to write reviews with up to 200 characters."
            } else if (data.id === 5) {
                disclaimer2 = "Once you've claimed this item, your Discord avatar decoration will be applied to all your existing and future reviews. Note that if you don't have a Discord avatar decoration applied on your profile, this item is useless."
            } else if (data.id === 19) {
                disclaimer2 = "Once you've claimed this item, your Discord nameplate will be applied to all your existing and future reviews. Note that if you don't have a Discord nameplate applied on your profile, this item is useless."
            }

            modal.innerHTML = `
                <div class="modalv2-inner xp-purchase-modal">

                    <div class="xp-purchase-modal-inner" id="modalv2-inner-content">
                        <div class="xp-modal-banner">
                            <div class="xp-modal-flower"></div>
                            <div class="xp-modal-star var1"></div>
                            <div class="xp-modal-star var2"></div>
                            <div class="xp-modal-star var3"></div>
                            <div class="xp-modal-star var4"></div>
                            <div class="xp-modal-star var5"></div>
                        </div>
                        <div class="xp-purchase-modal-inner-content">
                            <h3>Claim Perk</h3>
                            <div class="xp-purchase-modal-details-container">
                                <p>${data.name}</p>
                            </div>
                            <div class="disclaimer2">
                                <p>${disclaimer2}</p>
                            </div>
                            <p class="redeem-xp-error-output"></p>
                            <button class="claim-xp-perk-button" id="claim-xp-button">
                                Claim for
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 0L17.1462 9.85378L27 13.5L17.1462 17.1462L13.5 27L9.85378 17.1462L0 13.5L9.85378 9.85378L13.5 0Z" fill="currentColor"></path>
                                </svg>
                                ${data.xp_price.toLocaleString()}
                            </button>
                        </div>
                    </div>

                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;

            modal.querySelector('#claim-xp-button').addEventListener('click', async () => {
                modal.querySelector('.redeem-xp-error-output').textContent = '';
                modal.querySelector('#claim-xp-button').disabled = true;
                const response = await fetch(redneredAPI + endpoints.CLAIMABLES_PURCHASE + data.id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": localStorage.token
                    }
                });
                if (!response.ok) {
                    const data = await response.json();
                    modal.querySelector('.redeem-xp-error-output').textContent = data.message;
                    console.error(response)
                    modal.querySelector('#claim-xp-button').disabled = false;
                    return
                }
                await fetchAndUpdateXpEvents();
                await fetchAndUpdateUserInfo();
                try {
                    changeModalTab('5');
                } catch {
                }
                try {
                    refreshXPEventsList();
                } catch {
                }
                closeModal();
            });

            document.body.appendChild(modal);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                });
            });


            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });

        } else if (type === "openUserModal") {
            const userID = data1;
            let cacheUserData;
            let firstTimeOpeningModal = true;


            document.body.appendChild(modal_loading);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_loading.classList.add('show');
                });
            });


            document.body.appendChild(modal_back);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_back.classList.add('show');
                });
            });

            let methodAndHeaders = {
                method: "GET"
            };

            if (currentUserData && currentUserData.admin_level > 0) {
                methodAndHeaders = {
                    method: "GET",
                    headers: {
                        "Authorization": localStorage.token
                    }
                };
            }

            apiUrl = new URL(APIV4 + endpnts.USERS + userID);
            if (currentUserData && currentUserData.admin_level > 0) {
                apiUrl.searchParams.append("include-debug-info", "true");
            }
            const rawUserData = await fetch(apiUrl,
                methodAndHeaders
            );

            if (!rawUserData.ok) {
                closeModal();

                if (modal_loading) modal_loading.classList.remove('show');
                setTimeout(() => {
                    if (modal_loading) modal_loading.remove();
                }, 300);

                return
            }

            const data = await rawUserData.json();

            if (data.message) {
                console.error(data);
                closeModal();

                if (modal_loading) modal_loading.classList.remove('show');
                setTimeout(() => {
                    if (modal_loading) modal_loading.remove();
                }, 300);

                return
            } else {
                cacheUserData = data;
            }

        
            modal.innerHTML = `
                <div class="user-modal-inner">
                    <div class="modalv2-tabs-container">
                        <div class="tab selected" id="user-modal-tab-1">
                            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="24" r="6" fill="currentColor"/>
                                <circle cx="12" cy="72" r="6" fill="currentColor"/>
                                <circle cx="12" cy="48" r="6" fill="currentColor"/>
                                <rect x="28" y="20" width="60" height="8" rx="4" fill="currentColor"/>
                                <path d="M72.124 44.0029C64.5284 44.0668 57.6497 47.1046 52.6113 52H32C29.7909 52 28 50.2091 28 48C28 45.7909 29.7909 44 32 44H72C72.0415 44 72.0828 44.0017 72.124 44.0029Z" fill="currentColor"/>
                                <path d="M44.2852 68C44.0983 69.3065 44 70.6418 44 72C44 73.3582 44.0983 74.6935 44.2852 76H32C29.7909 76 28 74.2091 28 72C28 69.7909 29.7909 68 32 68H44.2852Z" fill="currentColor"/>
                                <circle cx="72" cy="72" r="16" stroke="currentColor" stroke-width="8"/>
                                <rect x="81" y="85.9497" width="7" height="16" rx="3.5" transform="rotate(-45 81 85.9497)" fill="currentColor"/>
                            </svg>
                            <p>Profile</p>
                        </div>
                        <div class="tab" id="user-modal-tab-3">
                            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z" class=""></path>
                            </svg>
                            <p>Edit</p>
                        </div>
                        <div class="tab" id="user-modal-tab-4">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.64349 8.16714C4.31747 8.54693 4.15568 9.04068 4.19371 9.53976L5.91422 32.121C5.95225 32.6201 6.18698 33.0836 6.56677 33.4096C6.94656 33.7356 7.4403 33.8974 7.93939 33.8594L26.7573 32.4258C27.2563 32.3878 27.7199 32.1531 28.0459 31.7733C28.3719 31.3935 28.5337 30.8997 28.4957 30.4007L26.7752 7.81943C26.7371 7.32035 26.5024 6.85682 26.1226 6.5308C25.7428 6.20479 25.2491 6.043 24.75 6.08102L19.1046 6.51095L18.8179 2.74738L24.4632 2.31745C25.9605 2.20337 27.4417 2.68874 28.5811 3.66679C29.7205 4.64483 30.4247 6.03544 30.5387 7.53268L32.6894 35.7593C32.8035 37.2565 32.3181 38.7377 31.34 39.8771C30.362 41.0165 28.9714 41.7207 27.4742 41.8348L8.65627 43.2683C7.15903 43.3824 5.67779 42.897 4.53842 41.919C3.39904 40.9409 2.69486 39.5503 2.58078 38.0531L0.430133 9.82651C0.316055 8.32927 0.801426 6.84803 1.77947 5.70866C2.75752 4.56928 4.14812 3.8651 5.64536 3.75102L18.5826 2.7653L18.8694 6.52887L5.93211 7.51459C5.43303 7.55262 4.9695 7.78735 4.64349 8.16714Z" fill="currentColor"></path>
                                <path d="M18.5826 2.7653L18.8179 2.74738L19.1046 6.51095L18.8694 6.52887L18.5826 2.7653Z" fill="currentColor"></path>
                                <path d="M35.7864 2.31689C37.2836 2.20282 38.7652 2.68846 39.9045 3.6665C41.0437 4.64449 41.7484 6.03468 41.8625 7.53174L44.0129 35.7583C44.127 37.2555 43.6414 38.7371 42.6633 39.8765C41.6853 41.0158 40.2943 41.7204 38.7971 41.8345L32.2551 42.3325C32.6524 42.0421 33.0173 41.6976 33.3362 41.3013C34.3089 40.0924 34.7868 38.5168 34.6653 36.9214L34.344 32.7095L38.0803 32.4253C38.5793 32.3873 39.0434 32.1526 39.3694 31.7729C39.6954 31.3932 39.8566 30.899 39.8186 30.3999L38.0989 7.81885C38.0609 7.31977 37.8253 6.8558 37.4456 6.52979C37.0658 6.20403 36.5724 6.04257 36.0735 6.08057L32.3167 6.36572C32.1033 4.95926 31.4317 3.66759 30.4094 2.72607L35.7864 2.31689Z" fill="currentColor"></path>
                            </svg>
                            <p>Inventory</p>
                        </div>
                        <div class="tab" id="user-modal-tab-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7376 3.18925C15.4883 2.93731 15.0814 2.93686 14.8316 3.18824L14.0087 4.01625C13.7618 4.26471 13.7614 4.66581 14.0078 4.91476L20.3804 11.3527C20.6265 11.6013 20.6265 12.0017 20.3804 12.2503L14.0078 18.6882C13.7614 18.9373 13.7618 19.3383 14.0087 19.5867L14.8316 20.4148C15.0814 20.6662 15.4883 20.6658 15.7376 20.4138L23.815 12.2503C24.061 12.0016 24.061 11.6014 23.815 11.3528L15.7376 3.18925Z" fill="currentColor"/>
                                <path d="M9.99171 4.91476C10.2381 4.66581 10.2377 4.26471 9.99081 4.01625L9.16787 3.18824C8.91804 2.93686 8.51118 2.93731 8.2619 3.18925L0.184466 11.3528C-0.0614893 11.6014 -0.061488 12.0016 0.184466 12.2503L8.2619 20.4138C8.51118 20.6658 8.91803 20.6662 9.16787 20.4148L9.99081 19.5867C10.2377 19.3383 10.2381 18.9373 9.99171 18.6882L3.61906 12.2503C3.37298 12.0017 3.37298 11.6013 3.61906 11.3527L9.99171 4.91476Z" fill="currentColor"/>
                            </svg>
                            <p>Raw</p>
                        </div>
                    </div>

                    <img class="user-modal-banner-preview">
                    
                    <div id="user-modal-inner-content">
                    </div>
        
                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;

            if (cacheUserData.banner) {
                const bannerBG = modal.querySelector('.user-modal-banner-preview');
                bannerBG.src = `https://cdn.discordapp.com/banners/${cacheUserData.id}/${cacheUserData.banner}.png?size=480`;
                bannerBG.addEventListener("load", () => {
                    if (bannerBG.naturalWidth === 0 || bannerBG.naturalHeight === 0) {
                        bannerBG.remove();
                    }
                });
                bannerBG.addEventListener("error", () => {
                    bannerBG.remove();
                });
            }
        
            function changeModalTab(tab) {
                modal.querySelectorAll('.selected').forEach((el) => {
                    el.classList.remove("selected");
                });
        
                modal.querySelector('#user-modal-tab-'+tab).classList.add('selected');
        
                const modalInner = modal.querySelector('#user-modal-inner-content');
        
                if (tab === '1') {
                    modalInner.innerHTML = `
                        <div class="user-modal-bottom-container">
                            <div class="user-modal-part1">
                                <div class="xp-card-nameplate-container"></div>
                                <div class="user-modal-avatar-preview">
                                    <img class="avatar">
                                    <img class="deco">
                                </div>
                                <div class="sub">
                                    <div class="user-display-name-container">
                                        <h1 id="users-displayname"></h1>
                                        <div class="review-system-tag-container has-tooltip" data-tooltip="Official Shop Archives Account">
                                            <p class="review-system-tag">SYSTEM</p>
                                        </div>
                                        <div class="review-server-tag-container">
                                            <img class="server-tag-img" src="https://cdn.yapper.shop/assets/31.png">
                                            <p class="server-tag-title"></p>
                                        </div>
                                    </div>
                                    <p id="users-username"></p>
                                    <div class="user-badges-container-container">
                                        <div class="user-badges-container">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="user-modal-part2 xp-exp-only hidden">
                                
                            </div>
                            <div class="user-modal-part3">
                                <div>
                                    <h3>Reviews</h3>
                                    <p>${cacheUserData.total_reviews}</p>
                                </div>
                                <div>
                                    <h3>Joined Shop Archives</h3>
                                    <p class="sa-join-date">Date</p>
                                </div>
                            </div>
                        </div>
                    `;

                    if (cacheUserData.nameplate.sa_override_src) {
                        let nameplatePreview = document.createElement("img");

                        nameplatePreview.src = cacheUserData.nameplate.sa_override_src;
    
                        modalInner.querySelector('.xp-card-nameplate-container').appendChild(nameplatePreview);
                    } else if (cacheUserData.nameplate) {
                        let nameplatePreview = document.createElement("video");

                        nameplatePreview.src = `https://cdn.discordapp.com/assets/collectibles/${cacheUserData.nameplate.asset}asset.webm`;
                        nameplatePreview.disablePictureInPicture = true;
                        nameplatePreview.muted = true;
                        nameplatePreview.loop = true;
                        nameplatePreview.autoplay = true;
                        nameplatePreview.playsInline = true;

                        const bgcolor = nameplate_palettes[cacheUserData.nameplate.palette].darkBackground;
    
                        modalInner.querySelector('.xp-card-nameplate-container').style.backgroundImage = `linear-gradient(90deg, #00000000 0%, ${bgcolor} 200%)`;
    
                        modalInner.querySelector('.xp-card-nameplate-container').appendChild(nameplatePreview);
                    }


                    const date = new Date(cacheUserData.join_date);

                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();

                    const dateContainer = modalInner.querySelector(".sa-join-date");

                    let formatted = `${day}/${month}/${year}`;

                    if (settingsStore.us_time_format === 1) {
                        formatted = `${month}/${day}/${year}`;
                    }
                    dateContainer.textContent = `${formatted}`;

                    if (experimentIs('disable_xp', 0)) {
                        const xpshiIDK = modalInner.querySelector('.xp-exp-only');
                        xpshiIDK.classList.remove('hidden');
                        xpshiIDK.innerHTML = `
                            <div class="user-modal-xp-progress-left">
                                <div class="user-modal-xp-progress">
                                    <div class="bar"></div>
                                    <div class="text">
                                        <p id="animate-level-xp">0</p>
                                        <p>/${cacheUserData.profile_information.xp_to_level}</p>
                                    </div>
                                </div>
                                <p id="user-level-rank">User Rank #${cacheUserData.profile_information.rank}</p>
                            </div>
                            <div class="user-modal-xp-level">
                                <p>Level</p>
                                <h1>${cacheUserData.profile_information.level}</h1>
                            </div>
                        `;

                        if (firstTimeOpeningModal) {
                            animateNumber(modalInner.querySelector('#animate-level-xp'), cacheUserData.profile_information.xp_into_level, 2000, {
                                useCommas: false
                            });

                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    modalInner.querySelector('.bar').style.width = cacheUserData.profile_information.level_percentage+'%';
                                });
                            });
                        } else {
                            modalInner.querySelector('#animate-level-xp').textContent = cacheUserData.profile_information.xp_into_level;
                            modalInner.querySelector('.bar').style.width = cacheUserData.profile_information.level_percentage+'%';
                        }

                        if (cacheUserData.profile_information.xp_balance === 0) {
                            modalInner.querySelector('#user-level-rank').remove();
                        }
                    }

                    const displayName = modalInner.querySelector('#users-displayname');
                    if (cacheUserData.global_name) displayName.textContent = cacheUserData.global_name;
                    else displayName.textContent = cacheUserData.username;
                    if (cacheUserData.display_name_styles && experimentIs('display_name_style_render', 1)) {
                        const dns = renderDisplayNameStyle(cacheUserData.display_name_styles);
                        displayName.classList.add(dns.class);
                        Object.assign(displayName.style, dns.style);

                        if (cacheUserData.display_name_styles.id === 2) {
                            displayName.classList.add('dns-gradient-type-2');
                        }
                    }

                    if (cacheUserData.username) modalInner.querySelector('#users-username').textContent = cacheUserData.username;

                    if (!cacheUserData.system) modalInner.querySelector('.review-system-tag-container').remove();


                    const serverTagAsset = modalInner.querySelector('.review-server-tag-container');
    
                    if (cacheUserData.guild_tag) {
    
                        serverTagAsset.querySelector('.server-tag-img').src = `https://cdn.discordapp.com/clan-badges/${cacheUserData.guild_tag.id}/${cacheUserData.guild_tag.badge}.png?size=24`;
    
                        serverTagAsset.querySelector('.server-tag-title').textContent = cacheUserData.guild_tag.tag;
    
                    } else {
                        serverTagAsset.remove();
                    }


                    const avatar = modalInner.querySelector('.avatar');
                    let userAvatar = 'https://cdn.discordapp.com/avatars/'+cacheUserData.id+'/'+cacheUserData.avatar+'.webp?size=480';
                    if (cacheUserData.avatar?.includes('a_')) userAvatar = 'https://cdn.discordapp.com/avatars/'+cacheUserData.id+'/'+cacheUserData.avatar+'.gif?size=480';
                    avatar.src = userAvatar;

                    avatar.addEventListener("load", () => {
                        if (avatar.naturalWidth === 0 || avatar.naturalHeight === 0) {
                            avatar.src = "https://cdn.yapper.shop/assets/183.png";
                        }
                    });
                    avatar.addEventListener("error", () => {
                        avatar.src = "https://cdn.yapper.shop/assets/183.png";
                    });

                    
                    const deco = modalInner.querySelector('.deco');
                    if (cacheUserData.avatar_decoration) deco.src = `https://cdn.discordapp.com/avatar-decoration-presets/${cacheUserData.avatar_decoration.asset}.png?size=4096&passthrough=true`;
                    else deco.remove();


                    const userBadgesElement = modalInner.querySelector('.user-badges-container-container');
                    const userBadgesInnerElement = modalInner.querySelector('.user-badges-container');
    
                    if (Array.isArray(cacheUserData.badges) && cacheUserData.badges.length != 0) {
                        cacheUserData.badges.forEach(badge => {
                            const badgeImg = document.createElement("img");
                            badgeImg.src = `https://cdn.yapper.shop/assets/badges/${badge.id}.png`;
                            badgeImg.setAttribute('data-tooltip', badge.name);
                            badgeImg.classList.add("badge");
                            badgeImg.classList.add("has-tooltip");

                            if (badge.redirect) {
                                const badgeLink = document.createElement("a");
                                badgeLink.href = badge.redirect;
                                badgeLink.target = "_blank";
                                badgeLink.rel = "noopener noreferrer";
                                badgeLink.appendChild(badgeImg);
                                userBadgesInnerElement.appendChild(badgeLink);
                            } else {
                                userBadgesInnerElement.appendChild(badgeImg);
                            }
                        });
                    } else {
                        userBadgesElement.remove();
                    }
        
                } else if (tab === '2') {
                    modalInner.innerHTML = `
                        <div class="view-raw-modalv2-inner">
                            <textarea class="view-raw-modal-textbox" readonly>${JSON.stringify(cacheUserData, undefined, 4)}</textarea>
                        </div>
                    `;
                    document.querySelectorAll('.view-raw-modal-textbox').forEach(textbox => {
                        textbox.style.height = 'auto';
                        textbox.style.width = '100%';
                        textbox.style.height = textbox.scrollHeight + 'px';
                    });
                } else if (tab === '3') {
                    modalInner.innerHTML = `
                        <div class="admin-panel-edit-user-inner">
                        </div>
                    `;
                    const target = document.querySelector('.admin-panel-edit-user-inner');
                    if (target && !target.dataset.overridden) {
                        target.innerHTML = `
                            <button class="generic-button" id="drove-user-edit-ban">
                                Ban User
                                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L19.58 3H16a1 1 0 0 1-1-1Z" class=""></path>
                                    <path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 1 0-2 0v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z" class=""></path>
                                </svg>
                            </button>
                            <div class="drove-user-edit-section-1">
                                <div class="card">
                                    <p>Experiment Hash</p>
                                    <input type="text" autocomplete="off" id="user-experiment_hash" value="${cacheUserData.experiment_hash}">
                                </div>
                                <div class="card" id="admin_2_only">
                                    <p>XP Balance</p>
                                    <input type="text" autocomplete="off" id="user-xp_balance" value="${cacheUserData.profile_information.xp_balance}">
                                </div>
                                <div class="card" id="admin_3_only">
                                    <p>Admin Level</p>
                                    <select id="user-admin_level">
                                        <option value="0">None (0)</option>
                                        <option value="1">Mini Staff (1)</option>
                                        <option value="2">Staff (2)</option>
                                        <option value="3">Admin (3)</option>
                                    </select>
                                </div>
                                <div class="card" id="admin_2_only">
                                    <label>System</label>
                                    <select class="edit-user-data-input" id="user-system">
                                        <option value="false">False</option>
                                        <option value="true">True</option>
                                    </select>
                                </div>
                            </div>
                            <button class="generic-button brand has-tooltip" id="drove-user-edit-save-changed" data-tooltip="No changes were made" disabled>Save Changes</button>
                            <hr>
                        `;
                        target.dataset.overridden = "true";

                        const banButton = target.querySelector('#drove-user-edit-ban');
                        if (cacheUserData.banned === true) {
                            banButton.classList.add('brand');
                            banButton.textContent = `Unban`;
                        } else {
                            banButton.classList.add('red');
                            banButton.textContent = `Ban`;
                        }
                        if (cacheUserData.admin_level >= currentUserData.admin_level) {
                            banButton.classList.add('has-tooltip');
                            banButton.setAttribute('data-tooltip', 'You cannot ban a user if their Admin Level is equal to or greater than yours');
                            banButton.disabled = true;
                        }
                        else if (cacheUserData.banned === true) {
                            banButton.addEventListener("click", async () => {
                                banButton.disabled = true;
                                banButton.textContent = `...`;
                                try {
                                    await fetch(redneredAPI + endpoints.USERS + cacheUserData.id, {
                                        method: "POST",
                                        headers: {
                                            "Authorization": localStorage.token
                                        },
                                        body: JSON.stringify({
                                            banned: 0
                                        })
                                    });
                                    closeModal();
                                    openModal('user-modal', 'openUserModal', cacheUserData.id);
                                } catch {}
                            });
                        }
                        else if (cacheUserData.banned === false) {
                            banButton.addEventListener("click", async () => {
                                banButton.disabled = true;
                                banButton.textContent = `...`;
                                try {
                                    await fetch(redneredAPI + endpoints.USERS + cacheUserData.id, {
                                        method: "POST",
                                        headers: {
                                            "Authorization": localStorage.token
                                        },
                                        body: JSON.stringify({
                                            banned: 1
                                        })
                                    });
                                    closeModal();
                                    openModal('user-modal', 'openUserModal', cacheUserData.id);
                                } catch {}
                            });
                        }

                        const experiment_hash_El = target.querySelector('#user-experiment_hash');
                        const xp_balance_El = target.querySelector('#user-xp_balance');
                        const admin_level_El = target.querySelector('#user-admin_level');
                        const system_El = target.querySelector('#user-system');

                        experiment_hash_El.addEventListener("input", () => {
                            experiment_hash_El.value = experiment_hash_El.value.replace(/\D/g, "");
                            const MAX_LENGTH = 4;
                            if (experiment_hash_El.value.length > MAX_LENGTH) {
                                experiment_hash_El.value = experiment_hash_El.value.slice(0, MAX_LENGTH);
                            }
                        });

                        xp_balance_El.addEventListener("input", () => {
                            xp_balance_El.value = xp_balance_El.value.replace(/\D/g, "");
                            const MAX_LENGTH = 6;
                            if (xp_balance_El.value.length > MAX_LENGTH) {
                                xp_balance_El.value = xp_balance_El.value.slice(0, MAX_LENGTH);
                            }
                        });

                        if (currentUserData.admin_level === cacheUserData.admin_level) {
                            admin_level_El.parentElement.style.opacity = '0.5';
                            let d = document.createElement("div");
                            d.classList.add('staff-option-disabled');
                            d.classList.add('has-tooltip');
                            d.setAttribute('data-tooltip', 'You cannot modify a users Admin Level if their Admin Level is equal to or greater than yours');
                            admin_level_El.parentElement.appendChild(d);
                        }

                        experiment_hash_El.addEventListener("input", () => {
                            updateSaveButton();
                        });
                        xp_balance_El.addEventListener("input", () => {
                            updateSaveButton();
                        });

                        if (currentUserData.admin_level <= 2) {
                            target.querySelectorAll('#admin_3_only').forEach((el) => {
                                el.style.opacity = '0.5';
                                let d = document.createElement("div");
                                d.classList.add('staff-option-disabled');
                                d.classList.add('has-tooltip');
                                d.setAttribute('data-tooltip', 'Your Admin Level is not high enough to modify this setting');
                                el.appendChild(d);
                            });
                        }

                        if (currentUserData.admin_level <= 1) {
                            target.querySelectorAll('#admin_2_only').forEach((el) => {
                                el.style.opacity = '0.5';
                                let d = document.createElement("div");
                                d.classList.add('staff-option-disabled');
                                d.classList.add('has-tooltip');
                                d.setAttribute('data-tooltip', 'Your Admin Level is not high enough to modify this setting');
                                el.appendChild(d);
                            });
                        }

                        if (currentUserData.admin_level === 0) {
                            target.querySelectorAll('.card').forEach((el) => {
                                el.style.opacity = '0.5';
                                let d = document.createElement("div");
                                d.classList.add('staff-option-disabled');
                                d.classList.add('has-tooltip');
                                d.setAttribute('data-tooltip', 'Your Admin Level is not high enough to modify this setting');
                                el.appendChild(d);
                            });
                        }

                        for (const option of admin_level_El.options) {
                            if (option.value === String(cacheUserData.admin_level)) {
                                option.selected = true;
                                break;
                            }
                        }
                        admin_level_El.addEventListener("click", () => {
                            updateSaveButton();
                        });

                        for (const option of system_El.options) {
                            if (option.value === String(cacheUserData.system)) {
                                option.selected = true;
                                break;
                            }
                        }
                        system_El.addEventListener("click", () => {
                            updateSaveButton();
                        });

                        const btn = target.querySelector('#drove-user-edit-save-changed');
                        function toggleButton(value) {
                            if (value === true) {
                                btn.disabled = false;
                                btn.classList.remove('has-tooltip');
                            } else {
                                btn.disabled = true;
                                btn.classList.add('has-tooltip');
                            }
                        }

                        function normalize(val) {
                            return String(val).trim();
                        }

                        function updateSaveButton() {
                            const isChanged =
                                normalize(cacheUserData.experiment_hash) !== normalize(experiment_hash_El.value) ||
                                normalize(cacheUserData.profile_information.xp_balance) !== normalize(xp_balance_El.value) ||
                                normalize(cacheUserData.admin_level) !== normalize(admin_level_El.value) ||
                                normalize(cacheUserData.system) !== normalize(system_El.value);
                        
                            toggleButton(isChanged);
                        }

                        btn.addEventListener("click", async () => {
                            btn.disabled = true;
                            btn.textContent = `...`;
                            const body = {}
                            if (normalize(cacheUserData.experiment_hash) !== normalize(experiment_hash_El.value)) {
                                body.experiment_hash = experiment_hash_El.value;
                            }
                            if (normalize(cacheUserData.profile_information.xp_balance) !== normalize(xp_balance_El.value)) {
                                body.xp_balance = xp_balance_El.value;
                            }
                            if (normalize(cacheUserData.admin_level) !== normalize(admin_level_El.value)) {
                                body.admin_level = admin_level_El.value;
                            }
                            if (normalize(cacheUserData.system) !== normalize(system_El.value)) {
                                body.system = system_El.value;
                            }
                            try {
                                await fetch(redneredAPI + endpoints.USERS + cacheUserData.id, {
                                    method: "POST",
                                    headers: {
                                        "Authorization": localStorage.token
                                    },
                                    body: JSON.stringify(body)
                                });
                                closeModal();
                                openModal('user-modal', 'openUserModal', cacheUserData.id);
                            } catch {}
                        });
                    }
                } else if (tab === '4') {
                    modalInner.innerHTML = `
                        <div class="admin-panel-edit-user-inner">
                            <div class="modal-trading-cards-container">
                            </div>
                        </div>
                    `;
                    cacheUserData.profile_information.inventory.forEach(data => {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.innerHTML = `
                            <p>XP ${data.value.toLocaleString()}</p>
                            <img class="bg" src="https://cdn.yapper.shop/trading-cards/bg/${data.bg}.png">
                            <img class="icon" src="https://cdn.yapper.shop/trading-cards/icon/${data.id}.png">
                            <h3>${data.name}</h3>
                            <h2>1/${data.rarity}</h2>
                        `;
                        modalInner.querySelector('.modal-trading-cards-container').appendChild(card)
                    });
                } else {
                    modalInner.innerHTML = ``;
                }
            }
            window.changeModalTab = changeModalTab;

            modal.querySelector('#user-modal-tab-1').addEventListener("click", function () {
                // Profile
                changeModalTab('1');
            });
            modal.querySelector('#user-modal-tab-2').addEventListener("click", function () {
                // Raw
                changeModalTab('2');
            });
            if (currentUserData && currentUserData.admin_level > 0) {
                modal.querySelector('#user-modal-tab-3').addEventListener("click", function () {
                    // Edit
                    changeModalTab('3');
                });
            } else {
                modal.querySelector('#user-modal-tab-3').classList.add('hidden');
            }
            if (currentUserData && experimentIs('xp_system_v2', 1)) {
                modal.querySelector('#user-modal-tab-4').addEventListener("click", function () {
                    // Inventory
                    changeModalTab('4');
                });
            } else {
                modal.querySelector('#user-modal-tab-4').classList.add('hidden');
            }
            

            document.body.appendChild(modal);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                });
            });

        
            changeModalTab('1');

            firstTimeOpeningModal = false;


            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        } else if (type === "openLoadingTest") {
            document.body.appendChild(modal_loading);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_loading.classList.add('show');
                });
            });

            document.body.appendChild(modal_back);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_back.classList.add('show');
                });
            });

            modal_loading.addEventListener('click', (event) => {
                if (event.target === modal_loading) {
                    closeModal();
                }
            });
        } else if (type === "discordQuestInfo") {

            const quest = data1;

            modal.setAttribute('data-clear-param', 'itemId');
            modal.setAttribute('data-clear-cache', 'currentOpenModalId');

            addParams({itemId: quest.id})

            let asseturl = `https://cdn.discordapp.com/quests/${quest.id}/${quest.assets.hero}`;
            if (quest.assets.hero.includes("quests")) asseturl = `https://cdn.discordapp.com/${quest.assets.hero}`;

            modal.innerHTML = `
                <div class="category-modal-inner">
                    <div class="modalv2-tabs-container">
                        <div class="tab selected" id="category-modal-tab-1">
                            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="24" r="6" fill="currentColor"/>
                                <circle cx="12" cy="72" r="6" fill="currentColor"/>
                                <circle cx="12" cy="48" r="6" fill="currentColor"/>
                                <rect x="28" y="20" width="60" height="8" rx="4" fill="currentColor"/>
                                <path d="M72.124 44.0029C64.5284 44.0668 57.6497 47.1046 52.6113 52H32C29.7909 52 28 50.2091 28 48C28 45.7909 29.7909 44 32 44H72C72.0415 44 72.0828 44.0017 72.124 44.0029Z" fill="currentColor"/>
                                <path d="M44.2852 68C44.0983 69.3065 44 70.6418 44 72C44 73.3582 44.0983 74.6935 44.2852 76H32C29.7909 76 28 74.2091 28 72C28 69.7909 29.7909 68 32 68H44.2852Z" fill="currentColor"/>
                                <circle cx="72" cy="72" r="16" stroke="currentColor" stroke-width="8"/>
                                <rect x="81" y="85.9497" width="7" height="16" rx="3.5" transform="rotate(-45 81 85.9497)" fill="currentColor"/>
                            </svg>
                            <p>Overview</p>
                        </div>
                        <div class="tab" id="category-modal-tab-3">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Assets</p>
                        </div>
                        <div class="tab disabled" id="category-modal-tab-4">
                            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z" class=""></path>
                            </svg>
                            <p>Video</p>
                        </div>
                        <div class="tab" id="category-modal-tab-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7376 3.18925C15.4883 2.93731 15.0814 2.93686 14.8316 3.18824L14.0087 4.01625C13.7618 4.26471 13.7614 4.66581 14.0078 4.91476L20.3804 11.3527C20.6265 11.6013 20.6265 12.0017 20.3804 12.2503L14.0078 18.6882C13.7614 18.9373 13.7618 19.3383 14.0087 19.5867L14.8316 20.4148C15.0814 20.6662 15.4883 20.6658 15.7376 20.4138L23.815 12.2503C24.061 12.0016 24.061 11.6014 23.815 11.3528L15.7376 3.18925Z" fill="currentColor"/>
                                <path d="M9.99171 4.91476C10.2381 4.66581 10.2377 4.26471 9.99081 4.01625L9.16787 3.18824C8.91804 2.93686 8.51118 2.93731 8.2619 3.18925L0.184466 11.3528C-0.0614893 11.6014 -0.061488 12.0016 0.184466 12.2503L8.2619 20.4138C8.51118 20.6658 8.91803 20.6662 9.16787 20.4148L9.99081 19.5867C10.2377 19.3383 10.2381 18.9373 9.99171 18.6882L3.61906 12.2503C3.37298 12.0017 3.37298 11.6013 3.61906 11.3527L9.99171 4.91476Z" fill="currentColor"/>
                            </svg>
                            <p>Raw</p>
                        </div>
                    </div>

                    <img class="category-modal-banner-preview" src="${asseturl}">
                    
                    <div id="category-modal-inner-content">
                    </div>
        
                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                        <div class="has-tooltip" data-tooltip="Copy Discord Link">
                            <svg class="modalv2_top_icon" onclick="copyValue('https://canary.discord.com/quests/${quest.id}');" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.32 14.72a1 1 0 0 1 0-1.41l2.51-2.51a3.98 3.98 0 0 0-5.62-5.63l-2.52 2.51a1 1 0 0 1-1.41-1.41l2.52-2.52a5.98 5.98 0 0 1 8.45 8.46l-2.52 2.51a1 1 0 0 1-1.41 0ZM7.68 9.29a1 1 0 0 1 0 1.41l-2.52 2.51a3.98 3.98 0 1 0 5.63 5.63l2.51-2.52a1 1 0 0 1 1.42 1.42l-2.52 2.51a5.98 5.98 0 0 1-8.45-8.45l2.51-2.51a1 1 0 0 1 1.42 0Z" class=""></path><path fill="currentColor" d="M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4Z" class=""></path></svg>
                        </div>
                        <div class="has-tooltip" data-tooltip="Share">
                            <svg class="modalv2_top_icon" onclick="copyValue('${baseYapperURL}?page=quests&itemId=${quest.id}');" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M21.7 7.3a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L18.58 9H13a7 7 0 0 0-7 7v4a1 1 0 1 1-2 0v-4a9 9 0 0 1 9-9h5.59l-3.3-3.3a1 1 0 0 1 1.42-1.4l5 5Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;

            function changeModalTab(tab) {
                modal.querySelectorAll('.selected').forEach((el) => {
                    el.classList.remove("selected");
                });
        
                modal.querySelector('#category-modal-tab-'+tab).classList.add('selected');
        
                const modalInner = modal.querySelector('#category-modal-inner-content');
        
                if (tab === '1') {
                    const required = renderQuestRequirement(quest);

                    let assettaskurl = `https://cdn.discordapp.com/quests/${quest.id}/dark/${quest.assets.game_tile}`;
                    if (quest.assets.game_tile.includes("quests")) assettaskurl = `https://cdn.discordapp.com/${quest.assets.game_tile}`;

                    let assetrewardurl = `https://cdn.discordapp.com/quests/${quest.id}/${quest.rewards_config.rewards[0].asset}?format=webp`;
                    if (quest.rewards_config.rewards[0].asset?.includes("quests")) assetrewardurl = `https://cdn.discordapp.com/${quest.rewards_config.rewards[0].asset}?format=webp`;
                    
                    modalInner.innerHTML = `
                        <div class="category-modal-bottom-container">
                            <p class="sku_id has-tooltip" data-tooltip="Click To Copy" onclick="copyValue('${quest.id}')">${quest.id}</p>
                            <h1>${quest.messages.quest_name} Quest</h1>
                            <div class="quest-modal-block">
                                <div class="task-icon">
                                    <img src="${assettaskurl}">
                                </div>
                                <div>
                                    <h2>Task</h2>
                                    <p>${required.task}</p>
                                </div>
                            </div>
                            <div class="quest-modal-block">
                                <div class="reward-icon">
                                    <img src="${assetrewardurl}">
                                </div>
                                <div>
                                    <h2>Reward</h2>
                                    <p>${required.reward}</p>
                                </div>
                            </div>
                        </div>
                    `;

                    const icon = modalInner.querySelector('.reward-icon');
                    const img = modalInner.querySelector('.reward-icon').querySelector('img');

                    if (quest.rewards_config.rewards[0].type === quest_reward_types.VIRTUAL_CURRENCY) {
                        img.src = `https://cdn.discordapp.com/assets/content/fb761d9c206f93cd8c4e7301798abe3f623039a4054f2e7accd019e1bb059fc8.webm?format=webp`;
                    } else if (quest.rewards_config.rewards[0].type === quest_reward_types.FRACTIONAL_PREMIUM) {
                        icon.innerHTML = `
                            <svg width="187" height="187" viewBox="0 0 187 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M161.164 3.17212H30.5663C16.8601 3.17212 5.74902 14.3031 5.74902 28.0339V158.866C5.74902 172.597 16.8601 183.728 30.5663 183.728H161.164C174.87 183.728 185.982 172.597 185.982 158.866V28.0339C185.982 14.3031 174.87 3.17212 161.164 3.17212Z" fill="url(#paint0_linear_170_2)"></path>
                            <g filter="url(#filter0_d_170_2)">
                            <path d="M100.125 107.318C106.339 107.318 111.376 102.266 111.376 96.0332C111.376 89.8007 106.339 84.7483 100.125 84.7483C93.9113 84.7483 88.874 89.8007 88.874 96.0332C88.874 102.266 93.9113 107.318 100.125 107.318Z" fill="white"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1214 50.8938C52.0146 50.8938 49.496 53.42 49.496 56.5362C49.496 59.6525 52.0146 62.1787 55.1214 62.1787H71.9979C75.1048 62.1787 77.6235 64.7049 77.6235 67.8211C77.6235 70.9373 75.1048 73.4635 71.9979 73.4635H46.6832C43.5763 73.4635 41.0576 75.9897 41.0576 79.106C41.0576 82.2222 43.5763 84.7484 46.6832 84.7484H60.7469C63.8539 84.7484 66.3724 87.2746 66.3724 90.3908C66.3724 93.5071 63.8539 96.0333 60.7469 96.0333H49.496C46.389 96.0333 43.8704 98.5595 43.8704 101.676C43.8704 104.792 46.389 107.318 49.496 107.318H56.5393C61.5352 126.787 79.1553 141.173 100.125 141.173C124.981 141.173 145.13 120.963 145.13 96.0333C145.13 71.1035 124.981 50.8938 100.125 50.8938H55.1214ZM100.125 118.603C112.553 118.603 122.627 108.498 122.627 96.0333C122.627 83.5683 112.553 73.4635 100.125 73.4635C87.6979 73.4635 77.6235 83.5683 77.6235 96.0333C77.6235 108.498 87.6979 118.603 100.125 118.603Z" fill="white"></path>
                            <path d="M29.8064 84.7485C32.9133 84.7485 35.4319 82.2223 35.4319 79.1061C35.4319 75.9898 32.9133 73.4636 29.8064 73.4636H26.9936C23.8868 73.4636 21.3682 75.9898 21.3682 79.1061C21.3682 82.2223 23.8868 84.7485 26.9936 84.7485H29.8064Z" fill="white"></path>
                            </g>
                            <defs>
                            <filter id="filter0_d_170_2" x="7.48094" y="42.5615" width="151.536" height="118.053" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                            <feOffset dy="5.55489"></feOffset>
                            <feGaussianBlur stdDeviation="6.94361"></feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out"></feComposite>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_170_2"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_170_2" result="shape"></feBlend>
                            </filter>
                            <linearGradient id="paint0_linear_170_2" x1="160.748" y1="183.303" x2="46.3474" y2="36.4729" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E978E6"></stop>
                            <stop offset="1" stop-color="#2F3EBB"></stop>
                            </linearGradient>
                            </defs>
                            </svg>
                        `;
                    }
        
                } else if (tab === '2') {
                    modalInner.innerHTML = `
                        <div class="view-raw-modalv2-inner">
                            <textarea class="view-raw-modal-textbox" readonly>${JSON.stringify(quest, undefined, 4)}</textarea>
                        </div>
                    `;
                    document.querySelectorAll('.view-raw-modal-textbox').forEach(textbox => {
                        textbox.style.height = 'auto';
                        textbox.style.width = '100%';
                        textbox.style.height = textbox.scrollHeight + 'px';
                    });
                } else if (tab === '3') {
                    modalInner.innerHTML = `
                        <div class="category-modal-assets-container">
                        </div>
                    `;

                    const assetsContainer = modalInner.querySelector('.category-modal-assets-container');

                    const allAssets = {
                        "Hero": quest.assets.hero,
                        "Logo Type (Dark)": `dark/${quest.assets.logotype}`,
                        "Logo Type (Light)": `light/${quest.assets.logotype}`,
                        "Game Tile (Dark)": `dark/${quest.assets.game_tile}`,
                        "Game Tile (Light)": `light/${quest.assets.game_tile}`,
                        "Hero Video": quest.assets.hero_video,
                        "Quest Bar Hero": quest.assets.quest_bar_hero,
                        "Quest Bar Hero Video": quest.assets.quest_bar_hero_video,
                        "Reward Asset": quest.rewards_config.rewards[0].asset
                    };

                    let nullAssets = true;

                    Object.entries(allAssets).forEach(([asset, value]) => {
                        if (!value) return; // skip null or undefined

                        nullAssets = false;

                        let assetDiv = document.createElement("div");

                        assetDiv.classList.add('asset-div')

                        if (value.includes(".webm") || value.includes(".mp4")) {
                            let asseturl = `https://cdn.discordapp.com/quests/${quest.id}/${value}`;
                            if (value.includes("quests")) asseturl = `https://cdn.discordapp.com/${value}`;
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <video controls disablepictureinpicture muted loop src="${asseturl}"></video> 
                            `;
                        } else if (value.includes(".png") || value.includes(".jpg") || value.includes(".jpeg") || value.includes(".svg")) {
                            let asseturl = `https://cdn.discordapp.com/quests/${quest.id}/${value}`;
                            if (value.includes("quests")) asseturl = `https://cdn.discordapp.com/${value}`;
                            assetDiv.innerHTML = `
                                <h2>${asset}</h2>
                                <img src="${asseturl}"></img> 
                            `;
                        }

                        assetsContainer.appendChild(assetDiv);
                    });

                    if (nullAssets) {
                        assetsContainer.innerHTML = `
                            <div class="no-assets-container">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.96 5.46002L18.54 10.04C18.633 10.1337 18.7436 10.2081 18.8655 10.2589C18.9873 10.3097 19.118 10.3358 19.25 10.3358C19.3821 10.3358 19.5128 10.3097 19.6346 10.2589C19.7565 10.2081 19.8671 10.1337 19.96 10.04L21.34 8.66002C21.7125 8.28529 21.9216 7.77839 21.9216 7.25002C21.9216 6.72164 21.7125 6.21474 21.34 5.84002L18.16 2.66002C17.7853 2.28751 17.2784 2.07843 16.75 2.07843C16.2217 2.07843 15.7148 2.28751 15.34 2.66002L13.96 4.04002C13.8663 4.13298 13.7919 4.24358 13.7412 4.36544C13.6904 4.4873 13.6642 4.618 13.6642 4.75002C13.6642 4.88203 13.6904 5.01273 13.7412 5.13459C13.7919 5.25645 13.8663 5.36705 13.96 5.46002ZM2.11005 20.16L2.84005 15.94C2.94422 15.3306 3.2341 14.7683 3.67005 14.33L11.54 6.46002C11.633 6.36629 11.7436 6.29189 11.8655 6.24112C11.9873 6.19036 12.118 6.16422 12.25 6.16422C12.3821 6.16422 12.5128 6.19036 12.6346 6.24112C12.7565 6.29189 12.8671 6.36629 12.96 6.46002L17.54 11.04C17.6338 11.133 17.7082 11.2436 17.7589 11.3654C17.8097 11.4873 17.8358 11.618 17.8358 11.75C17.8358 11.882 17.8097 12.0127 17.7589 12.1346C17.7082 12.2565 17.6338 12.3671 17.54 12.46L9.67005 20.33C9.2344 20.7641 8.67585 21.0539 8.07005 21.16L3.84005 21.89C3.60388 21.9301 3.36155 21.9131 3.13331 21.8403C2.90508 21.7676 2.69759 21.6412 2.52821 21.4719C2.35882 21.3025 2.23247 21.095 2.15972 20.8667C2.08697 20.6385 2.06993 20.3962 2.11005 20.16Z" fill="currentColor"/>
                                    <path d="M5 1L5.81027 3.18973L8 4L5.81027 4.81027L5 7L4.18973 4.81027L2 4L4.18973 3.18973L5 1Z" fill="currentColor"/>
                                    <path d="M14 19L14.5402 20.4598L16 21L14.5402 21.5402L14 23L13.4598 21.5402L12 21L13.4598 20.4598L14 19Z" fill="currentColor"/>
                                </svg>
                                <p>This quest has no assets.</p>
                            </div>
                        `;
                    }

                    document.querySelectorAll('.asset_id').forEach((el) => {
                        el.addEventListener("click", function () {
                            el.classList.add('clicked');
                            setTimeout(() => {
                                el.classList.remove('clicked');
                            }, 500);
                        });
                    });

                } else if (tab === '4') {
                    let asset = null;
                    if (quest?.task_config_v2?.tasks?.WATCH_VIDEO?.assets?.video?.url) {
                        asset = quest.task_config_v2.tasks.WATCH_VIDEO.assets.video.url;
                    }
                    else if (quest?.task_config_v2?.tasks?.WATCH_VIDEO_ON_MOBILE?.assets?.video?.url) {
                        asset = quest.task_config_v2.tasks.WATCH_VIDEO_ON_MOBILE.assets.video.url;
                    }
                    modalInner.innerHTML = `
                        <div class="category-modal-bottom-container">
                            <div class="video-quest-disclaimer">
                                <p>Watching this video here will not grant you the quest reward.</p>
                                <p>Watch the video on Discord to claim the quest reward.</p>
                            </div>
                            <video controls src="https://cdn.discordapp.com/quests/${quest.id}/${asset}"></video>
                        </div>
                    `;
                    const video = modalInner.querySelector('video');
                    video.disablePictureInPicture = true;
                    if (data2 != 'startOnVideoTab') video.muted = true;
                    if (data2 === 'startOnVideoTab') video.autoplay = true;
                    video.playsInline = true;
                    video.volume = 0.1;
                    video.classList.add('quest-video-player');
                    if (asset === null) {
                        modalInner.innerHTML = `
                            <div class="category-modal-bottom-container">
                                <div class="shop-loading-error-container">
                                    <img src="https://cdn.yapper.shop/assets/207.png">
                                    <h2>Oopsie, something went wrong.</h2>
                                    <p>We weren't able to load this quest video.</p>
                                </div>
                            </div>
                        `;
                    }
                } else {
                    modalInner.innerHTML = ``;
                }
            }
            window.changeModalTab = changeModalTab;

            if (data2 === 'startOnVideoTab') {
                changeModalTab('4')
            } else {
                changeModalTab('1')
            }

            modal.querySelector('#category-modal-tab-1').addEventListener("click", function () {
                // Overview
                changeModalTab('1');
            });
            modal.querySelector('#category-modal-tab-2').addEventListener("click", function () {
                // Raw
                changeModalTab('2');
            });
            modal.querySelector('#category-modal-tab-3').addEventListener("click", function () {
                // Assets
                changeModalTab('3');
            });

            let tasks = quest.task_config?.tasks ?? quest.task_config_v2.tasks;

            const tab = modal.querySelector('#category-modal-tab-4');
            if (tasks["WATCH_VIDEO"] || tasks["WATCH_VIDEO_ON_MOBILE"]) {
                tab.classList.remove('disabled');
                tab.classList.remove('has-tooltip');
                tab.removeAttribute('data-tooltip');
                tab.addEventListener("click", function () {
                    // Video
                    changeModalTab('4');
                });
            } else {
                tab.classList.add('has-tooltip');
                tab.setAttribute('data-tooltip', 'This is not a video quest');
            }


            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        } else if (type === "tradingCardPackOpening") {
            pack_id = data1;

            document.body.appendChild(modal_loading);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_loading.classList.add('show');
                });
            });

            document.body.appendChild(modal_back);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_back.classList.add('show');
                });
            });

            const rawData = await fetch(redneredAPI + endpoints.TRADING_PACK_CLAIM + pack_id, {
                method: 'GET',
                headers: {
                    "Authorization": localStorage.token
                }
            });

            if (!rawData.ok) {

            } else {
                const cardIds = await rawData.json();

                await fetchAndUpdateUserInfo();
                await updateXpLevelBar();
                await fetchAndUpdateTradingCache();
                await tcbmRefreshStats();

                modal_back.innerHTML = `
                    <div class="modal-card-review-container">
                        <div class="cards"></div>
                        <div class="modal-card-buttons-container">
                            <button class="generic-button brand" onclick="closeModal()">Claim Rewards</button>
                        </div>
                    </div>
                `;

                let delay = 300;
                let counter = 0

                for (const cardId of cardIds) {
                    delay += 200;
                    counter += 1;

                    const tradingCardList = tradingConfigCache?.packs?.flatMap(pack => pack.cards) || [];
                    const data = tradingCardList.find(c => String(c.id) === String(cardId));

                    const card = document.createElement('div');
                    card.classList.add('card-container');
                    card.innerHTML = `
                        <div class="flip-card" id="flip-card-test">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="https://cdn.yapper.shop/assets/216.png">
                                </div>
                                <div class="flip-card-back" id="flip-card-back-test">
                                    <div class="trading-card">
                                        <div class="top">
                                            <div>
                                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.5 0L17.1462 9.85378L27 13.5L17.1462 17.1462L13.5 27L9.85378 17.1462L0 13.5L9.85378 9.85378L13.5 0Z" fill="currentColor"></path>
                                                </svg>
                                                <p>0</p>
                                            </div>
                                            <div>
                                                <p>Trading Card</p>
                                                <img src="${tradingCardIconDataUrl}" alt="" />
                                            </div>
                                        </div>
                                        <div class="image">
                                            <p>1/${data.rarity}</p>
                                            <img class="icon" src="https://cdn.yapper.shop/trading-cards/icon/${data.id}.png">
                                            <img class="bg" src="https://cdn.yapper.shop/trading-cards/bg/${data.bg}.png">
                                        </div>
                                        <div class="bottom">
                                            <h2>${data.name}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    if (counter === 1) card.classList.add('v1');
                    if (counter === 2) card.classList.add('v2');
                    if (counter === 3) card.classList.add('v3');

                    modal_back.querySelector('.cards').appendChild(card);

                    setTimeout(() => {
                        card.querySelector('#flip-card-test').classList.add('flip')
                    }, delay);

                    setTimeout(() => {
                        modal_back.querySelector('.modal-card-buttons-container').classList.add('open');
                    }, 1500);
                }
                
                if (modal_loading) modal_loading.classList.remove('show');
                setTimeout(() => {
                    if (modal_loading) modal_loading.remove();
                }, 300);
            }

        } else if (type === "tradingCardPackBrowse") {

            const now = new Date();

            let currentPackPage =
                tradingConfigCache.packs.find(pack => {
                    if (!pack.expires_at) return true;
                    return new Date(pack.expires_at) > now;
                }) || null;

            modal.innerHTML = `
                <div class="trading-card-browse-modal-inner">
                    <div class="modal-bg"><div class="modal-bg-color"></div></div>
                    <div class="modal-top">
                        <div class="logo">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.64349 8.16714C4.31747 8.54693 4.15568 9.04068 4.19371 9.53976L5.91422 32.121C5.95225 32.6201 6.18698 33.0836 6.56677 33.4096C6.94656 33.7356 7.4403 33.8974 7.93939 33.8594L26.7573 32.4258C27.2563 32.3878 27.7199 32.1531 28.0459 31.7733C28.3719 31.3935 28.5337 30.8997 28.4957 30.4007L26.7752 7.81943C26.7371 7.32035 26.5024 6.85682 26.1226 6.5308C25.7428 6.20479 25.2491 6.043 24.75 6.08102L19.1046 6.51095L18.8179 2.74738L24.4632 2.31745C25.9605 2.20337 27.4417 2.68874 28.5811 3.66679C29.7205 4.64483 30.4247 6.03544 30.5387 7.53268L32.6894 35.7593C32.8035 37.2565 32.3181 38.7377 31.34 39.8771C30.362 41.0165 28.9714 41.7207 27.4742 41.8348L8.65627 43.2683C7.15903 43.3824 5.67779 42.897 4.53842 41.919C3.39904 40.9409 2.69486 39.5503 2.58078 38.0531L0.430133 9.82651C0.316055 8.32927 0.801426 6.84803 1.77947 5.70866C2.75752 4.56928 4.14812 3.8651 5.64536 3.75102L18.5826 2.7653L18.8694 6.52887L5.93211 7.51459C5.43303 7.55262 4.9695 7.78735 4.64349 8.16714Z" fill="currentColor"></path>
                                <path d="M18.5826 2.7653L18.8179 2.74738L19.1046 6.51095L18.8694 6.52887L18.5826 2.7653Z" fill="currentColor"></path>
                                <path d="M35.7864 2.31689C37.2836 2.20282 38.7652 2.68846 39.9045 3.6665C41.0437 4.64449 41.7484 6.03468 41.8625 7.53174L44.0129 35.7583C44.127 37.2555 43.6414 38.7371 42.6633 39.8765C41.6853 41.0158 40.2943 41.7204 38.7971 41.8345L32.2551 42.3325C32.6524 42.0421 33.0173 41.6976 33.3362 41.3013C34.3089 40.0924 34.7868 38.5168 34.6653 36.9214L34.344 32.7095L38.0803 32.4253C38.5793 32.3873 39.0434 32.1526 39.3694 31.7729C39.6954 31.3932 39.8566 30.899 39.8186 30.3999L38.0989 7.81885C38.0609 7.31977 37.8253 6.8558 37.4456 6.52979C37.0658 6.20403 36.5724 6.04257 36.0735 6.08057L32.3167 6.36572C32.1033 4.95926 31.4317 3.66759 30.4094 2.72607L35.7864 2.31689Z" fill="currentColor"></path>
                            </svg>
                            <div class="right-top">
                                <h1>Trading Cards</h1>
                                <h2>Collect, Upgrade, Trade</h2>
                            </div>
                        </div>
                        <div class="info-blocks">
                        </div>
                    </div>

                    <div class="middle">
                        <div class="left">
                        </div>
                        <div class="right">
                        </div>
                    </div>

                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;


            async function tcbmRefreshStats() {
                modal.querySelector('.left').innerHTML = `
                    <div class="l-top">
                        <div class="trading-card-packs-scroll"></div>
                    </div>
                    <div class="l-bottom">
                        <button class="generic-button brand" onclick="setPackPage(null, true)"><p>Inventory</p></button>
                    </div>
                `;
                for (const pack of tradingConfigCache.packs) {
                    let count = 0;
                    for (const card of pack.cards) {
                        if (tradingConfigCache.inventory.find(c => c.id === card.id)) {
                            count++
                        }
                    }
                    const card = document.createElement('div');
                    card.addEventListener("click", (e) => {
                        setPackPage(pack);
                        currentPackPage = pack;
                    });
                    card.innerHTML = `
                        <div id="trading-card-pack-exp-date"></div>
                        <h1>${pack.title}</h1>
                        <p>${count}/${pack.cards.length} Cards Collected!</p>
                        <img src="https://cdn.yapper.shop/assets/218.png">
                    `;
                    card.id = `trading-pack-${pack.id}`;
                    card.style.background = `linear-gradient(-135deg, ${pack.colors[0]} 0%, ${pack.colors[1]} 70%)`;
                    modal.querySelector('.left').querySelector('.trading-card-packs-scroll').appendChild(card);

                    const expiresAt = new Date(pack.expires_at);
                    
                    if (pack.expires_at && !isNaN(expiresAt.getTime())) {
                    
                        function updateTimer() {
                            const now = new Date();
                            const timeDiff = expiresAt - now;
                        
                            if (timeDiff <= 0) {
                                card.remove();
                                clearInterval(timerInterval);
                            } else {
                                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                                const date = `ENDS IN ${days}d ${hours}h ${minutes}m ${seconds}s`;

                                renderedDate = date.replace(" 0d 0h 0m", "").replace(" 0d 0h", "").replace(" 0d", "")

                                card.querySelector('#trading-card-pack-exp-date').innerHTML = `
                                    <p class="trading-card-pack-exp-date-text">${renderedDate}</p>
                                `;
                            }
                        }
                    
                        const timerInterval = setInterval(updateTimer, 1000);
                        updateTimer();
                    } else {
                        card.querySelector('#trading-card-pack-exp-date').remove();
                    }
                }

                const stats = calculateCardStats(tradingConfigCache);

                modal.querySelector('.info-blocks').innerHTML = `
                    <div class="has-tooltip" data-tooltip="Your XP Level">
                        <p>Level ${currentUserData.xp_information.level.toLocaleString()}</p>
                    </div>
                    <div class="has-tooltip" data-tooltip="Your XP Balance">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 0L17.1462 9.85378L27 13.5L17.1462 17.1462L13.5 27L9.85378 17.1462L0 13.5L9.85378 9.85378L13.5 0Z" fill="currentColor"></path>
                        </svg>
                        <p>${currentUserData.xp_balance.toLocaleString()}</p>
                    </div>
                    <div class="has-tooltip" data-tooltip="Your Unique Cards">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.64349 8.16714C4.31747 8.54693 4.15568 9.04068 4.19371 9.53976L5.91422 32.121C5.95225 32.6201 6.18698 33.0836 6.56677 33.4096C6.94656 33.7356 7.4403 33.8974 7.93939 33.8594L26.7573 32.4258C27.2563 32.3878 27.7199 32.1531 28.0459 31.7733C28.3719 31.3935 28.5337 30.8997 28.4957 30.4007L26.7752 7.81943C26.7371 7.32035 26.5024 6.85682 26.1226 6.5308C25.7428 6.20479 25.2491 6.043 24.75 6.08102L19.1046 6.51095L18.8179 2.74738L24.4632 2.31745C25.9605 2.20337 27.4417 2.68874 28.5811 3.66679C29.7205 4.64483 30.4247 6.03544 30.5387 7.53268L32.6894 35.7593C32.8035 37.2565 32.3181 38.7377 31.34 39.8771C30.362 41.0165 28.9714 41.7207 27.4742 41.8348L8.65627 43.2683C7.15903 43.3824 5.67779 42.897 4.53842 41.919C3.39904 40.9409 2.69486 39.5503 2.58078 38.0531L0.430133 9.82651C0.316055 8.32927 0.801426 6.84803 1.77947 5.70866C2.75752 4.56928 4.14812 3.8651 5.64536 3.75102L18.5826 2.7653L18.8694 6.52887L5.93211 7.51459C5.43303 7.55262 4.9695 7.78735 4.64349 8.16714Z" fill="currentColor"></path>
                            <path d="M18.5826 2.7653L18.8179 2.74738L19.1046 6.51095L18.8694 6.52887L18.5826 2.7653Z" fill="currentColor"></path>
                            <path d="M35.7864 2.31689C37.2836 2.20282 38.7652 2.68846 39.9045 3.6665C41.0437 4.64449 41.7484 6.03468 41.8625 7.53174L44.0129 35.7583C44.127 37.2555 43.6414 38.7371 42.6633 39.8765C41.6853 41.0158 40.2943 41.7204 38.7971 41.8345L32.2551 42.3325C32.6524 42.0421 33.0173 41.6976 33.3362 41.3013C34.3089 40.0924 34.7868 38.5168 34.6653 36.9214L34.344 32.7095L38.0803 32.4253C38.5793 32.3873 39.0434 32.1526 39.3694 31.7729C39.6954 31.3932 39.8566 30.899 39.8186 30.3999L38.0989 7.81885C38.0609 7.31977 37.8253 6.8558 37.4456 6.52979C37.0658 6.20403 36.5724 6.04257 36.0735 6.08057L32.3167 6.36572C32.1033 4.95926 31.4317 3.66759 30.4094 2.72607L35.7864 2.31689Z" fill="currentColor"></path>
                        </svg>
                        <p>${stats.totalUniqueCards}/${stats.totalCardCount}</p>
                    </div>
                    <div class="has-tooltip" data-tooltip="Your Total Cards">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.64349 8.16714C4.31747 8.54693 4.15568 9.04068 4.19371 9.53976L5.91422 32.121C5.95225 32.6201 6.18698 33.0836 6.56677 33.4096C6.94656 33.7356 7.4403 33.8974 7.93939 33.8594L26.7573 32.4258C27.2563 32.3878 27.7199 32.1531 28.0459 31.7733C28.3719 31.3935 28.5337 30.8997 28.4957 30.4007L26.7752 7.81943C26.7371 7.32035 26.5024 6.85682 26.1226 6.5308C25.7428 6.20479 25.2491 6.043 24.75 6.08102L19.1046 6.51095L18.8179 2.74738L24.4632 2.31745C25.9605 2.20337 27.4417 2.68874 28.5811 3.66679C29.7205 4.64483 30.4247 6.03544 30.5387 7.53268L32.6894 35.7593C32.8035 37.2565 32.3181 38.7377 31.34 39.8771C30.362 41.0165 28.9714 41.7207 27.4742 41.8348L8.65627 43.2683C7.15903 43.3824 5.67779 42.897 4.53842 41.919C3.39904 40.9409 2.69486 39.5503 2.58078 38.0531L0.430133 9.82651C0.316055 8.32927 0.801426 6.84803 1.77947 5.70866C2.75752 4.56928 4.14812 3.8651 5.64536 3.75102L18.5826 2.7653L18.8694 6.52887L5.93211 7.51459C5.43303 7.55262 4.9695 7.78735 4.64349 8.16714Z" fill="currentColor"></path>
                            <path d="M18.5826 2.7653L18.8179 2.74738L19.1046 6.51095L18.8694 6.52887L18.5826 2.7653Z" fill="currentColor"></path>
                            <path d="M35.7864 2.31689C37.2836 2.20282 38.7652 2.68846 39.9045 3.6665C41.0437 4.64449 41.7484 6.03468 41.8625 7.53174L44.0129 35.7583C44.127 37.2555 43.6414 38.7371 42.6633 39.8765C41.6853 41.0158 40.2943 41.7204 38.7971 41.8345L32.2551 42.3325C32.6524 42.0421 33.0173 41.6976 33.3362 41.3013C34.3089 40.0924 34.7868 38.5168 34.6653 36.9214L34.344 32.7095L38.0803 32.4253C38.5793 32.3873 39.0434 32.1526 39.3694 31.7729C39.6954 31.3932 39.8566 30.899 39.8186 30.3999L38.0989 7.81885C38.0609 7.31977 37.8253 6.8558 37.4456 6.52979C37.0658 6.20403 36.5724 6.04257 36.0735 6.08057L32.3167 6.36572C32.1033 4.95926 31.4317 3.66759 30.4094 2.72607L35.7864 2.31689Z" fill="currentColor"></path>
                        </svg>
                        <p>${tradingConfigCache.inventory.length}</p>
                    </div>
                `;

                setPackPage(currentPackPage);
            }
            window.tcbmRefreshStats = tcbmRefreshStats;

            tcbmRefreshStats();


            function setPackPage(pack, inv) {
                const selectedPacks = modal.querySelector('.left').querySelectorAll('.selected');
                selectedPacks.forEach(card => {
                    card.classList.remove('selected');
                });
                if (inv) {
                    modal.querySelector('.right').innerHTML = `
                        <div class="r-top">
                            <div class="modal-trading-cards-container">

                            </div>
                        </div>
                        <div class="r-bottom">
                            <h1>Your Inventory</h1>
                            <p>Click on a card to see its details.</p>
                        </div>
                    `;
                    async function deleteCard() {
                        // openModal('modalv2', 'openLoadingTest');
                        // await fetchAndUpdateUserInfo();
                        // await fetchAndUpdateTradingCache();
                        // await updateXpLevelBar();
                        // await tcbmRefreshStats();
                        // setPackPage(null, true);
                        // closeModal();
                    }
                    async function setClickedCard(card) {
                        const cardSideBottom = modal.querySelector('.right').querySelector('.r-bottom');
                        const ripValue = card.rarity + card.value;
                        cardSideBottom.innerHTML = `
                            <h1>${card.name}</h1>
                            <p>You had a 1 in ${card.rarity} chance to pull this card.</p>
                            <div class="buttons">
                                <button class="generic-button red" id="rip-card-btn">Delete and gain ${ripValue} XP</button>
                                <button class="generic-button brand">Trade</button>
                                <button class="generic-button premium">Upgrade</button>
                            </div>
                        `;
                        cardSideBottom.querySelector('#rip-card-btn').addEventListener('click', () => {
                            deleteCard();
                        });
                    }
                    
                    tradingConfigCache.inventory.forEach(data => {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.classList.add('clickable');
                        card.innerHTML = `
                            <p>XP ${data.value.toLocaleString()}</p>
                            <img class="bg" src="https://cdn.yapper.shop/trading-cards/bg/${data.bg}.png">
                            <img class="icon" src="https://cdn.yapper.shop/trading-cards/icon/${data.id}.png">
                            <h3>${data.name}</h3>
                            <h2>1/${data.rarity}</h2>
                        `;
                        card.addEventListener('click', () => {
                            setClickedCard(data);
                        });
                        modal.querySelector('.right').querySelector('.modal-trading-cards-container').appendChild(card)
                    });
                } else {
                    modal.querySelector('.left').querySelector(`#trading-pack-${pack.id}`).classList.add('selected');
                    modal.querySelector('.right').innerHTML = `
                        <div class="r-top">
                            <div class="modal-trading-cards-container">

                            </div>
                        </div>
                        <div class="r-bottom">
                            <h1>${pack.title}</h1>
                            <p>You will receive up to 3 cards upon opening '${pack.title}'.</p>
                            <div class="buttons">
                                <button class="generic-button premium" onclick="openModal('modalv2', 'tradingCardPackOpening', ${pack.id})">Open ${pack.title} for ${pack.price} XP</button>
                            </div>
                        </div>
                    `;
                    if (pack.price > currentUserData.xp_balance) {
                        const btn = modal.querySelector('.right').querySelector('.r-bottom').querySelector('button');
                        btn.disabled = true;
                        btn.classList.add('has-tooltip');
                        btn.setAttribute('data-tooltip', 'Cannot afford');
                    }
                    const totalWeight = pack.cards.reduce((sum, item) => sum + (1 / item.rarity), 0);
                    pack.cards.forEach(data => {
                        const probability = (1 / data.rarity) / totalWeight;
                        const percentage = (probability * 100).toFixed(1);
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.innerHTML = `
                            <svg class="hidden" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z" clip-rule="evenodd" class=""></path>
                            </svg>
                            <p>1/${data.rarity}</p>
                            <img class="bg" src="https://cdn.yapper.shop/trading-cards/bg/${data.bg}.png">
                            <img class="icon" src="https://cdn.yapper.shop/trading-cards/icon/${data.id}.png">
                            <h3>${data.name}</h3>
                            <h2>${percentage}%</h2>
                        `;
                        if (tradingConfigCache.inventory.find(c => c.id === data.id)) card.querySelector('svg').classList.remove('hidden');

                        modal.querySelector('.right').querySelector('.modal-trading-cards-container').appendChild(card)
                    });
                }
            }
            window.setPackPage = setPackPage;



            document.body.appendChild(modal);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                });
            });

            document.body.appendChild(modal_back);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_back.classList.add('show');
                });
            });


            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        } else if (type === "newNewsModal") {

            modal.innerHTML = `
                <div class="new-news-modal-inner">
                    <div class="modal-bg"><div class="modal-bg-color"></div></div>
                    <div class="modal-top">
                        <div class="logo">
                            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M22.95 11.05a1 1 0 0 1 1 1 11.5 11.5 0 0 1-19.43 8.33l-.08.08v2.2a1.1 1.1 0 0 1-.68 1 1.1 1.1 0 0 1-1.19-.23 1.1 1.1 0 0 1-.32-.78v-4.8a1.1 1.1 0 0 1 .52-.94l.03-.01c.08-.05.17-.09.25-.11l.05-.01.24-.03h4.82a1.09 1.09 0 0 1 .2.02h.02a1.1 1.1 0 0 1 .18.06l.03.01.07.03.02.02.06.03.03.02.04.03a1.1 1.1 0 0 1 .44.88l-.01.15V18a1.1 1.1 0 0 1-.3.61l-.12.1-.03.02a1.09 1.09 0 0 1-.63.2l-2.18-.02-.04.04a9.5 9.5 0 0 0 16.01-6.91 1 1 0 0 1 1-1Z" fill="currentColor" class=""></path><path fill-rule="evenodd" d="M13.41 7.2c1.1.15 1.96.72 2.59 1.7l-1.35 1.09c-.38-.6-.8-1-1.24-1.18v2.24c.86.16 1.53.45 2.02.86.5.4.74 1.02.74 1.84 0 .81-.25 1.48-.77 1.98-.5.5-1.17.81-1.99.94v1.2h-1.38v-1.18a4.39 4.39 0 0 1-1.83-.58c-.5-.31-.9-.71-1.2-1.2l1.41-1.22c.44.7.98 1.12 1.62 1.28v-2.4a4.19 4.19 0 0 1-1.91-.9 2.32 2.32 0 0 1-.79-1.83c0-.72.25-1.31.75-1.77a3.4 3.4 0 0 1 1.95-.87V6h1.38v1.2Zm0 7.75c.56-.15.84-.48.84-1.02a.97.97 0 0 0-.2-.64c-.12-.16-.33-.29-.64-.4v2.06ZM12.03 8.8c-.27.08-.48.2-.63.39a.84.84 0 0 0-.23.57c0 .25.07.45.19.6.13.15.36.28.67.39V8.8Z" clip-rule="evenodd" fill="currentColor" class=""></path><path d="M21.16 0a1.1 1.1 0 0 1 1.09 1.1v4.8c0 .3-.12.57-.32.78l-.08.07-.08.06-.02.01-.07.05-.03.01-.05.02-.06.03h-.03a1.12 1.12 0 0 1-.11.04l-.04.01h-.05l-.06.02H16.35a1.1 1.1 0 0 1-1.02-1.52 1.1 1.1 0 0 1 .35-.45l.02-.02a1.1 1.1 0 0 1 .64-.2l2.18.02.07-.07A9.5 9.5 0 0 0 3 12.05a1 1 0 1 1-2 0 11.5 11.5 0 0 1 19-8.71l.06-.05v-2.2a1.1 1.1 0 0 1 .68-1c.13-.06.27-.1.42-.09Z" fill="currentColor" class=""></path></svg>
                            <div class="right-top">
                                <h1>Change Currency (BETA)</h1>
                                <h2>Select your preferred currency to make browsing easier for you.</h2>
                            </div>
                        </div>
                        <div class="info-blocks">
                        </div>
                    </div>

                    <div class="news-output-container">
                        <div class="news-output">
                        </div>
                    </div>

                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;

            const newsOutput = modal.querySelector('.news-output');
            const settingCurrency = Number(settingsStore.currency);
            const currencyKey = Object.keys(currency_types).find(key => Number(key) === settingCurrency);

            Object.values(converted_currencies).forEach(currency => {
                let price = currency.amounts["3499"];
                if (currency?.display_type === "fixed") {
                    if (typeof price === "number") {
                        price = (price / 100).toFixed(2).replace('.00', '');
                    }
                } 
                else if (currency?.display_type === "locale") {
                    if (typeof price === "number") {
                        price = price.toLocaleString("en-US");
                    }
                }
                const card = document.createElement('button');
                card.classList.add('card');
                card.id = currency.currency;
                card.innerHTML = `
                    <h3>${currency.name}</h3>
                    <div class="bottom">
                        <p>${currency.currency}</p>
                    </div>
                    <div class="side">
                        <p>Preview:</p>
                        <h2>${currency.extension}${price}</h2>
                    </div>
                `;
                if (currency.currency === converted_currencies[currencyKey].currency) {
                    card.classList.add('selected');
                }
                card.addEventListener('click', async () => {
                    newsOutput.querySelectorAll('.selected').forEach((el) => {
                        el.classList.remove("selected");
                    });
                    newsOutput.querySelectorAll('.card').forEach((el) => {
                        el.disabled = true;
                    });
                    card.classList.add('selected');

                    const currencyKey2 = Object.keys(converted_currencies).find(key => converted_currencies[key].currency === currency.currency);
                    changeSetting('currency', Number(currencyKey2));
                    document.getElementById('current-currency').textContent = converted_currencies[currencyKey2].currency;

                    await loadPage(currentPageCache, true);
                    newsOutput.querySelectorAll('.card').forEach((el) => {
                        el.disabled = false;
                    });
                    card.classList.add('selected');
                });
                newsOutput.appendChild(card)
            });



            document.body.appendChild(modal);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                });
            });

            document.body.appendChild(modal_back);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_back.classList.add('show');
                });
            });


            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        } else if (type === "categoryPickItemToReview") {

            modal.innerHTML = `
                <div class="choose-item-to-review-modal-inner">
                    <div class="modal-bg"><div class="modal-bg-color"></div></div>
                    <div class="modal-top">
                        <div class="logo">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M8 3C7.44771 3 7 3.44772 7 4V5C7 5.55228 7.44772 6 8 6H16C16.5523 6 17 5.55228 17 5V4C17 3.44772 16.5523 3 16 3H15.1245C14.7288 3 14.3535 2.82424 14.1002 2.52025L13.3668 1.64018C13.0288 1.23454 12.528 1 12 1C11.472 1 10.9712 1.23454 10.6332 1.64018L9.8998 2.52025C9.64647 2.82424 9.27121 3 8.8755 3H8Z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M19 4.49996V4.99996C19 6.65681 17.6569 7.99996 16 7.99996H8C6.34315 7.99996 5 6.65681 5 4.99996V4.49996C5 4.22382 4.77446 3.99559 4.50209 4.04109C3.08221 4.27826 2 5.51273 2 6.99996V19C2 20.6568 3.34315 22 5 22H19C20.6569 22 22 20.6568 22 19V6.99996C22 5.51273 20.9178 4.27826 19.4979 4.04109C19.2255 3.99559 19 4.22382 19 4.49996ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5522 7.44772 14 8 14H16C16.5523 14 17 13.5522 17 13C17 12.4477 16.5523 12 16 12H8ZM7 17C7 16.4477 7.44772 16 8 16H13C13.5523 16 14 16.4477 14 17C14 17.5522 13.5523 18 13 18H8C7.44772 18 7 17.5522 7 17Z"></path>
                            </svg>
                            <div class="right-top">
                                <h1>Products</h1>
                                <h2>Choose an item to review.</h2>
                            </div>
                        </div>
                        <div class="info-blocks">
                        </div>
                    </div>

                    <div class="items-output">
                        <div class="card">
                            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                            <p>None</p>
                        </div>
                    </div>

                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;

            category = data1;

            modal.querySelector('.items-output').querySelector('.card').addEventListener('click', () => {
                document.querySelector('#specific-item-id').value = '';
                closeModal();
                document.querySelector('.specific-item-name').textContent = '';
                document.querySelector('.specific-item-name').classList.add('hidden');
            });

            category.products.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img class="img1">
                    <img class="img2">
                    <p>${item.name}</p>
                `;
                const objImg = card.querySelector('.img1')
                const objImg2 = card.querySelector('.img2')
                if (item.type === item_types.AVATAR_DECORATION) {
                    objImg.classList.add('deco');
                    objImg.src = item.items[0].assets ? item.items[0].assets.static_image_url : `https://cdn.discordapp.com/avatar-decoration-presets/${item.items[0].asset}.png?size=4096&passthrough=false`;
                    objImg2.remove();
                }
                else if (item.type === item_types.PROFILE_EFFECT) {
                    objImg.classList.add('effect');
                    objImg.src = item.items[0].thumbnailPreviewSrc;
                    objImg2.remove();
                }
                else if (item.type === item_types.NAMEPLATE) {
                    const nameplateImg = item.items[0].assets ? item.items[0].assets.static_image_url : `https://cdn.discordapp.com/assets/collectibles/${item.items[0].asset}static.png`;

                    objImg.classList.add('nameplate1');
                    objImg.src = nameplateImg;

                    objImg2.classList.add('nameplate2');
                    objImg2.src = nameplateImg;

                    const paletteName = item.items[0].palette;
                    const bgcolor = nameplate_palettes[paletteName].darkBackground;
                    objImg.style.backgroundImage = `linear-gradient(90deg, #00000000 -30%, ${bgcolor} 200%)`;
                    objImg2.style.backgroundImage = `linear-gradient(90deg, #00000000 -30%, ${bgcolor} 200%)`;
                } else {
                    card.classList.add('hidden')
                }
                card.addEventListener('click', () => {
                    document.querySelector('#specific-item-id').value = item.product_id;
                    closeModal();
                    document.querySelector('.specific-item-name').textContent = `Reviewing "${item.name}"`;
                    document.querySelector('.specific-item-name').classList.remove('hidden');
                });
                modal.querySelector('.items-output').appendChild(card)
            });


            document.body.appendChild(modal);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                });
            });

            document.body.appendChild(modal_back);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal_back.classList.add('show');
                });
            });


            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        } else if (type === "addCategory") {
            modal.innerHTML = `
                <div class="category-modal-inner">
                    <div class="modalv2-tabs-container">
                        <div class="tab" id="category-modal-tab-1">
                            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z" class=""></path>
                            </svg>
                            <p>this</p>
                        </div>
                    </div>
                    
                    <div id="category-modal-inner-content">
                    </div>
        
                    <div data-modal-top-product-buttons>
                        <div class="has-tooltip" data-tooltip="Close" data-close-product-card-button>
                            <svg class="modalv2_top_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
                        </div>
                    </div>
                </div>
            `;

            function changeModalTab(tab) {
                modal.querySelectorAll('.selected').forEach((el) => {
                    el.classList.remove("selected");
                });
        
                modal.querySelector('#category-modal-tab-'+tab).classList.add('selected');
        
                const modalInner = modal.querySelector('#category-modal-inner-content');
        
                if (tab === '1') {

                    modalInner.innerHTML = `
                        <div class="add-category-fields-con">
                            <div class="add-category-fields-fill">
                            </div>
                        </div>
                    `;

                    const LOAD_API_URL = ""; // e.g. "https://api.example.com/product/123"
                    const SAVE_API_URL = "https://api.example.com/save"; // e.g. "https://api.example.com/save"

                    // ===== STRUCTURE =====
                    const baseFields = [
                      "sku_id",
                      "name",
                      "summary",
                      "store_listing_id",
                      "unpublished_at"
                    ];

                    const assetsIdFields = [
                      "banner","logo","mobile_bg","pdp_bg","success_modal_bg",
                      "mobile_banner","featured_block","hero_banner","wide_banner","hero_logo"
                    ];

                    const assetsUrlFields = [
                      "hero_banner","hero_banner_animated","hero_rive","hero_logo",
                      "catalog_banner","catalog_banner_animated","catalog_banner_rive",
                      "featured_block","logo","pdp_bg","wide_banner","wide_banner_animated",
                      "mobile_hero","mobile_hero_animated","mobile_banner","mobile_bg"
                    ];

                    const textConfigFields = [
                      "hero_block_title","mobile_hero_block_title","mobile_products_title",
                      "mobile_summary","wide_banner_title","wide_banner_body","banner_text_color"
                    ];

                    const app = modalInner.querySelector(".add-category-fields-fill");

                    // ===== HELPERS =====
                    function createInput(id, labelText) {
                      const div = document.createElement("div");
                      div.className = "field";
                    
                      const label = document.createElement("label");
                      label.textContent = labelText;
                    
                      const input = document.createElement("input");
                      input.id = id;
                    
                      div.appendChild(label);
                      div.appendChild(input);
                    
                      return div;
                    }

                    function createSection(title) {
                      const div = document.createElement("div");
                      div.className = "section";
                    
                      const h = document.createElement("h3");
                      h.textContent = title;
                    
                      div.appendChild(h);
                      return div;
                    }

                    // ===== BUILD UI =====

                    // Base fields
                    baseFields.forEach(f => {
                      app.appendChild(createInput(f, f));
                    });

                    // Assets
                    const assetsSection = createSection("Assets");

                    // ID
                    const idSection = createSection("assets.id");
                    assetsIdFields.forEach(f => {
                      idSection.appendChild(createInput(`assets.id.${f}`, f));
                    });

                    // URL
                    const urlSection = createSection("assets.url");
                    assetsUrlFields.forEach(f => {
                      urlSection.appendChild(createInput(`assets.url.${f}`, f));
                    });

                    assetsSection.appendChild(idSection);
                    assetsSection.appendChild(urlSection);
                    app.appendChild(assetsSection);

                    // Text Config
                    const textSection = createSection("Text Config");
                    textConfigFields.forEach(f => {
                      textSection.appendChild(createInput(`text_config.${f}`, f));
                    });
                    app.appendChild(textSection);

                    // Products
                    const productSection = createSection("Products");
                    const productList = document.createElement("div");
                    productList.className = "products";

                    const addBtn = document.createElement("button");
                    addBtn.textContent = "+ Add Product";
                    addBtn.className = "generic-button brand";

                    addBtn.onclick = () => addProduct("");

                    function addProduct(value) {
                      const row = document.createElement("div");
                      row.className = "product-item";
                    
                      const input = document.createElement("input");
                      input.value = value;
                    
                      const remove = document.createElement("button");
                      remove.textContent = "X";
                      remove.className = "generic-button red";
                    
                      remove.onclick = () => row.remove();
                    
                      row.appendChild(input);
                      row.appendChild(remove);
                      productList.appendChild(row);
                    }

                    productSection.appendChild(productList);
                    productSection.appendChild(addBtn);
                    app.appendChild(productSection);

                    // Submit
                    const submitBtn = document.createElement("button");
                    submitBtn.textContent = "Submit";
                    submitBtn.className = "generic-button green";

                    submitBtn.onclick = async () => {
                      const data = {
                        assets: { id: {}, url: {} },
                        text_config: {},
                        products: []
                      };
                  
                      // Base
                      baseFields.forEach(f => {
                        data[f] = document.getElementById(f).value || "";
                      });
                  
                      // Assets ID
                      assetsIdFields.forEach(f => {
                        const val = document.getElementById(`assets.id.${f}`).value.trim();
                        if (val) data.assets.id[f] = val;
                      });
                  
                      // Assets URL
                      assetsUrlFields.forEach(f => {
                        const val = document.getElementById(`assets.url.${f}`).value.trim();
                        if (val) data.assets.url[f] = val;
                      });
                  
                      // Text config
                      textConfigFields.forEach(f => {
                        const val = document.getElementById(`text_config.${f}`).value.trim();
                        if (val) data.text_config[f] = val;
                      });
                  
                      // Products
                      document.querySelectorAll(".product-item input").forEach(i => {
                        if (i.value.trim()) data.products.push(i.value.trim());
                      });
                  
                      console.log("Sending:", data);
                  
                      if (SAVE_API_URL) {
                        await fetch(SAVE_API_URL, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(data)
                        });
                      }
                    };

                    app.appendChild(submitBtn);

                    // ===== LOAD FROM API =====
                    async function loadData() {
                      if (!LOAD_API_URL) return;
                    
                      const res = await fetch(LOAD_API_URL);
                      const json = await res.json();
                    
                      // Base
                      baseFields.forEach(f => {
                        if (json[f]) document.getElementById(f).value = json[f];
                      });
                  
                      // Assets
                      if (json.assets?.id) {
                        for (let k in json.assets.id) {
                          const el = document.getElementById(`assets.id.${k}`);
                          if (el) el.value = json.assets.id[k];
                        }
                      }
                  
                      if (json.assets?.url) {
                        for (let k in json.assets.url) {
                          const el = document.getElementById(`assets.url.${k}`);
                          if (el) el.value = json.assets.url[k];
                        }
                      }
                  
                      // Text config
                      if (json.text_config) {
                        for (let k in json.text_config) {
                          const el = document.getElementById(`text_config.${k}`);
                          if (el) el.value = json.text_config[k];
                        }
                      }
                  
                      // Products
                      if (Array.isArray(json.products)) {
                        json.products.forEach(p => addProduct(p));
                      }
                    }

                    loadData();
        
                } else {
                    modalInner.innerHTML = ``;
                }
            }
            window.changeModalTab = changeModalTab;

            modal.querySelector('#category-modal-tab-1').addEventListener("click", function () {
                // WIP
                changeModalTab('1');
            });

            changeModalTab('1');

            modal.querySelector("[data-close-product-card-button]").addEventListener('click', () => {
                closeModal();
            });
        }

        if (type != "fromCategoryBanner" && type != "userSettings" && type != "openUserModal" && type != "openLoadingTest" && type != "tradingCardPackOpening" && type != "tradingCardPackBrowse") {
            document.body.appendChild(modal);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                });
            });

            if (type != "xpRedeem" && type != "xpClaim") {

                document.body.appendChild(modal_back);
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        modal_back.classList.add('show');
                    });
                });
            }
        }

        if (type != "openLoadingTest" && type != "tradingCardPackOpening") {
            if (modal_loading) modal_loading.classList.remove('show');
            setTimeout(() => {
                if (modal_loading) modal_loading.remove();
            }, 300);
        }
    }
    window.openModal = openModal;

    async function closeModal() {
        if (openModalsCache != 0) {
            const modal = document.querySelector('.open-modal-' + openModalsCache);
            const modal_back = document.querySelector('.open-back-modal-' + openModalsCache);
            const modal_loading = document.querySelector('.open-loading-modal-' + openModalsCache);

            // Code to hide the not top most modal
            try {
                const amount = openModalsCache - 1;
                if (!document.querySelector('.open-modal-' + amount).classList.contains('modalv3')) {
                    document.querySelector('.open-modal-' + amount).classList.add('show');
                    document.querySelector('.open-back-modal-' + amount).classList.add('show');
                }
            } catch {}

            if (modal?.hasAttribute('data-clear-param')) {
                removeParams(modal.getAttribute('data-clear-param'));
            }
            if (modal?.hasAttribute('data-clear-cache') && modal.getAttribute('data-clear-cache') === "currentOpenModalId") {
                currentOpenModalId = null;
            }

            if (modal) modal.classList.remove('show');
            if (modal_back) modal_back.classList.remove('show');
            if (modal_loading) modal_loading.classList.remove('show');
            setTimeout(() => {
                if (modal) modal.remove();
                if (modal_back) modal_back.remove();
                if (modal_loading) modal_loading.remove();
            }, 300);
            openModalsCache -= 1;
        }
    }
    window.closeModal = closeModal;

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal()
        }
    });


    function getCategoryBanners(categoryData) {
        const categoryClientDataId = category_client_overrides.findIndex(cat => cat.sku_id === categoryData.sku_id);
        const categoryAssetEntry = Object.values(customCategoryAssets).find(entry =>
            typeof entry === "object" && entry.sku_id === categoryData.sku_id
        );
        const ia = categoryData.assets.id;
        const ja = categoryData.assets.json;
        const ua = categoryData.assets.url;
        const oa = categoryData.assets.overrides;

        let categoryBanner = customCategoryAssets[0];
        if (category_client_overrides[categoryClientDataId]?.banner_override) categoryBanner = category_client_overrides[categoryClientDataId]?.banner_override;
        else if (ja.banner_asset?.static) categoryBanner = ja.banner_asset?.static;
        else if (ia.banner) categoryBanner = `https://cdn.discordapp.com/app-assets/1096190356233670716/${ia.banner}.png?size=4096`;

        let categoryHeroBanner = customCategoryAssets[2];
        if (category_client_overrides[categoryClientDataId]?.hero_banner_override) categoryHeroBanner = category_client_overrides[categoryClientDataId]?.hero_banner_override;
        else if (categoryAssetEntry?.hero_banner_asset?.static) categoryHeroBanner = categoryAssetEntry?.hero_banner_asset?.static;
        else if (oa.hero_banner) categoryHeroBanner = oa.hero_banner;
        else if (ua.hero_banner) categoryHeroBanner = ua.hero_banner;
        else if (ja.hero_banner_asset?.static) categoryHeroBanner = ja.hero_banner_asset?.static;
        else if (ia.hero_banner) categoryHeroBanner = `https://cdn.discordapp.com/app-assets/1096190356233670716/${ia.hero_banner}.png?size=4096`;
        else if (categoryBanner && categoryBanner !== customCategoryAssets[0]) categoryHeroBanner = categoryBanner;

        let modalBanner = null;
        if (category_client_overrides[categoryClientDataId]?.modal_hero_banner) modalBanner = category_client_overrides[categoryClientDataId]?.modal_hero_banner
        else if (categoryHeroBanner) modalBanner = categoryHeroBanner;
        else if (categoryBanner) modalBanner = categoryBanner;

        let catalogBannerAsset = customCategoryAssets[1];
        if (categoryAssetEntry?.catalog_banner_asset) catalogBannerAsset = categoryAssetEntry?.catalog_banner_asset?.static;
        else if (oa.catalog_banner) catalogBannerAsset = oa.catalog_banner;
        else if (ua.catalog_banner) catalogBannerAsset = ua.catalog_banner;

        let catalogBannerAssetAnimated;
        if (ua.catalog_banner_animated) catalogBannerAssetAnimated = ua.catalog_banner_animated;
        else if (oa.catalog_banner_animated) catalogBannerAssetAnimated = oa.catalog_banner_animated;
        else if (ua.catalog_banner_animated) catalogBannerAssetAnimated = ua.catalog_banner_animated;

        return {
            categoryBanner,
            categoryHeroBanner,
            modalBanner,
            catalogBannerAsset,
            catalogBannerAssetAnimated
        }
    }

    async function renderQuest(quests, output) {

        const paginationContainers = [];
    
        const mainPaginationById = document.getElementById('pagination');
        if (mainPaginationById) {
            paginationContainers.push(mainPaginationById);
        }

        const paginationByClass = document.querySelectorAll('.pagination');
        paginationByClass.forEach(container => {
            if (!paginationContainers.includes(container)) {
                paginationContainers.push(container);
            }
        });

        const paginationByDataAttr = document.querySelectorAll('[data-pagination]');
        paginationByDataAttr.forEach(container => {
            if (!paginationContainers.includes(container)) {
                paginationContainers.push(container);
            }
        });

        let itemsPerPage = 18;
        const filteredData = quests.sort((a, b) => {
            const dateA = new Date(a.expires_at);
            const dateB = new Date(b.expires_at);
        
            return dateB - dateA;
        });
        let currentPage = 1;
    
        const renderQuestsPage = (page) => {
            currentPage = page;
            output.innerHTML = '';
            const pageData = paginate(filteredData, page, itemsPerPage);
            output.scrollTo(0,0);
    
            pageData.forEach(quest => {
                const expDate = new Date(quest.expires_at);

                const day = String(expDate.getDate()).padStart(2, '0');
                const month = String(expDate.getMonth() + 1).padStart(2, '0');
                const year = expDate.getFullYear();

                let formatted = `${day}/${month}/${year}`

                if (settingsStore.us_time_format === 1) {
                    formatted = `${month}/${day}/${year}`;
                }


                const card = document.createElement("div");
                card.classList.add('quest-card');
                card.setAttribute('data-id', quest.id);
                let herobanner = `https://cdn.discordapp.com/quests/${quest.id}/${quest.assets.hero}`;
                if (quest.assets.hero.includes("quests")) herobanner = `https://cdn.discordapp.com/${quest.assets.hero}`;
                card.innerHTML = `
                    <div class="section1">
                        <img class="hero" src="${herobanner}">
                        <img class="logo" src="https://cdn.discordapp.com/quests/${quest.id}/dark/${quest.assets.logotype}">
                        <p class="publisher">Promoted by ${quest.messages.game_publisher}</p>
                        <p class="date">Ends ${formatted}</p>
                    </div>
                    <div class="section2">
                        <div class="reward-icon">
                        </div>
                        <div class="info-container">
                            <p class="quest-name">${quest.messages.quest_name.toUpperCase()} QUEST</p>
                            <p class="reward-name">something idk</p>
                            <p class="reward-requirements"></p>
                        </div>
                    </div>
                    <div class="section3">
                        <button class="generic-button brand">
                            Open In Discord
                        </button>
                    </div>
                `;
                const rewardRequirements = card.querySelector('.reward-requirements');

                const required = renderQuestRequirement(quest);

                rewardRequirements.textContent = required.requirements;

                const rewardName = card.querySelector('.reward-name');
                if (quest.rewards_config.rewards[0].type === quest_reward_types.REWARD_CODE || quest.rewards_config.rewards[0].type === quest_reward_types.COLLECTIBLE || quest.rewards_config.rewards[0].type === quest_reward_types.FRACTIONAL_PREMIUM) {
                    rewardName.textContent = `Claim ${quest.rewards_config.rewards[0].messages.name_with_article}`;
                }
                else if (quest.rewards_config.rewards[0].type === quest_reward_types.VIRTUAL_CURRENCY) {
                    rewardName.textContent = `${quest.rewards_config.rewards[0].orb_quantity} Discord Orbs`;
                }
                else {
                    rewardName.textContent = quest.rewards_config.rewards[0].messages.name_with_article;
                }

                const rewardIcon = card.querySelector('.reward-icon');
                if (quest.rewards_config.rewards[0].type === quest_reward_types.FRACTIONAL_PREMIUM) {
                    rewardIcon.innerHTML = `
                        <svg width="187" height="187" viewBox="0 0 187 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M161.164 3.17212H30.5663C16.8601 3.17212 5.74902 14.3031 5.74902 28.0339V158.866C5.74902 172.597 16.8601 183.728 30.5663 183.728H161.164C174.87 183.728 185.982 172.597 185.982 158.866V28.0339C185.982 14.3031 174.87 3.17212 161.164 3.17212Z" fill="url(#paint0_linear_170_2)"></path>
                        <g filter="url(#filter0_d_170_2)">
                        <path d="M100.125 107.318C106.339 107.318 111.376 102.266 111.376 96.0332C111.376 89.8007 106.339 84.7483 100.125 84.7483C93.9113 84.7483 88.874 89.8007 88.874 96.0332C88.874 102.266 93.9113 107.318 100.125 107.318Z" fill="white"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1214 50.8938C52.0146 50.8938 49.496 53.42 49.496 56.5362C49.496 59.6525 52.0146 62.1787 55.1214 62.1787H71.9979C75.1048 62.1787 77.6235 64.7049 77.6235 67.8211C77.6235 70.9373 75.1048 73.4635 71.9979 73.4635H46.6832C43.5763 73.4635 41.0576 75.9897 41.0576 79.106C41.0576 82.2222 43.5763 84.7484 46.6832 84.7484H60.7469C63.8539 84.7484 66.3724 87.2746 66.3724 90.3908C66.3724 93.5071 63.8539 96.0333 60.7469 96.0333H49.496C46.389 96.0333 43.8704 98.5595 43.8704 101.676C43.8704 104.792 46.389 107.318 49.496 107.318H56.5393C61.5352 126.787 79.1553 141.173 100.125 141.173C124.981 141.173 145.13 120.963 145.13 96.0333C145.13 71.1035 124.981 50.8938 100.125 50.8938H55.1214ZM100.125 118.603C112.553 118.603 122.627 108.498 122.627 96.0333C122.627 83.5683 112.553 73.4635 100.125 73.4635C87.6979 73.4635 77.6235 83.5683 77.6235 96.0333C77.6235 108.498 87.6979 118.603 100.125 118.603Z" fill="white"></path>
                        <path d="M29.8064 84.7485C32.9133 84.7485 35.4319 82.2223 35.4319 79.1061C35.4319 75.9898 32.9133 73.4636 29.8064 73.4636H26.9936C23.8868 73.4636 21.3682 75.9898 21.3682 79.1061C21.3682 82.2223 23.8868 84.7485 26.9936 84.7485H29.8064Z" fill="white"></path>
                        </g>
                        <defs>
                        <filter id="filter0_d_170_2" x="7.48094" y="42.5615" width="151.536" height="118.053" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                        <feOffset dy="5.55489"></feOffset>
                        <feGaussianBlur stdDeviation="6.94361"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_170_2"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_170_2" result="shape"></feBlend>
                        </filter>
                        <linearGradient id="paint0_linear_170_2" x1="160.748" y1="183.303" x2="46.3474" y2="36.4729" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E978E6"></stop>
                        <stop offset="1" stop-color="#2F3EBB"></stop>
                        </linearGradient>
                        </defs>
                        </svg>
                    `;
                } else {

                    if (quest.rewards_config.rewards[0]?.asset?.includes('.mp4') || quest.rewards_config.rewards[0]?.asset?.includes('.webm') || quest.rewards_config.rewards[0].type === quest_reward_types.VIRTUAL_CURRENCY) {
                        const rewardImg = document.createElement("video");
                        let src = `https://cdn.discordapp.com/quests/${quest.id}/${quest.rewards_config.rewards[0].asset}`;
                        if (quest.rewards_config.rewards[0].asset?.includes("quests")) src = `https://cdn.discordapp.com/${quest.rewards_config.rewards[0].asset}`;
                        if (quest.rewards_config.rewards[0].type === quest_reward_types.VIRTUAL_CURRENCY) src = `https://cdn.discordapp.com/assets/content/fb761d9c206f93cd8c4e7301798abe3f623039a4054f2e7accd019e1bb059fc8.webm`;
                        rewardImg.src = src;

                        card.addEventListener("mouseenter", () => {
                            rewardImg.play();
                        });
                        card.addEventListener("mouseleave", () => {
                            rewardImg.pause();
                            rewardImg.currentTime = 0;
                        });

                        rewardImg.disablePictureInPicture = true;
                        rewardImg.muted = true;
                        rewardImg.loop = true;
                        rewardImg.playsInline = true;

                        rewardIcon.appendChild(rewardImg);
                    } else {
                        const rewardImg = document.createElement("img");
                        let src = `https://cdn.discordapp.com/quests/${quest.id}/${quest.rewards_config.rewards[0].asset}?format=webp`;
                        if (quest.rewards_config.rewards[0].asset.includes("quests")) src = `https://cdn.discordapp.com/${quest.rewards_config.rewards[0].asset}`;
                        rewardImg.src = src;

                        rewardIcon.appendChild(rewardImg);
                    }
                }

                const openInDiscordButton = card.querySelector('.generic-button');


                const now = new Date();
                const timeDiff = expDate - now;
            
                if (timeDiff <= 0) {
                    openInDiscordButton.classList.add('disabled');
                    openInDiscordButton.textContent = `Quest ended ${formatted}`;
                    card.querySelector('.date').remove();
                    openInDiscordButton.addEventListener("click", (e) => {
                        e.stopPropagation();
                    });
                } else {
                    openInDiscordButton.addEventListener("click", (e) => {
                        e.stopPropagation();
                        redirectToLink('https://discord.com/discovery/quests#'+quest.id);
                    });
                }

                let tasks = quest.task_config?.tasks ?? quest.task_config_v2.tasks;

                if (tasks["WATCH_VIDEO"] || tasks["WATCH_VIDEO_ON_MOBILE"]) {
                    let button = document.createElement('button');
                    button.classList.add('generic-button');
                    button.classList.add('primary');
                    button.innerHTML = `
                        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z" class=""></path>
                        </svg>
                        Watch Video
                    `;
                    button.addEventListener("click", (e) => {
                        e.stopPropagation();
                        openModal('category-modal', 'discordQuestInfo', quest, 'startOnVideoTab');
                    });
                    card.querySelector('.section3').insertBefore(button, openInDiscordButton);
                }

                card.addEventListener("click", () => {
                    openModal('category-modal', 'discordQuestInfo', quest);
                });

                if (currentOpenModalId && currentOpenModalId === quest.id) {
                    setTimeout(() => {
                        openModal('category-modal', 'discordQuestInfo', quest);
                    }, 500);
                }

                output.appendChild(card);
            });

            if (filteredData.length <= itemsPerPage) {
                paginationContainers.forEach(container => {
                    container.classList.add('hidden');
                });
            } else {
                paginationContainers.forEach(container => {
                    container.classList.remove('hidden');
                });
            }
    
            const totalPages = Math.ceil(filteredData.length / itemsPerPage);
            paginationContainers.forEach(container => {
                createPaginationControls(container, totalPages, page, renderQuestsPage);
            });

            const scrollToCategoryFromUrl = () => {
                const targetSkuId = currentOpenModalId;
                const targetListingId = scrollToCache;
                if (!targetSkuId && !targetListingId) return;

                const scrollToTarget = (targetIndex, selectorAttr, selectorValue) => {
                    const targetPage = Math.floor(targetIndex / itemsPerPage) + 1;
                    if (targetPage !== currentPage) {
                        renderQuestsPage(targetPage);
                    } else {
                        setTimeout(() => {
                            const el = document.querySelector(`[${selectorAttr}="${selectorValue}"]`);
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            if (targetListingId) {
                                removeParams("scrollTo");
                                scrollToCache = "";
                            }
                        }, 500);
                    }
                };
            
                if (targetSkuId) {
                    const targetIndex = filteredData.findIndex(cat =>
                        cat.id === targetSkuId
                    );
                
                    if (targetIndex !== -1) {
                        scrollToTarget(targetIndex, "data-id", filteredData[targetIndex].id);
                    }
                }
            };


            scrollToCategoryFromUrl();
        };

        window.renderQuestsPage = renderQuestsPage;
    
        renderQuestsPage(1);
    }


    async function renderProduct(category, product) {
        const card = document.createElement("div");
        card.classList.add("shop-category-card");
        card.innerHTML = `
            <div data-shop-card-preview-container>
            </div>
            <div class="card-bottom">
                <h3 class="shop-card-name"></h3>
                <p class="shop-card-summary"></p>
                <div class="shop-price-container" data-shop-price-container>
                </div>

                <div class="shop-card-var-container" data-shop-card-var-container>
                </div>

                <a class="shop-card-var-title" data-shop-card-var-title></a>
            </div>
            <div class="card-button-container"data-product-card-open-in-shop>
                <button class="card-button" onclick="redirectToLink('https://discord.com/shop#itemSkuId=${product.sku_id}')" title="Open this item in the Discord Shop">Open In Discord</button>
            </div>
            <div class="shop-card-tag-container" data-shop-card-tag-container>
            </div>
        `;

        if (product.name) card.querySelector('.shop-card-name').textContent = product.name;

        const cardTag = card.querySelector("[data-shop-card-tag-container]");

        const priceContainer = card.querySelector("[data-shop-price-container]");

        if (product.prices) {
            let extension = null;
            let priceStandard = null;
            let priceStandardCrossed = null;
            let priceOrb = null;

            product.prices["0"]?.country_prices?.prices?.forEach(price => {
                if (price.currency === "usd") priceStandard = price.amount;
                if (price.currency === "discord_orb") priceOrb = price.amount;
            });
            
            product.prices["4"]?.country_prices?.prices?.forEach(price => {
                if (price.currency === "usd") priceStandardCrossed = price.amount;
            });

            if (currentUserData?.premium_type === 2) {
                priceStandard = priceStandardCrossed;
            }
            
            // 2. Convert to Local Currency if settings exist
            const settingCurrency = Number(settingsStore.currency);
            const currencyKey = Object.keys(currency_types).find(key => Number(key) === settingCurrency);

            if (currencyKey) {
                const details = converted_currencies[currencyKey];
                extension = details?.extension ?? "??$";

                if (settingCurrency !== 0) {
                    // Normalize keys (prevents number vs string issues)
                    const keyStandard = String(priceStandard);
                    const keyCrossed = String(priceStandardCrossed);
                
                    const standardVal = details?.amounts?.[keyStandard];
                    const crossedVal = details?.amounts?.[keyCrossed];
                
                    // Handle independently (fixes your issue)
                    priceStandard =
                        standardVal === undefined ? "???" : standardVal;
                
                    priceStandardCrossed =
                        crossedVal === undefined ? "???" : crossedVal;
                }
            
                // Format safely
                if (details?.display_type === "fixed") {
                    if (typeof priceStandard === "number") {
                        priceStandard = (priceStandard / 100).toFixed(2).replace('.00', '');
                    }
                
                    if (typeof priceStandardCrossed === "number") {
                        priceStandardCrossed = (priceStandardCrossed / 100).toFixed(2).replace('.00', '');
                    }
                } 
                else if (details?.display_type === "locale") {
                    if (typeof priceStandard === "number") {
                        priceStandard = priceStandard.toLocaleString("en-US");
                    }
                
                    if (typeof priceStandardCrossed === "number") {
                        priceStandardCrossed = priceStandardCrossed.toLocaleString("en-US");
                    }
                }
            }

            let orbsExclusive = false;

            const standardPriceCheck = product.prices["0"]?.country_prices?.prices?.find(p => p.currency === "usd");
            const nitroPriceCheck = product.prices["4"]?.country_prices?.prices?.find(p => p.currency === "usd");

            if (!standardPriceCheck && !nitroPriceCheck) {
                orbsExclusive = true;
            }

            if (priceStandard !== null && orbsExclusive === false) {
                let us_price = document.createElement("div");
                let fullprice = extension + priceStandard;
                if (category.sku_id === discord_categories.DISXCORE) {
                    fullprice = "Included with Nitro";
                }
    
                us_price.innerHTML = `
                    <svg class="nitro-icon" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.7473 39C52.7473 43.1925 49.6598 46.3125 45.5323 46.3125C44.5742 46.3262 43.6233 46.1454 42.7372 45.7811C41.851 45.4168 41.0479 44.8765 40.3765 44.1929C39.7051 43.5094 39.1793 42.6967 38.831 41.8042C38.4826 40.9116 38.3189 39.9576 38.3498 39C38.3498 34.8075 41.4373 31.6875 45.5648 31.6875C49.6923 31.6875 52.7798 34.8075 52.7798 39H52.7473ZM74.7498 39C74.7498 55.2825 61.7498 68.25 45.5323 68.25C38.952 68.2896 32.5537 66.0919 27.3866 62.0173C22.2195 57.9427 18.5905 52.2331 17.0948 45.825H10.8548L7.92976 32.175H17.2248C18.0698 29.055 19.4348 26.0325 21.1573 23.4H6.14226L3.24976 9.75H44.6548C62.1723 9.75 74.7498 22.7175 74.7498 39ZM60.9048 39C60.9048 30.3225 54.0798 23.4 45.5323 23.4C43.4955 23.4041 41.4797 23.8121 39.6016 24.6004C37.7236 25.3887 36.0204 26.5415 34.5908 27.9923C33.1612 29.4431 32.0335 31.1629 31.2729 33.0524C30.5123 34.9418 30.134 36.9634 30.1598 39C30.1598 47.6775 36.9848 54.6 45.5323 54.6C47.569 54.5959 49.5848 54.1879 51.4629 53.3996C53.341 52.6114 55.0441 51.4585 56.4737 50.0077C57.9033 48.5569 59.031 46.8371 59.7916 44.9476C60.5522 43.0582 60.9305 41.0366 60.9048 39Z" fill="currentColor"/>
                    </svg>
                    <a>${fullprice}</a>
                `;
                
                priceContainer.appendChild(us_price);
            }

            if (priceOrb !== null) {
                let orb_price = document.createElement("div");
    
                orb_price.innerHTML = `
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_402_76)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.2666 7.24549C39.4788 6.91817 38.5938 6.91817 37.8058 7.24549L17.533 15.6691C16.7452 15.9964 16.1194 16.6242 15.7931 17.4144L7.39573 37.7508C7.06942 38.541 7.06942 39.4288 7.39573 40.219L15.7931 60.5554C16.1194 61.3456 16.7452 61.9734 17.533 62.3008L37.8058 70.7244C38.5938 71.0516 39.4788 71.0516 40.2666 70.7244L60.5396 62.3008C61.3273 61.9734 61.9532 61.3456 62.2796 60.5554L70.6767 40.219C71.0031 39.4288 71.0031 38.541 70.6767 37.7508L62.2796 17.4144C61.9532 16.6242 61.3273 15.9964 60.5396 15.6691L40.2666 7.24549ZM37.9701 15.8347C38.5581 15.2447 39.5117 15.2447 40.0997 15.8346L62.066 37.8684C62.6542 38.4584 62.6542 39.4148 62.066 40.0048L40.0997 62.0386C39.5117 62.6286 38.5581 62.6286 37.9701 62.0386L16.006 40.0048C15.4179 39.4148 15.4179 38.4584 16.006 37.8684L37.9701 15.8347Z" fill="currentColor"/>
                            <path d="M39.9865 27.1512C40.5578 29.7174 41.8419 32.069 43.6904 33.9334C45.5388 35.798 47.8759 37.0992 50.4309 37.6864C50.6809 37.7444 50.9038 37.8856 51.0635 38.087C51.2232 38.2884 51.3102 38.5382 51.3102 38.7954C51.3102 39.0528 51.2232 39.3026 51.0635 39.504C50.9038 39.7054 50.6809 39.8466 50.4309 39.9044C47.8789 40.4776 45.5418 41.7668 43.6926 43.622C41.8431 45.477 40.558 47.8214 39.9865 50.3814C39.9289 50.6322 39.7882 50.856 39.5874 51.0162C39.3866 51.1764 39.1376 51.2636 38.881 51.2636C38.6244 51.2636 38.3756 51.1764 38.1748 51.0162C37.974 50.856 37.8333 50.6322 37.7755 50.3814C37.1923 47.822 35.8995 45.4804 34.0463 43.6266C32.1931 41.7728 29.855 40.4824 27.302 39.9044C27.0522 39.8466 26.8291 39.7054 26.6694 39.504C26.5097 39.3026 26.4227 39.0528 26.4227 38.7954C26.4227 38.5382 26.5097 38.2884 26.6694 38.087C26.8291 37.8856 27.0522 37.7444 27.302 37.6864C29.8558 37.1 32.1929 35.803 34.0455 33.9448C35.8979 32.0866 37.1907 29.742 37.7755 27.1804C37.8299 26.9287 37.9677 26.7031 38.1662 26.5401C38.365 26.3772 38.6128 26.2867 38.8694 26.2833C39.126 26.2799 39.3762 26.3639 39.579 26.5215C39.782 26.6791 39.9257 26.9011 39.9865 27.1512Z" fill="currentColor"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_402_76">
                                <rect width="64" height="64" fill="white" transform="translate(7 7)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <a>${formatOrbPrice.format(priceOrb)}</a>
                `;
                
                priceContainer.appendChild(orb_price);
            }

            if (currentUserData?.premium_type === 2) {} else {
                priceContainer.querySelector('.nitro-icon')?.remove();
            }
            if (category.sku_id === discord_categories.DISXCORE) {
                priceContainer.querySelector('.nitro-icon')?.remove();
            }

            if (!priceStandard && !priceOrb) {
                orbsExclusive = false;
            }

            if (orbsExclusive) {
                createCardTag('ORBS EXCLUSIVE')
            } else if (product.premium_type === 2) {
                createCardTag('NITRO EXCLUSIVE')
            }
        }

        function createCardTag(text, type, toDate) {
            let tag = document.createElement("p");
            tag.classList.add('shop-card-tag');
            tag.textContent = text;
            cardTag.appendChild(tag);
            if (text === 'ORBS EXCLUSIVE') {
                cardTag.innerHTML = `
                    <p class="shop-card-tag">ORBS EXCLUSIVE</p>
                    <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1701 0.137761C17.9839 0.0138636 17.7574 -0.0287596 17.5405 0.0192529L11.9581 1.25505C11.7412 1.30307 11.5516 1.4378 11.431 1.62961L8.32825 6.56577C8.20768 6.75757 8.16603 6.99072 8.21244 7.21395L9.40677 12.9589C9.45318 13.1822 9.58387 13.3772 9.77006 13.5011L14.5619 16.6896C14.7481 16.8135 14.9746 16.8561 15.1915 16.8081L20.7739 15.5723C20.9908 15.5243 21.1804 15.3895 21.301 15.1977L24.4037 10.2616C24.5243 10.0698 24.5659 9.83661 24.5195 9.61337L23.3252 3.86839C23.2788 3.64515 23.1481 3.45013 22.9619 3.32624L18.1701 0.137761ZM17.1795 2.28279C17.3576 2.15618 17.6016 2.20209 17.7243 2.38533L22.3108 9.22957C22.4336 9.41283 22.3888 9.664 22.2106 9.79061L15.5563 14.5191C15.3782 14.6457 15.1342 14.5998 15.0115 14.4165L10.4255 7.57236C10.3028 7.3891 10.3476 7.13794 10.5258 7.01132L17.1795 2.28279Z" fill="white"/>
                        <path d="M17.1644 5.35162C17.1901 6.05305 17.4084 6.73245 17.7938 7.31109C18.1793 7.88977 18.7162 8.34404 19.3424 8.62129C19.4036 8.64857 19.4541 8.69638 19.4855 8.75696C19.5169 8.81755 19.5274 8.88733 19.5153 8.95488C19.5033 9.02247 19.4693 9.08389 19.419 9.12909C19.3687 9.17428 19.305 9.20063 19.2383 9.20377C18.5585 9.23139 17.9 9.4574 17.3398 9.85554C16.7796 10.2536 16.3407 10.8074 16.0744 11.4522C16.0479 11.5152 16.0014 11.5672 15.9425 11.5996C15.8836 11.632 15.8158 11.6429 15.7501 11.6306C15.6845 11.6182 15.6249 11.5833 15.5811 11.5316C15.5372 11.4799 15.5117 11.4143 15.5087 11.3457C15.4795 10.6455 15.2586 9.96826 14.8715 9.39218C14.4843 8.8161 13.9466 8.36462 13.3205 8.08988C13.2593 8.06267 13.2088 8.01485 13.1774 7.95427C13.146 7.89368 13.1355 7.8239 13.1476 7.7563C13.1596 7.68876 13.1936 7.62734 13.2439 7.58214C13.2942 7.53695 13.3579 7.51061 13.4246 7.50741C14.1055 7.4764 14.7643 7.24835 15.3255 6.84959C15.8867 6.45081 16.3275 5.89735 16.5973 5.25281C16.623 5.18934 16.6689 5.13671 16.7273 5.10349C16.7858 5.07028 16.8535 5.05844 16.9193 5.06991C16.9851 5.08137 17.0452 5.11548 17.0897 5.16663C17.1342 5.2178 17.1606 5.28301 17.1644 5.35162Z" fill="white"/>
                        <path d="M6.74732 2.1207C6.93834 2.00471 7.16632 1.97159 7.38113 2.02866L10.0393 2.73473L8.60252 5.04222L7.65117 4.30565C7.47824 4.17168 7.2324 4.20722 7.10246 4.38517L2.24814 11.0315C2.11827 11.2095 2.1532 11.4623 2.32613 11.5963L8.78619 16.5995C8.95913 16.7335 9.20471 16.698 9.33465 16.52L10.5494 14.8568L13.2335 16.66L9.6941 18.81C9.50315 18.926 9.27514 18.9591 9.06029 18.9021L3.53177 17.4333C3.31699 17.3763 3.13299 17.2337 3.02015 17.037L0.116293 11.9749C0.00345567 11.7782 -0.0288863 11.5434 0.0263657 11.3223L1.44819 5.63227C1.50343 5.41121 1.64163 5.22184 1.83254 5.10584L6.74732 2.1207Z" fill="white"/>
                        <path d="M7.57699 7.18885L8.84132 13.3849C8.84903 13.4228 8.85925 13.4599 8.87129 13.496C8.85859 13.5441 8.83458 13.5885 8.80092 13.6251C8.75507 13.6749 8.69423 13.7072 8.62818 13.7168C8.56209 13.7264 8.4947 13.7128 8.43715 13.678C8.37963 13.6432 8.33518 13.5893 8.31115 13.5252C8.06768 12.8704 7.64936 12.2997 7.10449 11.8789C6.55963 11.4582 5.91038 11.2044 5.23176 11.147C5.16538 11.1411 5.10288 11.1121 5.05444 11.0649C5.00598 11.0177 4.97441 10.9549 4.96502 10.8868C4.95565 10.8188 4.96883 10.7495 5.00262 10.6902C5.03641 10.631 5.08876 10.5853 5.15098 10.5607C5.78738 10.3101 6.34218 9.87982 6.75164 9.3193C7.161 8.75882 7.40845 8.09071 7.46573 7.3917C7.47058 7.32314 7.498 7.25838 7.54321 7.20788C7.55304 7.1969 7.56353 7.18666 7.57471 7.17737C7.57543 7.18116 7.57622 7.18506 7.57699 7.18885Z" fill="white"/>
                    </svg>
                `;
                cardTag.classList.add('has-tooltip');
                cardTag.setAttribute('data-tooltip', `This item is exclusive to the Orbs currency, it can be claimed with Discord Orbs`);
            } else if (text === 'NITRO EXCLUSIVE') {
                cardTag.innerHTML = `
                    <p class="shop-card-tag">NITRO EXCLUSIVE</p>
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.7473 39C52.7473 43.1925 49.6598 46.3125 45.5323 46.3125C44.5742 46.3262 43.6233 46.1454 42.7372 45.7811C41.851 45.4168 41.0479 44.8765 40.3765 44.1929C39.7051 43.5094 39.1793 42.6967 38.831 41.8042C38.4826 40.9116 38.3189 39.9576 38.3498 39C38.3498 34.8075 41.4373 31.6875 45.5648 31.6875C49.6923 31.6875 52.7798 34.8075 52.7798 39H52.7473ZM74.7498 39C74.7498 55.2825 61.7498 68.25 45.5323 68.25C38.952 68.2896 32.5537 66.0919 27.3866 62.0173C22.2195 57.9427 18.5905 52.2331 17.0948 45.825H10.8548L7.92976 32.175H17.2248C18.0698 29.055 19.4348 26.0325 21.1573 23.4H6.14226L3.24976 9.75H44.6548C62.1723 9.75 74.7498 22.7175 74.7498 39ZM60.9048 39C60.9048 30.3225 54.0798 23.4 45.5323 23.4C43.4955 23.4041 41.4797 23.8121 39.6016 24.6004C37.7236 25.3887 36.0204 26.5415 34.5908 27.9923C33.1612 29.4431 32.0335 31.1629 31.2729 33.0524C30.5123 34.9418 30.134 36.9634 30.1598 39C30.1598 47.6775 36.9848 54.6 45.5323 54.6C47.569 54.5959 49.5848 54.1879 51.4629 53.3996C53.341 52.6114 55.0441 51.4585 56.4737 50.0077C57.9033 48.5569 59.031 46.8371 59.7916 44.9476C60.5522 43.0582 60.9305 41.0366 60.9048 39Z" fill="currentColor"/>
                    </svg>
                `;
                cardTag.classList.add('has-tooltip');
                cardTag.setAttribute('data-tooltip', `This item is exclusive to Nitro users, it can be used at any time with Nitro`);
            } else if (text === 'RANDOM') {
                cardTag.innerHTML = `
                    <p class="shop-card-tag">RANDOM</p>
                    <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g fill="currentColor">
                        <path d="M5 4a1 1 0 000 2h.01a1 1 0 000-2H5zM7 8a1 1 0 011-1h.01a1 1 0 010 2H8a1 1 0 01-1-1zM11.01 10a1 1 0 100 2h.01a1 1 0 100-2h-.01z"/>
                        <path fill-rule="evenodd" d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5zM2.5 3.25a.75.75 0 01.75-.75h9.5a.75.75 0 01.75.75v9.5a.75.75 0 01-.75.75h-9.5a.75.75 0 01-.75-.75v-9.5z" clip-rule="evenodd"/></g>
                    </svg>
                `;
                cardTag.classList.add('has-tooltip');
                cardTag.setAttribute('data-tooltip', `This Profile Effect has a random outcome each time it is played`);
            }
            if (type === 1) {
                function updateTimer() {
                    const now = new Date();
                    const timeDiff = toDate - now;
                    cardTag.innerHTML = `
                        <p class="shop-card-tag">time</p>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12L9.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;
                    const tagText = cardTag.querySelector('.shop-card-tag');
                    cardTag.classList.add('has-tooltip');
        
                    if (timeDiff <= 0) {
                        tagText.textContent = `OFF SALE`;
                        clearInterval(timerInterval);
                        cardTag.setAttribute('data-tooltip', `This item was limited edition and is no longer in the Discord shop`);
                    } else {
                        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
                        tagText.textContent = `${days} DAYS LEFT IN SHOP`;
                        if (days === 0) tagText.textContent = `LAST DAY IN SHOP`;
                        cardTag.setAttribute('data-tooltip', `Leaves the Discord shop in ${days} Days, ${hours} Hours, ${minutes} Minutes and ${seconds} Seconds`);
                    }
                }
        
                const timerInterval = setInterval(updateTimer, 1000);
                updateTimer();
            } else if (type === 2) {
                function updateTimer() {
                    const now = new Date();
                    const timeDiff = toDate - now;
        
                    if (timeDiff <= 0) {
                        tag.textContent = `EXPIRED`;
                        clearInterval(timerInterval);
                    } else {
                        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / 1000);
                        tag.textContent = `EXPIRES IN ${days}D ${hours}H`;
                    }
                }
        
                const timerInterval = setInterval(updateTimer, 1000);
                updateTimer();
            }
        }

        const unpublishedAt = new Date(category.unpublished_at);
                                
        if (category.unpublished_at && !isNaN(unpublishedAt.getTime())) {
            createCardTag(null, 1, unpublishedAt)
        }

        const expiresAt = new Date(product.expires_at);
                                
        if (product.expires_at && !isNaN(expiresAt.getTime())) {
            createCardTag(null, 2, expiresAt)
        }

        const previewContainer = card.querySelector('[data-shop-card-preview-container]');
        const itemName = card.querySelector('.shop-card-name');
        const itemSummary = card.querySelector('.shop-card-summary');
        let randomProfileEffect = false;

        if (product.type === item_types.AVATAR_DECORATION) {
            previewContainer.classList.add('type-0-preview-container-container');
            previewContainer.innerHTML = `
                <div class="type-0-preview-container">
                    <div class="type-0-preview-background"></div>
                    <img class="type-0-preview" loading="lazy" src="https://cdn.discordapp.com/avatar-decoration-presets/${product.items.find(item => item.type === 0).asset}.png?size=4096&passthrough=false"></img>
                </div>
            `;

            const decorationPreview = previewContainer.querySelector('.type-0-preview')
            card.addEventListener("mouseenter", () => {
                decorationPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${product.items.find(item => item.type === 0).asset}.png?size=4096&passthrough=true`;
            });
            card.addEventListener("mouseleave", () => {
                decorationPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${product.items.find(item => item.type === 0).asset}.png?size=4096&passthrough=false`;
            });

        } else if (product.type === item_types.PROFILE_EFFECT) {
            previewContainer.classList.add('type-1-preview-container');

            let effectBG = document.createElement("div");

            effectBG.classList.add('type-1-effect-background')
    
            effectBG.innerHTML = profileEffectBG;
            
            card.appendChild(effectBG);
            
            const profileEffect = product.items[0];

            if (product.items[0].effects[0].randomizedSources.length !== 0) randomProfileEffect = true;
                
            if (profileEffect) {
                previewContainer.style.width = '100%';
                previewContainer.style.height = '100%';
                previewContainer.style.aspectRatio = '0.1';

                const effectsCard = new ProfileEffectsCard(previewContainer, profileEffect, card);
                
                card._profileEffectsCard = effectsCard;
            } else {
                previewContainer.innerHTML = ``;
            }
        } else if (product.type === item_types.NAMEPLATE) {

            previewContainer.classList.add('type-2-preview-container')

            function createDudNameplatePreview(type) {
                let null_nameplate_user = document.createElement("div");
                
                null_nameplate_user.classList.add('nameplate-null-user');
                null_nameplate_user.innerHTML = `
                    <div class="nameplate-null-user-avatar"></div>
                    <div class="nameplate-null-user-name"></div>
                    <div class="nameplate-preview-status-bg"></div>
                    <div class="nameplate-preview-status-color"></div>
                `;
                if (type === 1) {
                    null_nameplate_user.querySelector('.nameplate-null-user-name').classList.add('_1')
                } else {
                    null_nameplate_user.querySelector('.nameplate-null-user-name').classList.add('_2')
                }

                previewContainer.appendChild(null_nameplate_user);
            }

            previewContainer.innerHTML = `
                <div class="nameplate-fade-top"></div>
                <div class="nameplate-fade-bottom"></div>
            `;

            createDudNameplatePreview(1);
            createDudNameplatePreview(2);

            let nameplate_user = document.createElement("div");
                
            nameplate_user.classList.add('nameplate-null-user');
            nameplate_user.classList.add('nameplate-preview');
            nameplate_user.innerHTML = `
                <video disablepictureinpicture muted loop class="nameplate-null-user nameplate-video-preview" style="position: absolute; height: 100%; width: auto; right: 0;"></video>
                <div class="nameplate-user-avatar"></div>
                <p class="nameplate-user-name">Nameplate</p>
            `;

            if (currentUserData) {
                nameplate_user.querySelector('.nameplate-user-name').textContent = currentUserData.global_name ? currentUserData.global_name : currentUserData.username;
                let userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.webp?size=128';
                if (currentUserData.avatar.includes('a_')) {
                    userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.gif?size=128';
                }

                nameplate_user.querySelector('.nameplate-user-avatar').style.backgroundImage = `url(${userAvatar})`;
            }

            const item = product.items[0];
            const paletteName = item.palette;
            const bgcolor = nameplate_palettes[paletteName].darkBackground;

            const videoElement = nameplate_user.querySelector(".nameplate-video-preview");

            videoElement.src = `https://cdn.discordapp.com/assets/collectibles/${item.asset}asset.webm`;

            nameplate_user.style.backgroundImage = `linear-gradient(90deg, #00000000 -30%, ${bgcolor} 200%)`;

            card.addEventListener("mouseenter", () => {
                videoElement.play();
            });
            card.addEventListener("mouseleave", () => {
                videoElement.pause();
            });

            previewContainer.appendChild(nameplate_user);

            createDudNameplatePreview(2);
            createDudNameplatePreview(1);

        } else if (product.type === item_types.PROFILE_FRAME) {

            previewContainer.classList.add('type-3-preview-container')

            let frameContainer = document.createElement("div");

            frameContainer.classList.add('frameContainer');
    
            frameContainer.innerHTML = profileEffectBG;
            
            previewContainer.appendChild(frameContainer);

            const frameContainerDiv = frameContainer.querySelector('.frameContainerDiv');
            const frameContainerDivback = frameContainer.querySelector('.frameContainerDivback');
            const layers = product.items[0].layers;
            layers.forEach(layer => {
                const src = `https://cdn.discordapp.com/media/v1/collectibles-shop/${product.sku_id}/${layer.id}/static`;
                let img = document.createElement("img");
                img.src = src;
                img.classList.add(`a-${layer.anchor}`);
                img.classList.add(`t-${layer.type}`);
                if (layer.order === "front") frameContainerDiv.appendChild(img);
                if (layer.order === "back") frameContainerDivback.appendChild(img);
            });
            
        } else if (product.type === item_types.BUNDLE) {
            previewContainer.classList.add('type-1000-preview-container')

            if (experimentIs('use_bundle_preview_assets', 1) && product.preview_assets?.fg_static) {
                let bundleContent = document.createElement("div");
                bundleContent.classList.add('bundle-preview-assets')
                bundleContent.innerHTML = `
                    <img class="bg" loading="lazy" src="${product.preview_assets.bg_static}"></img>
                    <img class="fg" loading="lazy" src="${product.preview_assets.fg_static}"></img>
                `;
                itemSummary.textContent = `${product.items.length} Items`;
                
                previewContainer.appendChild(bundleContent);
            } else {
                if (product.items.find(item => item.type === item_types.AVATAR_DECORATION)) {

                    let decorationBundleContainer = document.createElement("div");

                    decorationBundleContainer.classList.add('type-0-preview-container')
    
                    decorationBundleContainer.innerHTML = `
                        <div class="type-0-preview-background"></div>
                        <img class="type-0-preview" loading="lazy" src="https://cdn.discordapp.com/avatar-decoration-presets/${product.items.find(item => item.type === item_types.AVATAR_DECORATION).asset}.png?size=4096&passthrough=false"></img>
                    `;
                    
                    previewContainer.appendChild(decorationBundleContainer);

                    const decorationPreview = decorationBundleContainer.querySelector('.type-0-preview')
                    card.addEventListener("mouseenter", () => {
                        decorationPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${product.items.find(item => item.type === item_types.AVATAR_DECORATION).asset}.png?size=4096&passthrough=true`;
                    });
                    card.addEventListener("mouseleave", () => {
                        decorationPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${product.items.find(item => item.type === item_types.AVATAR_DECORATION).asset}.png?size=4096&passthrough=false`;
                    });
                }
                if (product.items.find(item => item.type === item_types.PROFILE_EFFECT)) {

                    let effectBundleContainer = document.createElement("div");

                    effectBundleContainer.classList.add('effectBundleContainer');
    
                    effectBundleContainer.innerHTML = profileEffectBG;

                    previewContainer.appendChild(effectBundleContainer);

                    const effectBundleContainerDiv = effectBundleContainer.querySelector('.effectBundleContainerDiv');
                    const productItem = product.items && product.items.find(item => item.type === item_types.PROFILE_EFFECT) ? product.items.find(item => item.type === item_types.PROFILE_EFFECT) : null;

                    const profileEffect = productItem;

                    if (profileEffect) {
                        effectBundleContainerDiv.style.width = '100%';
                        effectBundleContainerDiv.style.height = '100%';
                        effectBundleContainerDiv.style.aspectRatio = '0.1';

                        const effectsCard = new ProfileEffectsCard(effectBundleContainerDiv, profileEffect, card);

                        card._profileEffectsCard = effectsCard;
                    } else {
                        effectBundleContainerDiv.innerHTML = ``;
                    }
                }
                if (product.items.find(item => item.type === item_types.NAMEPLATE)) {

                    previewContainer.classList.add('three-way-bundle')


                    let nameplateBundleContainer = document.createElement("div");

                    nameplateBundleContainer.classList.add('type-2-preview-container')

                    let nameplate_user = document.createElement("div");

                    nameplate_user.classList.add('nameplate-null-user');
                    nameplate_user.classList.add('nameplate-preview');
                    nameplate_user.innerHTML = `
                        <video disablepictureinpicture muted loop class="nameplate-null-user nameplate-video-preview" style="position: absolute; height: 100%; width: auto; right: 0;"></video>
                        <div class="nameplate-user-avatar"></div>
                        <p class="nameplate-user-name">Nameplate</p>
                    `;

                    if (currentUserData) {
                        nameplate_user.querySelector('.nameplate-user-name').textContent = currentUserData.global_name ? currentUserData.global_name : currentUserData.username;
                        let userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.webp?size=128';
                        if (currentUserData.avatar.includes('a_')) {
                            userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.gif?size=128';
                        }

                        nameplate_user.querySelector('.nameplate-user-avatar').style.backgroundImage = `url(${userAvatar})`;
                    }

                    const item = product.items.find(item => item.type === item_types.NAMEPLATE);
                    const paletteName = item.palette;
                    const bgcolor = nameplate_palettes[paletteName].darkBackground;

                    const videoElement = nameplate_user.querySelector(".nameplate-video-preview");

                    videoElement.src = `https://cdn.discordapp.com/assets/collectibles/${item.asset}asset.webm`;

                    nameplate_user.style.backgroundImage = `linear-gradient(90deg, #00000000 -30%, ${bgcolor} 200%)`;

                    card.addEventListener("mouseenter", () => {
                        videoElement.play();
                    });
                    card.addEventListener("mouseleave", () => {
                        videoElement.pause();
                    });

                    nameplateBundleContainer.appendChild(nameplate_user);
                    previewContainer.appendChild(nameplateBundleContainer);
                }
            }
        } else if (product.type === item_types.VARIANTS_GROUP) {
            previewContainer.classList.add('type-2000-preview-container')

            const variantContainer = card.querySelector("[data-shop-card-var-container]");
            variantContainer.innerHTML = "";
            let currentSelectedVariant = null;
            let isFirstTimeLoadingVariant = true;

            product.variants.forEach((variant, index) => {
                
                let variantColorBlock = document.createElement("div");

                variantColorBlock.classList.add("shop-card-var");
                variantColorBlock.id = "shop-card-var";
                variantColorBlock.style.backgroundColor = `${variant.variant_value}`;
        
                // Add click event listener to switch variants
                variantColorBlock.addEventListener("click", () => {
                    if (currentSelectedVariant) {
                        currentSelectedVariant.classList.remove("shop-card-var-selected");
                    }
                    variantColorBlock.classList.add("shop-card-var-selected");
                    currentSelectedVariant = variantColorBlock;
                    applyVariant(variant)
                });
        
                // Append the color block to the container
                variantContainer.appendChild(variantColorBlock);
        
                // Set the first variant as the default selected
                if (index === 0) {
                    currentSelectedVariant = variantColorBlock;
                    variantColorBlock.classList.add("shop-card-var-selected");
                }
            });

            let firstTime = true;

            function applyVariant(selectedVariant) {
                card.querySelector("[data-shop-card-var-title]").textContent = `(${selectedVariant.variant_label})`;

                itemName.textContent = selectedVariant.base_variant_name;

                if (selectedVariant.type === item_types.AVATAR_DECORATION) {
                    previewContainer.innerHTML = "";
                    let decorationBundleContainer = document.createElement("div");
    
                    decorationBundleContainer.classList.add('type-0-preview-container')
        
                    decorationBundleContainer.innerHTML = `
                        <div class="type-0-preview-background"></div>
                        <img class="type-0-preview" loading="lazy" src="https://cdn.discordapp.com/avatar-decoration-presets/${selectedVariant.items[0].asset}.png?size=4096&passthrough=false"></img>
                    `;
                    
                    previewContainer.appendChild(decorationBundleContainer);
                    
                    // Add the avatar decoration based on the selected variant
                    selectedVariant.items?.forEach(item => {
                        const decorationPreview = decorationBundleContainer.querySelector('.type-0-preview')
                        if (isFirstTimeLoadingVariant == true) {
                            decorationPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                            isFirstTimeLoadingVariant = false;
                        } else {
                            decorationPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                        }

                        card.addEventListener("mouseenter", () => {
                            decorationPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                        });
                        card.addEventListener("mouseleave", () => {
                            decorationPreview.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                        });
                    });
                } else if (selectedVariant.type === item_types.PROFILE_EFFECT) {
                    previewContainer.innerHTML = "";
                    previewContainer.classList.add('type-1-preview-container');

                    let effectBG = document.createElement("div");

                    effectBG.classList.add('type-1-effect-background')
    
                    effectBG.innerHTML = profileEffectBG;

                    card.appendChild(effectBG);


                    const profileEffect = selectedVariant.items[0];

                    if (profileEffect) {
                        previewContainer.style.width = '100%';
                        previewContainer.style.height = '100%';
                        previewContainer.style.aspectRatio = '0.1';

                        if (isFirstTimeLoadingVariant == true) {
                            const effectsCard = new ProfileEffectsCard(previewContainer, profileEffect, card, {
                                startImmediately: false
                            });
                            isFirstTimeLoadingVariant = false;

                            card._profileEffectsCard = effectsCard;
                        } else {
                            card._profileEffectsCard.updateProfileEffect(profileEffect, true);
                        }
                    } else {
                        previewContainer.innerHTML = ``;
                    }
                } else if (selectedVariant.type === item_types.NAMEPLATE) {

                    previewContainer.classList.add('type-2-preview-container')

                    function createDudNameplatePreview(type) {
                        let null_nameplate_user = document.createElement("div");

                        null_nameplate_user.classList.add('nameplate-null-user');
                        null_nameplate_user.innerHTML = `
                            <div class="nameplate-null-user-avatar"></div>
                            <div class="nameplate-null-user-name"></div>
                            <div class="nameplate-preview-status-bg"></div>
                            <div class="nameplate-preview-status-color"></div>
                        `;
                        if (type === 1) {
                            null_nameplate_user.querySelector('.nameplate-null-user-name').classList.add('_1')
                        } else {
                            null_nameplate_user.querySelector('.nameplate-null-user-name').classList.add('_2')
                        }

                        previewContainer.appendChild(null_nameplate_user);
                    }

                    previewContainer.innerHTML = `
                        <div class="nameplate-fade-top"></div>
                        <div class="nameplate-fade-bottom"></div>
                    `;

                    createDudNameplatePreview(1);
                    createDudNameplatePreview(2);

                    let nameplate_user = document.createElement("div");

                    nameplate_user.classList.add('nameplate-null-user');
                    nameplate_user.classList.add('nameplate-preview');
                    nameplate_user.innerHTML = `
                        <video disablepictureinpicture muted loop class="nameplate-null-user nameplate-video-preview" style="position: absolute; height: 100%; width: auto; right: 0;"></video>
                        <div class="nameplate-user-avatar"></div>
                        <p class="nameplate-user-name">Nameplate</p>
                    `;

                    if (currentUserData) {
                        nameplate_user.querySelector('.nameplate-user-name').textContent = currentUserData.global_name ? currentUserData.global_name : currentUserData.username;
                        let userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.webp?size=128';
                        if (currentUserData.avatar.includes('a_')) {
                            userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.gif?size=128';
                        }

                        nameplate_user.querySelector('.nameplate-user-avatar').style.backgroundImage = `url(${userAvatar})`;
                    }

                    const item = selectedVariant.items[0];
                    const paletteName = item.palette;
                    const bgcolor = nameplate_palettes[paletteName].darkBackground;

                    const videoElement = nameplate_user.querySelector(".nameplate-video-preview");

                    videoElement.src = `https://cdn.discordapp.com/assets/collectibles/${item.asset}asset.webm`;

                    nameplate_user.style.backgroundImage = `linear-gradient(90deg, #00000000 -30%, ${bgcolor} 200%)`;

                    if (firstTime === false) {
                        videoElement.play();
                    }

                    card.addEventListener("mouseenter", () => {
                        videoElement.play();
                        firstTime = false;
                    });
                    card.addEventListener("mouseleave", () => {
                        videoElement.pause();
                    });

                    previewContainer.appendChild(nameplate_user);

                    createDudNameplatePreview(2);
                    createDudNameplatePreview(1);

                } else if (selectedVariant.type === item_types.PROFILE_FRAME) {
                    previewContainer.innerHTML = ``;
                    previewContainer.classList.add('type-3-preview-container')

                    let frameContainer = document.createElement("div");

                    frameContainer.classList.add('frameContainer');
    
                    frameContainer.innerHTML = profileEffectBG;

                    previewContainer.appendChild(frameContainer);

                    const frameContainerDiv = frameContainer.querySelector('.frameContainerDiv');
                    const frameContainerDivback = frameContainer.querySelector('.frameContainerDivback');
                    const layers = selectedVariant.items[0].layers;
                    layers.forEach(layer => {
                        const src = `https://cdn.discordapp.com/media/v1/collectibles-shop/${selectedVariant.sku_id}/${layer.id}/static`;
                        let img = document.createElement("img");
                        img.src = src;
                        img.classList.add(`a-${layer.anchor}`);
                        img.classList.add(`t-${layer.type}`);
                        if (layer.order === "front") frameContainerDiv.appendChild(img);
                        if (layer.order === "back") frameContainerDivback.appendChild(img);
                    });

                }
            }
        
            // Apply the default variant (first one) initially
            if (product.variants.length > 0) {
                applyVariant(product.variants[0]);
            }

        } else if (product.type === item_types.EXTERNAL_SKU) {
            if (product.sku_id === external_skus.ORB_PROFILE_BADGE) {
                previewContainer.classList.add('type-3000-card-preview-container');
                    
                previewContainer.innerHTML = `
                    <video loop disablepictureinpicture class="type-3000-card-preview profile-badge-orb-preview" id="orb-profile-badge-card-video" src="https://cdn.discordapp.com/assets/content/ccaa60fae2114887bfa2e413be11d62c6d194139ee0f33671825ff06a1050692.webm"></video>
                `;

                card.addEventListener("mouseenter", () => {
                    card.querySelector("#orb-profile-badge-card-video").play();
                });
                card.addEventListener("mouseleave", () => {
                    card.querySelector("#orb-profile-badge-card-video").pause();
                    card.querySelector("#orb-profile-badge-card-video").currentTime = 0;
                });
            } else if (product.sku_id === external_skus.NITRO_CREDITS_3_DAYS || product.sku_id === external_skus.NITRO_CREDITS_1_DAY) {
                previewContainer.classList.add('type-3000-card-preview-container');
                    
                previewContainer.innerHTML = `
                    <svg class="type-3000-card-preview nitro-3-days-orb-preview" width="187" height="187" viewBox="0 0 187 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M161.164 3.17212H30.5663C16.8601 3.17212 5.74902 14.3031 5.74902 28.0339V158.866C5.74902 172.597 16.8601 183.728 30.5663 183.728H161.164C174.87 183.728 185.982 172.597 185.982 158.866V28.0339C185.982 14.3031 174.87 3.17212 161.164 3.17212Z" fill="url(#paint0_linear_170_2)"/>
                    <g filter="url(#filter0_d_170_2)">
                    <path d="M100.125 107.318C106.339 107.318 111.376 102.266 111.376 96.0332C111.376 89.8007 106.339 84.7483 100.125 84.7483C93.9113 84.7483 88.874 89.8007 88.874 96.0332C88.874 102.266 93.9113 107.318 100.125 107.318Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1214 50.8938C52.0146 50.8938 49.496 53.42 49.496 56.5362C49.496 59.6525 52.0146 62.1787 55.1214 62.1787H71.9979C75.1048 62.1787 77.6235 64.7049 77.6235 67.8211C77.6235 70.9373 75.1048 73.4635 71.9979 73.4635H46.6832C43.5763 73.4635 41.0576 75.9897 41.0576 79.106C41.0576 82.2222 43.5763 84.7484 46.6832 84.7484H60.7469C63.8539 84.7484 66.3724 87.2746 66.3724 90.3908C66.3724 93.5071 63.8539 96.0333 60.7469 96.0333H49.496C46.389 96.0333 43.8704 98.5595 43.8704 101.676C43.8704 104.792 46.389 107.318 49.496 107.318H56.5393C61.5352 126.787 79.1553 141.173 100.125 141.173C124.981 141.173 145.13 120.963 145.13 96.0333C145.13 71.1035 124.981 50.8938 100.125 50.8938H55.1214ZM100.125 118.603C112.553 118.603 122.627 108.498 122.627 96.0333C122.627 83.5683 112.553 73.4635 100.125 73.4635C87.6979 73.4635 77.6235 83.5683 77.6235 96.0333C77.6235 108.498 87.6979 118.603 100.125 118.603Z" fill="white"/>
                    <path d="M29.8064 84.7485C32.9133 84.7485 35.4319 82.2223 35.4319 79.1061C35.4319 75.9898 32.9133 73.4636 29.8064 73.4636H26.9936C23.8868 73.4636 21.3682 75.9898 21.3682 79.1061C21.3682 82.2223 23.8868 84.7485 26.9936 84.7485H29.8064Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_170_2" x="7.48094" y="42.5615" width="151.536" height="118.053" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="5.55489"/>
                    <feGaussianBlur stdDeviation="6.94361"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_170_2"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_170_2" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_170_2" x1="160.748" y1="183.303" x2="46.3474" y2="36.4729" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E978E6"/>
                    <stop offset="1" stop-color="#2F3EBB"/>
                    </linearGradient>
                    </defs>
                    </svg>
                `;
            } else {
                cardTag.innerHTML = `
                    <p class="shop-card-tag">UPDATE REQUIRED</p>
                `;
            }
        } else {
            createCardTag('UPDATE REQUIRED');
        }

        if (randomProfileEffect) {
            createCardTag('RANDOM');
        }

        card.addEventListener("click", (event) => {
            if (event.target.matches(".shop-card-var")) {
            } else {
                openModal('modalv2', 'fromCollectibleCard', category, product);
                addParams({itemSkuId: product.sku_id})
            }
        });

        if (currentOpenModalId === product.sku_id) {
            setTimeout(() => {
                openModal('modalv2', 'fromCollectibleCard', category, product);
            }, 500);
        }


        return card;
    }



    function paginate(items, page = 1, perPage = 5) {
        const start = (page - 1) * perPage;
        return items.slice(start, start + perPage);
    }
    
    function createPaginationControls(container, totalPages, currentPage, onPageChange) {
        if (container) {
            container.innerHTML = '';
    
            const btn = (text, page, disabled = false, isCurrent = false, isNav = false) => {
                const b = document.createElement('button');
                b.textContent = text;
                b.classList.add(isNav ? 'nav-btn' : 'circle-btn');
                if (disabled) b.disabled = true;
                if (isCurrent) b.classList.add('current-page');
                b.addEventListener('click', () => onPageChange(page));
                return b;
            };
    
            container.appendChild(btn('< Back', currentPage - 1, currentPage === 1, false, true));
    
            const range = Math.min(10, totalPages);
            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(totalPages, startPage + range - 1);
            if (endPage - startPage < range - 1) startPage = Math.max(1, endPage - range + 1);
    
            if (startPage > 1) {
                container.appendChild(btn('1', 1));
                if (startPage > 2) container.appendChild(document.createTextNode('...'));
            }
    
            for (let i = startPage; i <= endPage; i++) {
                container.appendChild(btn(i, i, false, i === currentPage));
            }
    
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) container.appendChild(document.createTextNode('...'));
                container.appendChild(btn(totalPages, totalPages));
            }
    
            container.appendChild(btn('Next >', currentPage + 1, currentPage === totalPages, false, true));
        }
    }
    
    function filterCategories(data, search) {
        if (!search.trim()) return data;
        const term = search.toLowerCase();
        return data.map(cat => {
            const catMatch = cat.name.toLowerCase().includes(term) || cat.sku_id?.toLowerCase().includes(term);
            const filteredProducts = cat.products?.filter(p =>
                p.name.toLowerCase().includes(term) || p.sku_id?.toLowerCase().includes(term)
            ) || [];
            if (catMatch || filteredProducts.length > 0) {
                return {
                    ...cat,
                    products: catMatch ? cat.products : filteredProducts
                };
            }
            return null;
        }).filter(Boolean);
    }
    
    async function renderShopData(data, output) {
        const searchInput = document.getElementById('searchInput');
        searchInput.classList.remove('hidden');

        const paginationContainers = [];
    
        const mainPaginationById = document.getElementById('pagination');
        if (mainPaginationById) {
            paginationContainers.push(mainPaginationById);
        }

        const paginationByClass = document.querySelectorAll('.pagination');
        paginationByClass.forEach(container => {
            if (!paginationContainers.includes(container)) {
                paginationContainers.push(container);
            }
        });

        const paginationByDataAttr = document.querySelectorAll('[data-pagination]');
        paginationByDataAttr.forEach(container => {
            if (!paginationContainers.includes(container)) {
                paginationContainers.push(container);
            }
        });

        let itemsPerPage = 5;
        let filteredData = data;
        let currentPage = 1;
    
        const renderPage = (page) => {
            currentPage = page;
            output.innerHTML = '';
            const pageData = paginate(filteredData, page, itemsPerPage);
            output.scrollTo(0,0);

            if (currentUserData && currentUserData.admin_level === 3 && currentPage === 1) {
                const addCategory = document.createElement("div");
                addCategory.classList.add('category-container');
                addCategory.innerHTML = `
                    <div class="add-category-banner">
                        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 0 0 2 0v-8h8a1 1 0 0 0 0-2h-8V3Z"></path></svg>
                        <p>Add category</p>
                    </div>
                `;
                addCategory.querySelector('.add-category-banner').addEventListener("click", function () {
                    openModal('category-modal', 'addCategory');
                });
                output.appendChild(addCategory);
            }
    
            pageData.forEach((categoryData) => {
                const category = document.createElement("div");
                category.classList.add('category-container');
                category.setAttribute('data-sku-id', categoryData.sku_id);
                category.setAttribute('data-listing-id', categoryData.store_listing_id);

                const categoryClientDataId = category_client_overrides.findIndex(cat => cat.sku_id === categoryData.sku_id);

                const bannersOutput = getCategoryBanners(categoryData);
                const categoryBanner = bannersOutput.categoryBanner;
                const modalBanner = bannersOutput.modalBanner;
    
                const bannerContainer = document.createElement('div');
                if (bannersOutput.catalogBannerAsset !== customCategoryAssets[1]) {
                    bannerContainer.classList.add('catalog-banner-container');

                    if (bannersOutput.catalogBannerAsset && !bannersOutput.catalogBannerAssetAnimated) {
                        bannerContainer.innerHTML = `
                            <img src="${bannersOutput.catalogBannerAsset}">
                        `;
                    } else if (bannersOutput.catalogBannerAssetAnimated) {
                        bannerContainer.innerHTML = `
                            <video disablepictureinpicture muted loop autoplay src="${bannersOutput.catalogBannerAssetAnimated}"></video>
                            <img src="${bannersOutput.catalogBannerAsset}">
                        `;
                    }
                } else if (categoryBanner !== customCategoryAssets[0]) {
                    bannerContainer.classList.add('banner-container');
                    bannerContainer.style.backgroundImage = `url(${categoryBanner})`;

                    if (categoryData.logo && category_client_overrides[categoryClientDataId]?.addLogo) {
                        if (category_client_overrides[categoryClientDataId]?.banner_verification && category_client_overrides[categoryClientDataId]?.banner_verification === categoryData.banner || !category_client_overrides[categoryClientDataId].banner_verification) {
                            let logoAsset;
                            if (categoryData.full_src && categoryData.logo) {
                                logoAsset = categoryData.logo;
                            }
                            else if (categoryData.logo) {
                                logoAsset = `https://cdn.discordapp.com/app-assets/1096190356233670716/${categoryData.logo}.png?size=4096`;
                            }
                            const bannerLogo = document.createElement("div");
                            bannerLogo.classList.add('shop-category-logo-holder')
                            bannerLogo.innerHTML = `
                                <img class="shop-category-banner-logo" loading="lazy" src="${logoAsset}">
                            `;
                            bannerContainer.appendChild(bannerLogo);
                        }
                    }

                    if (category_client_overrides[categoryClientDataId]?.addAttributionLogo) {
                        if (category_client_overrides[categoryClientDataId]?.banner_verification && category_client_overrides[categoryClientDataId]?.banner_verification === categoryData.banner || !category_client_overrides[categoryClientDataId].banner_verification) {
                            const bannerWaterMark = document.createElement("div");
                            bannerWaterMark.classList.add('discordLogo_be5025')
                            bannerWaterMark.innerHTML = `
                                <div><svg class="discordIcon_be5025" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z" class=""></path></svg><svg class="discordWordmark_be5025" aria-hidden="true" role="img" width="55" height="16" viewBox="0 0 55 16"><g fill="currentColor"><path d="M3 4.78717H6.89554C7.83025 4.78717 8.62749 4.93379 9.27812 5.22703C9.92875 5.52027 10.4144 5.92348 10.7352 6.44582C11.0559 6.96815 11.2208 7.5638 11.2208 8.24192C11.2208 8.90171 11.0559 9.49736 10.7168 10.038C10.3778 10.5695 9.8646 11.0002 9.17732 11.3118C8.49003 11.6234 7.6378 11.7791 6.6197 11.7791H3V4.78717ZM6.57388 10.0014C7.2071 10.0014 7.69278 9.84559 8.03184 9.52485C8.3709 9.21328 8.54501 8.77343 8.54501 8.23276C8.54501 7.72875 8.38923 7.32555 8.08682 7.02314C7.78442 6.72073 7.32623 6.56495 6.71225 6.56495H5.49255V10.0014H6.57388Z"></path><path d="M17.2882 11.7709C16.7475 11.6335 16.2618 11.4319 15.8311 11.1569V9.4983C16.161 9.75489 16.5917 9.95649 17.1416 10.1214C17.6914 10.2864 18.2229 10.3689 18.7361 10.3689C18.9743 10.3689 19.1576 10.3414 19.2767 10.2772C19.3959 10.2131 19.46 10.1398 19.46 10.0481C19.46 9.94733 19.4233 9.86485 19.3592 9.80071C19.2951 9.73656 19.1668 9.68158 18.9743 9.62659L17.7739 9.36084C17.0866 9.20506 16.6009 8.97596 16.3077 8.70105C16.0144 8.42613 15.877 8.05042 15.877 7.59223C15.877 7.20735 16.0053 6.86829 16.2527 6.58421C16.5093 6.30013 16.8667 6.0802 17.334 5.92442C17.8014 5.76863 18.342 5.68616 18.9743 5.68616C19.5333 5.68616 20.0465 5.74114 20.5138 5.86944C20.9812 5.98857 21.3661 6.14435 21.6685 6.32763V7.89464C21.3569 7.71136 20.9904 7.56474 20.5871 7.45477C20.1748 7.34481 19.7533 7.28982 19.3226 7.28982C18.6994 7.28982 18.3878 7.39979 18.3878 7.61056C18.3878 7.71136 18.4337 7.78467 18.5345 7.83966C18.6353 7.89464 18.8094 7.94046 19.066 7.99544L20.0648 8.17871C20.7155 8.28868 21.2011 8.49028 21.5219 8.77436C21.8426 9.05844 21.9984 9.47081 21.9984 10.0298C21.9984 10.6346 21.7326 11.1203 21.2011 11.4685C20.6696 11.8259 19.9182 12 18.9468 12C18.3787 11.9817 17.8289 11.9084 17.2882 11.7709Z"></path><path d="M24.4735 11.5602C23.9054 11.2761 23.4655 10.9004 23.1814 10.4239C22.8882 9.94733 22.7507 9.40666 22.7507 8.80185C22.7507 8.20621 22.8974 7.66554 23.1998 7.19819C23.5022 6.72167 23.942 6.35512 24.5194 6.0802C25.0967 5.81445 25.7931 5.677 26.5995 5.677C27.5984 5.677 28.4231 5.88776 29.0829 6.3093V8.1329C28.8538 7.97712 28.5789 7.83965 28.2673 7.74802C27.9558 7.64721 27.6259 7.6014 27.2777 7.6014C26.6545 7.6014 26.178 7.71137 25.8206 7.94046C25.4724 8.16956 25.2983 8.46279 25.2983 8.82934C25.2983 9.18673 25.4632 9.47998 25.8115 9.70907C26.1505 9.93817 26.6453 10.0573 27.2868 10.0573C27.6167 10.0573 27.9466 10.0115 28.2673 9.91067C28.5881 9.80987 28.8722 9.69991 29.1013 9.55329V11.3219C28.3681 11.7618 27.5159 11.9817 26.5537 11.9817C25.7381 11.9817 25.0509 11.8351 24.4735 11.5602Z"></path><path d="M31.6955 11.5602C31.1182 11.2761 30.6783 10.9004 30.3759 10.4147C30.0735 9.929 29.9177 9.38834 29.9177 8.78353C29.9177 8.18788 30.0735 7.64722 30.3759 7.17986C30.6783 6.71251 31.1182 6.34595 31.6863 6.0802C32.2545 5.81445 32.9418 5.677 33.7299 5.677C34.518 5.677 35.2053 5.80529 35.7743 6.0802C36.3425 6.34595 36.7824 6.71251 37.0848 7.17986C37.3872 7.64722 37.5338 8.17872 37.5338 8.78353C37.5338 9.37918 37.3872 9.929 37.0848 10.4147C36.7824 10.9004 36.3517 11.2852 35.7743 11.5602C35.1961 11.8351 34.518 11.9817 33.7299 11.9817C32.951 11.9817 32.2728 11.8351 31.6955 11.5602ZM34.7287 9.79155C34.967 9.55329 35.0953 9.22339 35.0953 8.82934C35.0953 8.42614 34.9762 8.11457 34.7287 7.87632C34.4813 7.63806 34.1514 7.51892 33.7391 7.51892C33.3084 7.51892 32.9785 7.63806 32.731 7.87632C32.4928 8.11457 32.3645 8.42614 32.3645 8.82934C32.3645 9.23255 32.4836 9.55329 32.731 9.79155C32.9785 10.039 33.3084 10.1581 33.7391 10.1581C34.1514 10.1489 34.4905 10.0298 34.7287 9.79155Z"></path><path d="M43.6644 6.0435V8.19699C43.4078 8.03204 43.0779 7.94956 42.6747 7.94956C42.1432 7.94956 41.7308 8.11451 41.4467 8.43524C41.1626 8.75598 41.016 9.25999 41.016 9.93811V11.7709H38.5693V5.9427H40.9702V7.80295C41.0985 7.12482 41.3184 6.62082 41.6117 6.30008C41.9049 5.97935 42.2898 5.80524 42.7572 5.80524C43.1054 5.80524 43.4078 5.88771 43.6644 6.0435Z"></path><path d="M51.9136 4.58649V11.7801H49.4659V10.4696C49.2552 10.9645 48.9436 11.3402 48.5221 11.5968C48.1005 11.8534 47.5782 11.9817 46.9551 11.9817C46.4052 11.9817 45.9195 11.8442 45.5072 11.5785C45.0948 11.3127 44.7741 10.937 44.5542 10.4696C44.3342 9.99313 44.2242 9.46163 44.2242 8.87514C44.2151 8.26117 44.3342 7.71134 44.5816 7.22566C44.8199 6.73998 45.1681 6.36426 45.608 6.08935C46.0479 5.81444 46.5519 5.67698 47.12 5.67698C48.2838 5.67698 49.0627 6.18099 49.4659 7.19817V4.58649H51.9136ZM49.0994 9.7457C49.3468 9.50744 49.4751 9.18671 49.4751 8.80183C49.4751 8.42612 49.356 8.12371 49.1086 7.89462C48.8611 7.66552 48.5312 7.5464 48.1189 7.5464C47.7065 7.5464 47.3766 7.66553 47.1292 7.90378C46.8818 8.14204 46.7626 8.44444 46.7626 8.82932C46.7626 9.2142 46.8818 9.51661 47.1292 9.75487C47.3766 9.99313 47.6973 10.1123 48.1097 10.1123C48.5221 10.1123 48.852 9.99313 49.0994 9.7457Z"></path><path d="M13.4751 6.29095C14.1789 6.29095 14.7489 5.77778 14.7489 5.14547C14.7489 4.51317 14.1789 4 13.4751 4C12.7723 4 12.2014 4.51317 12.2014 5.14547C12.2014 5.77778 12.7723 6.29095 13.4751 6.29095Z"></path><path d="M14.7489 7.07812C13.97 7.41719 12.9986 7.42635 12.2014 7.07812V11.7792H14.7489V7.07812Z"></path></g></svg></div>
                            `;
                            bannerContainer.appendChild(bannerWaterMark);
                        }
                    }

                    if (categoryData.summary) {
                        const bannerSummary = document.createElement("div");
                        bannerSummary.classList.add('shop-category-text-holder')
                        bannerSummary.innerHTML = `
                            <p>${categoryData.summary}</p>
                        `;
                        if (categoryData.banner_text_color) {
                            bannerSummary.style.color = categoryData.banner_text_color;
                        }
                        if (category_client_overrides[categoryClientDataId]?.showDarkBannerText || categoryData.sku_id === "3") {
                            bannerSummary.style.color = 'black';
                        }
                        bannerContainer.appendChild(bannerSummary);
                    }
        
                    if (categoryData.banner_asset?.animated) {
                        const videoBanner = document.createElement("video");
                        videoBanner.disablePictureInPicture = true;
                        videoBanner.autoplay = true;
                        videoBanner.muted = true;
                        videoBanner.loop = true;
                        videoBanner.playsInline = true;
                        videoBanner.src = categoryData.banner_asset.animated;
                        videoBanner.classList.add('banner-video');
                        bannerContainer.appendChild(videoBanner);
                    }

                    if (category_client_overrides[categoryClientDataId]?.animatedBanner?.includes('.webm')) {
                        const videoBanner = document.createElement("video");
                        videoBanner.disablePictureInPicture = true;
                        videoBanner.autoplay = true;
                        videoBanner.muted = true;
                        videoBanner.loop = true;
                        videoBanner.playsInline = true;
                        videoBanner.src = category_client_overrides[categoryClientDataId]?.animatedBanner;
                        videoBanner.classList.add('banner-video');
                        bannerContainer.appendChild(videoBanner);
                    }

                    let categoryTags = document.createElement("div");
                    categoryTags.classList.add('shop-card-tag-container');
                    bannerContainer.appendChild(categoryTags)

                    const cardTag = categoryTags;

                    function createCategoryTag(text, type, toDate) {
                        let tag = document.createElement("p");
                        tag.classList.add('shop-card-tag');
                        tag.textContent = text;
                        cardTag.appendChild(tag);
                        if (type === 1) {
                            function updateTimer() {
                                const now = new Date();
                                const timeDiff = toDate - now;
                            
                                if (timeDiff <= 0) {
                                    tag.textContent = `NOT IN STORE`;
                                    clearInterval(timerInterval);
                                } else {
                                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / 1000);
                                    tag.textContent = `${days} DAYS LEFT IN SHOP`;
                                }
                            }
                        
                            const timerInterval = setInterval(updateTimer, 1000);
                            updateTimer();
                        }
                    }

                    const unpublishedAt = new Date(categoryData.unpublished_at);

                    if (categoryData.unpublished_at && !isNaN(unpublishedAt.getTime())) {
                        createCategoryTag(null, 1, unpublishedAt)
                    }
                } else {
                    bannerContainer.classList.add('catalog-banner-container');
                    bannerContainer.innerHTML = `
                        <img src="${bannersOutput.catalogBannerAsset}">
                    `;
                }
                category.appendChild(bannerContainer);
                
    
                if (categoryData.products?.length) {
                    const productsWrapper = document.createElement("div");
                    productsWrapper.classList.add("products-wrapper");
    
                    categoryData.products.forEach(async product => {
                        const item = await renderProduct(categoryData, product);
                        productsWrapper.appendChild(item);
                    });
    
                    category.appendChild(productsWrapper);
                }


                if (categoryData.sku_id === "5") {
                    const favorites = JSON.parse(localStorage.getItem("favoritesStore")) || [];
                    // Initialize totals
                    let totals = {
                        usd_0: 0,
                        usd_4: 0,
                        orb_0: 0,
                        orb_4: 0
                    };

                    for (const product of favorites) {
                        try {
                            for (const key of ["0", "4"]) {
                                const countryPrices = product.prices[key]?.country_prices?.prices || [];
                                for (const price of countryPrices) {
                                    if (price.currency === "usd") {
                                        // divide by 10^exponent to get real amount in dollars
                                        totals[`usd_${key}`] += price.amount / Math.pow(10, price.exponent);
                                    } else if (price.currency === "discord_orb") {
                                        totals[`orb_${key}`] += price.amount; // orbs don't use exponent
                                    }
                                }
                            }
                        } catch(err) {}
                    }
                    bannerContainer.style.cursor = `unset`;
                    bannerContainer.style.height = `180px`;
                    bannerContainer.innerHTML = `
                        <div class="fav-banner-objects">
                            <h1>My Favorites</h1>
                            <div class="fav-info-grid">
                                <div>
                                    <h3>Total Items:</h3>
                                    <p>${favorites.length}</p>
                                </div>
                                <div>
                                    <p>
                                        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" class=""></path>
                                            <path fill="currentColor" fill-rule="evenodd" d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd" class=""></path>
                                            <path fill="currentColor" d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" class=""></path>
                                        </svg>
                                        US$${totals.usd_4.toFixed(2)}
                                    </p>
                                    <p>US$${totals.usd_0.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.4092 0.076753C10.1616 -0.0255843 9.88336 -0.0255844 9.63569 0.076753L3.26336 2.71036C3.01574 2.8127 2.81901 3.00899 2.71644 3.25605L0.0769252 9.61416C-0.0256417 9.86122 -0.0256418 10.1388 0.0769252 10.3858L2.71644 16.744C2.81901 16.991 3.01574 17.1873 3.26336 17.2897L9.63569 19.9233C9.88336 20.0256 10.1616 20.0256 10.4092 19.9233L16.7816 17.2897C17.0292 17.1873 17.2259 16.991 17.3285 16.744L19.9679 10.3858C20.0705 10.1388 20.0705 9.86122 19.9679 9.61416L17.3285 3.25605C17.2259 3.00899 17.0292 2.8127 16.7816 2.71036L10.4092 0.076753ZM9.68733 2.76214C9.87214 2.57769 10.1719 2.57768 10.3567 2.76212L17.2614 9.65093C17.4462 9.83539 17.4462 10.1344 17.2614 10.3189L10.3567 17.2077C10.1719 17.3921 9.87214 17.3921 9.68733 17.2077L2.78337 10.3189C2.59853 10.1344 2.59853 9.83539 2.78337 9.65093L9.68733 2.76214Z" fill="currentColor"></path>
                                            <path d="M10.321 6.3001C10.5005 7.10241 10.9042 7.83763 11.4852 8.42053C12.0662 9.0035 12.8008 9.41031 13.6039 9.5939C13.6825 9.61203 13.7526 9.65618 13.8028 9.71915C13.853 9.78211 13.8803 9.86021 13.8803 9.94063C13.8803 10.0211 13.853 10.0992 13.8028 10.1622C13.7526 10.2251 13.6825 10.2693 13.6039 10.2874C12.8018 10.4666 12.0672 10.8696 11.4859 11.4497C10.9046 12.0296 10.5006 12.7626 10.321 13.563C10.3029 13.6414 10.2586 13.7113 10.1955 13.7614C10.1324 13.8115 10.0541 13.8388 9.97348 13.8388C9.89283 13.8388 9.81461 13.8115 9.75151 13.7614C9.6884 13.7113 9.64415 13.6414 9.62598 13.563C9.44267 12.7628 9.03632 12.0307 8.4538 11.4511C7.87129 10.8715 7.13636 10.4681 6.33387 10.2874C6.25534 10.2693 6.18522 10.2251 6.13502 10.1622C6.08483 10.0992 6.0575 10.0211 6.0575 9.94063C6.0575 9.86021 6.08483 9.78211 6.13502 9.71915C6.18522 9.65618 6.25534 9.61203 6.33387 9.5939C7.13661 9.41056 7.87122 9.00506 8.45355 8.4241C9.03582 7.84314 9.44217 7.1101 9.62598 6.30923C9.64309 6.23055 9.68639 6.15999 9.74881 6.10906C9.81129 6.05812 9.88919 6.02981 9.96985 6.02876C10.0505 6.02769 10.1292 6.05395 10.1929 6.10322C10.2567 6.1525 10.3019 6.2219 10.321 6.3001Z" fill="currentColor"></path>
                                        </svg>
                                        ${formatOrbPrice.format(totals.orb_0)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src="https://cdn.yapper.shop/assets/213.png">
                    `;
                } else if (categoryData.sku_id === "6") {
                    bannerContainer.remove();
                } else {
                    bannerContainer.addEventListener("click", function () {
                        openModal('category-modal', 'fromCategoryBanner', categoryData, modalBanner);
                    });
                }

                if (currentOpenModalId === categoryData.sku_id) {
                    setTimeout(() => {
                        openModal('category-modal', 'fromCategoryBanner', categoryData, modalBanner);
                    }, 500);
                }
    
                output.appendChild(category);
            });

            if (filteredData.length <= itemsPerPage) {
                paginationContainers.forEach(container => {
                    container.classList.add('hidden');
                });
            } else {
                paginationContainers.forEach(container => {
                    container.classList.remove('hidden');
                });
            }
    
            const totalPages = Math.ceil(filteredData.length / itemsPerPage);
            paginationContainers.forEach(container => {
                createPaginationControls(container, totalPages, page, renderPage);
            });
    
            scrollToCategoryFromUrl();
        };

        window.renderPage = renderPage;
    
        const scrollToCategoryFromUrl = () => {
            const targetSkuId = currentOpenModalId;
            const targetListingId = scrollToCache;
            if (!targetSkuId && !targetListingId) return;

            const scrollToTarget = (targetIndex, selectorAttr, selectorValue) => {
                const targetPage = Math.floor(targetIndex / itemsPerPage) + 1;
                if (targetPage !== currentPage) {
                    renderPage(targetPage);
                } else {
                    setTimeout(() => {
                        const el = document.querySelector(`[${selectorAttr}="${selectorValue}"]`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        if (targetListingId) {
                            removeParams("scrollTo");
                            scrollToCache = "";
                        }
                    }, 500);
                }
            };
        
            if (targetListingId) {
                let targetIndex = filteredData.findIndex(cat =>
                    cat.store_listing_id === targetListingId ||
                    cat.products?.some(p => p.store_listing_id === targetListingId)
                );
            
                if (targetIndex !== -1) {
                    scrollToTarget(targetIndex, "data-listing-id", filteredData[targetIndex].store_listing_id);
                    return;
                }
            
                targetIndex = filteredData.findIndex(cat =>
                    cat.sku_id === targetListingId ||
                    cat.products?.some(p => p.sku_id === targetListingId)
                );
            
                if (targetIndex !== -1) {
                    scrollToTarget(targetIndex, "data-sku-id", filteredData[targetIndex].sku_id);
                    return;
                }
            }
        
            if (targetSkuId) {
                const targetIndex = filteredData.findIndex(cat =>
                    cat.sku_id === targetSkuId ||
                    cat.products?.some(p => p.sku_id === targetSkuId)
                );
            
                if (targetIndex !== -1) {
                    scrollToTarget(targetIndex, "data-sku-id", filteredData[targetIndex].sku_id);
                }
            }
        };

    
        searchInput.addEventListener('input', () => {
            filteredData = filterCategories(data, searchInput.value);
            renderPage(1);
            if (filteredData.length === 0) {
                document.querySelector('.categories-container').innerHTML = `
                    <div class="shop-loading-error-container">
                        <img src="https://cdn.yapper.shop/assets/207.png">
                        <div class="error-block">
                            <h2>Oopsie, no results found.</h2>
                            <p>We weren't able to find any items that matched your search.</p>
                        </div>
                    </div>
                `;
            }
        });
    
        renderPage(1);
    }

    async function renderShopBrowseData(data, output) {
        document.getElementById("article-content").scrollTo(0,0);
        output.innerHTML = ``;
        data.shop_blocks.forEach((categoryData) => {
            const category = document.createElement("div");
            if (categoryData.type === category_types.HERO || categoryData.type === category_types.REWARD_HERO) {
                category.classList.add('category-container');
                category.classList.add('category-browse-container');
                category.setAttribute('data-sku-id', categoryData.sku_id);

                const bannerContainer = document.createElement('div');
                bannerContainer.classList.add('banner-container');

                const bannerSummaryAndLogo = document.createElement("div");
                bannerSummaryAndLogo.classList.add('shop-category-text-and-logo-container')

                bannerContainer.appendChild(bannerSummaryAndLogo);

                if (categoryData.summary) {
                    const bannerSummary = document.createElement("div");
                    bannerSummary.classList.add('shop-category-text-holder')
                    bannerSummary.innerHTML = `
                        <p>${categoryData.summary}</p>
                    `;
                    if (categoryData.banner_text_color) {
                        bannerSummary.style.color = categoryData.banner_text_color;
                    }
                    bannerSummaryAndLogo.appendChild(bannerSummary);
                }

                const bannerLogo = document.createElement("div");
                bannerLogo.classList.add('shop-category-logo-holder')
                bannerLogo.innerHTML = `
                    <img class="shop-category-banner-logo" loading="lazy" src="${categoryData.hero_logo_url}">
                `;
                bannerSummaryAndLogo.appendChild(bannerLogo);

                if (categoryData.hero_banner_animated_url) {
                    const videoBanner = document.createElement("video");
                    videoBanner.disablePictureInPicture = true;
                    videoBanner.autoplay = true;
                    videoBanner.muted = true;
                    videoBanner.loop = true;
                    videoBanner.playsInline = true;
                    videoBanner.src = categoryData.hero_banner_animated_url;
                    videoBanner.classList.add('banner-video');
                    bannerContainer.appendChild(videoBanner);
                } else if (categoryData.hero_banner_url) {
                    const imageBanner = document.createElement("img");
                    imageBanner.src = categoryData.hero_banner_url;
                    imageBanner.classList.add('banner-video');
                    bannerContainer.appendChild(imageBanner);
                }


                const bannerButton = document.createElement("div");
                bannerButton.id = 'home-page-preview-button-container';
                bannerButton.innerHTML = `
                    <svg class="has-tooltip" data-tooltip="Open Category Modal" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="24" r="6" fill="currentColor"></circle>
                        <circle cx="12" cy="72" r="6" fill="currentColor"></circle>
                        <circle cx="12" cy="48" r="6" fill="currentColor"></circle>
                        <rect x="28" y="20" width="60" height="8" rx="4" fill="currentColor"></rect>
                        <path d="M72.124 44.0029C64.5284 44.0668 57.6497 47.1046 52.6113 52H32C29.7909 52 28 50.2091 28 48C28 45.7909 29.7909 44 32 44H72C72.0415 44 72.0828 44.0017 72.124 44.0029Z" fill="currentColor"></path>
                        <path d="M44.2852 68C44.0983 69.3065 44 70.6418 44 72C44 73.3582 44.0983 74.6935 44.2852 76H32C29.7909 76 28 74.2091 28 72C28 69.7909 29.7909 68 32 68H44.2852Z" fill="currentColor"></path>
                        <circle cx="72" cy="72" r="16" stroke="currentColor" stroke-width="8"></circle>
                        <rect x="81" y="85.9497" width="7" height="16" rx="3.5" transform="rotate(-45 81 85.9497)" fill="currentColor"></rect>
                    </svg>
                    <button class="home-page-preview-button" onclick="scrollToCache = '${categoryData.category_store_listing_id}'; addParams({scrollTo: '${categoryData.category_store_listing_id}'}); loadPage('2');">Shop the ${categoryData.name} Collection</button>
                `;
                bannerButton.querySelector('svg').addEventListener("click", () => {
                    openModal('category-modal', 'fromCategoryBanner', data.categories[0], categoryData.banner_asset?.static);
                });
                if (categoryData.type === category_types.REWARD_HERO) {
                    bannerButton.querySelector('.home-page-preview-button').remove();
                }
                bannerSummaryAndLogo.appendChild(bannerButton);


                category.appendChild(bannerContainer);

                if (categoryData.ranked_sku_ids?.length) {
                    const productsWrapper = document.createElement("div");
                    productsWrapper.classList.add("products-wrapper");

                    (async () => {
                        const thisCategory = data.categories.find(category => category.sku_id === categoryData.category_sku_id);
                        if (!thisCategory) return;

                        let renderedCount = 0;
                        let index = 0;

                        while (renderedCount < 4 && index < categoryData.ranked_sku_ids.length) {
                            const productsku = categoryData.ranked_sku_ids[index++];
                            const productData = thisCategory.products.find(product => product.sku_id === productsku);
                        
                            if (productData) {
                                const item = await renderProduct(thisCategory, productData);
                                productsWrapper.appendChild(item);
                                renderedCount++;
                            }
                        }
                    })();


                    category.appendChild(productsWrapper);
                }
            } else if (categoryData.type === category_types.FEATURED) {

                category.classList.add('category-container');
                category.classList.add('category-featured-block-container');

                categoryData.subblocks.forEach(block => {
                    let featuredBlock = document.createElement("div");

                    featuredBlock.style.backgroundImage = `url(${block.asset_url})`;

                    featuredBlock.innerHTML = `
                        <button class="take-me-there-home-block-button" onclick="scrollToCache = '${block.category_store_listing_id}'; addParams({scrollTo: '${block.category_store_listing_id}'}); loadPage('2');">Take Me There</button>
                    `;

                    category.appendChild(featuredBlock);
                });
            } else if (categoryData.type === category_types.WIDE_BANNER) {

                category.classList.add('category-container');
                category.classList.add('category-wide-banner-container');

                if (categoryData.banner_text_color) category.style.color = categoryData.banner_text_color;
                if (categoryData.disable_cta) category.classList.add('hide-click-button');

                category.innerHTML = `
                    <img src="${categoryData.banner_url}">
                    <div class="text-container">
                        <h2>${categoryData.title}</h2>
                        <p>${categoryData.body}</p>
                    </div>
                    <button class="take-me-there-wide-banner-button" onclick="scrollToCache = '${categoryData.category_store_listing_id}'; addParams({scrollTo: '${categoryData.category_store_listing_id}'}); loadPage('2');">Take Me There</button>
                `;
            }

            output.appendChild(category);
        });
    }


    function renderShopLoadingError(error, output) {
        let reasonTitle = "Unknown Error";
        let reason = "Unknown Error";
        if (error) {
            reasonTitle = `${error.status}: ${error.error}`;
            reason = error.message;
        }
        output.innerHTML = `
            <div class="shop-loading-error-container">
                <img src="https://cdn.yapper.shop/assets/207.png">
                <div class="error-block">
                    <h2>Oopsie, something went wrong.</h2>
                    <p>We encountered an error while trying to load this page.</p>
                    <div class="reason-block">
                        <h3>${reasonTitle}</h3>
                        <p>${reason}</p>
                    </div>
                </div>
            </div>
        `;
    }
    


    async function setDiscordLeakedCategoriesCache() {
        if (settingsStore.staff_force_leaks_dummy === 1) {
            discordLeakedCategoriesCache = leaks_dummy_data;

            const leaksTab = document.getElementById('shop-tab-1');
            leaksTab.classList.remove('hidden');
            leaksTab.setAttribute('data-tooltip', 'Dummy Data');

        } else {
            // const rawData = await fetch(redneredAPI + endpoints.DISCORD_LEAKED_CATEGORIES);

            // if (!rawData.ok) {

            // } else {
            //     const data = await rawData.json();

            //     if (data.categories.length != 0 && data.version) {
            //         const leaksTab = document.getElementById('shop-tab-1');
            //         leaksTab.classList.remove('hidden');
            //         let tooltipValue;
            //         if (data.categories.length === 1) {
            //             tooltipValue = 'New '+data.categories[0].name+' Leaks!';
            //         } else if (data.categories.length === 2) {
            //             tooltipValue = 'New '+data.categories[0].name+' & '+data.categories[1].name+' Leaks!';
            //         } else if (data.categories.length >= 3) {
            //             tooltipValue = data.categories.length+' New Leaked Categories!';
            //         }
            //         leaksTab.setAttribute('data-tooltip', tooltipValue);

            //         if (localStorage.latest_discord_leaked_categories_version === data.version.toString()) {
            //             leaksTab.classList.add('hide-new-tag');
            //         }
            //     }

            //     discordLeakedCategoriesCache = data;
            // }
            discordLeakedCategoriesCache = {"version":0,"categories":[]};
        }
    }
    window.setDiscordLeakedCategoriesCache = setDiscordLeakedCategoriesCache;

    if (settingsStore.dismissible_daily_tab_new === 1) {
        document.getElementById('shop-tab-8').classList.add('hide-new-tag');
    }

    async function loadPage(key, firstLoad, reFetch) {
        document.getElementById('searchInput').value = '';
        document.querySelectorAll('.selected').forEach((el) => {
            el.classList.remove("selected");
        });
        const container = document.getElementById("article-content");
        if (firstLoad && typeof key === "string") {
            pages.forEach(page => {
                if (page.url === key) {
                    const currentPage = pages.findIndex(page => page.url === key);
                    currentPageCache = pages[currentPage].url;
                    document.getElementById('shop-tab-' + currentPage).classList.add("selected");
                    document.getElementById("page-title-topbar").textContent = pages[currentPage].title;
                    container.innerHTML = `${pages[currentPage].body}`;
                    container.scrollTo(0,0);
                    document.title = `${pages[currentPage].title} | Shop Archives`;
                }
            });
        } else {
            const curerntPage = pages[key];
            setParams({page: pages[key].url});
            currentPageCache = pages[key].url;
            document.getElementById('shop-tab-' + key).classList.add("selected");
            document.getElementById("page-title-topbar").textContent = curerntPage.title;
            container.innerHTML = `${curerntPage.body}`;
            container.scrollTo(0,0);
            document.title = `${curerntPage.title} | Shop Archives`;
        }
        console.log('Current page is: ' + currentPageCache);

        if (!discordLeakedCategoriesCache) {
            await setDiscordLeakedCategoriesCache();
        }

        const searchInput = document.getElementById('searchInput');

        if (currentPageCache === "home") {
            searchInput.classList.add('hidden');   
            const output = document.getElementById('categories-container');
            if (!discordCollectiblesShopHomeCache || discordCollectiblesShopHomeCache && reFetch) {
                try {
                    const data = await fetchAPI.get(endpnts.CATEGORIES + endpnts.CATEGORIES_HOME);

                    discordCollectiblesShopHomeCache = data;
                    if (currentPageCache === "home") renderShopBrowseData(data, output);
                } catch(err) {
                    console.error(err);
                    renderShopLoadingError(JSON.parse(err), output);
                }
            } else {
                renderShopBrowseData(discordCollectiblesShopHomeCache, output);
            }
        } else if (currentPageCache === "leaks") {
            searchInput.classList.remove('hidden');    
            const leaksTab = document.getElementById('shop-tab-1');
            localStorage.latest_discord_leaked_categories_version = discordLeakedCategoriesCache.version;
            leaksTab.classList.add('hide-new-tag');

            const output = document.getElementById('categories-container');

            renderShopData(discordLeakedCategoriesCache.categories, output);
        } else if (currentPageCache === "catalog") {
            searchInput.classList.remove('hidden');
            const output = document.getElementById('categories-container');
            if (!discordCollectiblesCategoriesCache || discordCollectiblesCategoriesCache && reFetch) {

                try {
                    const data = await fetchAPI.get(endpnts.CATEGORIES + endpnts.CATEGORIES_CATALOG);

                    discordCollectiblesCategoriesCache = data;
                    if (currentPageCache === "catalog") renderShopData(data, output);
                } catch(err) {
                    console.error(err);
                    renderShopLoadingError(JSON.parse(err), output);
                }
            } else {
                renderShopData(discordCollectiblesCategoriesCache, output);
            }
        } else if (currentPageCache === "orbs") {
            searchInput.classList.remove('hidden');   
            const output = document.getElementById('categories-container');
            if (!discordOrbsCategoriesCache || discordOrbsCategoriesCache && reFetch) {

                try {
                    const data = await fetchAPI.get(endpnts.CATEGORIES + endpnts.CATEGORIES_ORBS);

                    discordOrbsCategoriesCache = data;
                    if (currentPageCache === "orbs") renderShopData(data, output);
                } catch(err) {
                    console.error(err);
                    renderShopLoadingError(JSON.parse(err), output);
                }
            } else {
                renderShopData(discordOrbsCategoriesCache, output);
            }
        } else if (currentPageCache === "miscellaneous") {
            searchInput.classList.remove('hidden');
            const output = document.getElementById('categories-container');
            if (!discordMiscellaneousCategoriesCache || discordMiscellaneousCategoriesCache && reFetch) {

                const URLParams = new URLSearchParams();
                if (settingsStore.staff_show_test_categories_on_misc_page === 1) {
                    URLParams.append("include_unpublished", "true");
                }

                try {
                    const queryString = URLParams.size > 0 ? `?${URLParams.toString()}` : '';
                    const data = await fetchAPI.get(endpnts.CATEGORIES + endpnts.CATEGORIES_MISC + queryString);

                    discordMiscellaneousCategoriesCache = data;
                    if (currentPageCache === "miscellaneous") renderShopData(data, output);
                } catch(err) {
                    console.error(err);
                    renderShopLoadingError(JSON.parse(err), output);
                }
            } else {
                renderShopData(discordMiscellaneousCategoriesCache, output);
            }
        } else if (currentPageCache === "quests") {
            searchInput.classList.add('hidden');   
            const output = document.getElementById('quests-wrapper');
            if (!discordQuestsCache || discordQuestsCache && reFetch) {
                try {
                    const data = await fetchAPI.get(endpnts.DISCORD_QUESTS);

                    discordQuestsCache = data;
                    if (currentPageCache === "quests") renderQuest(data, output);
                } catch(err) {
                    console.error(err);
                    renderShopLoadingError(JSON.parse(err), output);
                }
            } else {
                renderQuest(discordQuestsCache, output);
            }
        } else if (currentPageCache === "favorites") {
            const output = document.getElementById('categories-container');

            let items = JSON.parse(localStorage.getItem("favoritesStore"));
            const data = [{ ...favorites_category, products: items }];
            if (Array(items) && items.length !== 0) {
                renderShopData(data, output);
            } else {
                output.innerHTML = `
                    <div  style="padding-top: 200px;" class="shop-loading-error-container">
                        <img style="right: -20px; height: 200px;" src="https://cdn.yapper.shop/assets/208.png">
                        <div class="error-block">
                            <h2>You have no favorites.</h2>
                            <p>Favorite an item and it will show up here.</p>
                        </div>
                    </div>
                `;
                searchInput.classList.add('hidden');
            }
        } else if (currentPageCache === "daily") {
            const output = document.getElementById('categories-container');
            if (settingsStore.dismissible_daily_tab_new === 0) {
                changeSetting('dismissible_daily_tab_new', 1);
            }
            document.getElementById('shop-tab-8').classList.add('hide-new-tag')

            try {
                if (originData.daily_collectible) {
                    let items = originData.daily_collectible;
                    items = [items];
                    const data = [{ ...daily_dose_of_collectibles, products: items }];
                    renderShopData(data, output);
                } else {
                    output.innerHTML = `
                        <div class="shop-loading-error-container">
                            <img src="https://cdn.yapper.shop/assets/207.png">
                            <h2>Oopsie, something went wrong.</h2>
                            <p>We weren't able to load this page. Check back later.</p>
                        </div>
                    `;
                }
            } catch {
                output.innerHTML = `
                    <div class="shop-loading-error-container">
                        <img src="https://cdn.yapper.shop/assets/207.png">
                        <h2>Oopsie, something went wrong.</h2>
                        <p>We weren't able to load this page. Check back later.</p>
                    </div>
                `;
            }
            searchInput.classList.add('hidden');
        } else {
            loadPage('0')
        }

        const element = document.querySelector('.content');
        const sourceDiv = document.querySelector('.disc-laimer');

        element.addEventListener('scroll', () => {
            const isAtBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 1;
        
            if (isAtBottom) {
                element.classList.add('at-bottom');
            } else {
                element.classList.remove('at-bottom');
            }
        });

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const height = entry.contentRect.height;
                element.style.paddingBottom = `${height + 20}px`;
            }
        });
        resizeObserver.observe(sourceDiv);
    }
    window.loadPage = loadPage;

    async function clearStaticableCache() {
        discordCollectiblesCategoriesCache = null;
        discordOrbsCategoriesCache = null;
        discordMiscellaneousCategoriesCache = null;
        discordQuestsCache = null;
    }

    if (params.get("page")) {
        await loadPage(params.get("page"), true);
    } else {
        await loadPage('0');
    }

    if (appType === "Dev") {
        document.getElementById('logo-link').textContent = 'dev.yapper.shop'
    } else {
        document.getElementById('logo-link').textContent = 'yapper.shop'
    }

    async function setModalv3InnerContent(tab) {
        if (!document.getElementById("modalv3-right-content-container-inner")) {
            openModal('modalv3', 'userSettings');
        }
        const tabPageOutput = document.getElementById("modalv3-right-content-container-inner");

        if (document.querySelector(".modalv3-tab-selected")) {
            document.querySelectorAll('.modalv3-tab-selected').forEach((el) => {
                el.classList.remove("modalv3-tab-selected");
            });
        }

        document.getElementById("modalv3-right-content-container").scrollTo(0,0);
        document.getElementById("modal-v3-tab-" + tab).classList.add("modalv3-tab-selected");

        if (tab === "account") {
            tabPageOutput.innerHTML = `
                <h2>Account</h2>
                <hr>
                <div class="enhanced-account-container">
                    <div class="enhanced-account-block title-card">
                        <div class="section">
                            <h3>Discord Account</h3>
                            <p>The Discord account linked to Shop Archives.</p>
                        </div>
                        <div class="buttons">
                            <button class="button has-tooltip" data-tooltip="Open your public user profile" id="profile">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0833 10.8334C15.2326 10.8334 16.3348 10.3769 17.1475 9.56421C17.9601 8.75155 18.4167 7.64935 18.4167 6.50008C18.4167 5.35081 17.9601 4.24861 17.1475 3.43595C16.3348 2.62329 15.2326 2.16675 14.0833 2.16675C12.9341 2.16675 11.8319 2.62329 11.0192 3.43595C10.2065 4.24861 9.75 5.35081 9.75 6.50008C9.75 7.64935 10.2065 8.75155 11.0192 9.56421C11.8319 10.3769 12.9341 10.8334 14.0833 10.8334Z" fill="currentColor"/>
                                    <path d="M3.25 5.41667V4.60417C3.25 3.85667 3.85667 3.25 4.60417 3.25C5.35167 3.25 5.9475 3.85667 6.045 4.60417C6.63 9.37083 10.2483 13 14.0833 13H15.1667C17.4652 13 19.6696 13.9131 21.2949 15.5384C22.9202 17.1637 23.8333 19.3681 23.8333 21.6667C23.8333 22.2413 23.6051 22.7924 23.1987 23.1987C22.7924 23.6051 22.2413 23.8333 21.6667 23.8333C21.6179 23.833 21.5705 23.8171 21.5315 23.7878C21.4925 23.7586 21.4639 23.7176 21.45 23.6708C21.122 22.7634 20.6381 21.9201 20.02 21.1792C19.8575 20.9625 19.565 21.1142 19.5975 21.3633L19.8683 23.53C19.89 23.6925 19.76 23.8333 19.5975 23.8333H9.75C9.17536 23.8333 8.62426 23.6051 8.21793 23.1987C7.81161 22.7924 7.58333 22.2413 7.58333 21.6667V19.2617C7.58333 17.5608 6.8575 15.9575 5.92583 14.5275C4.1952 11.8025 3.26779 8.64476 3.25 5.41667Z" fill="currentColor"/>
                                </svg>
                                <p>View Profile</p>
                            </button>
                            <button class="button blue has-tooltip" data-tooltip="Re-sync your Discord profile with Shop Archives" id="resync">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.7501 2.16668C23.0374 2.16668 23.313 2.28082 23.5161 2.48398C23.7193 2.68715 23.8334 2.9627 23.8334 3.25001V9.75001C23.8334 10.0373 23.7193 10.3129 23.5161 10.516C23.313 10.7192 23.0374 10.8333 22.7501 10.8333H16.2501C15.9628 10.8333 15.6872 10.7192 15.484 10.516C15.2809 10.3129 15.1667 10.0373 15.1667 9.75001C15.1667 9.4627 15.2809 9.18715 15.484 8.98398C15.6872 8.78082 15.9628 8.66668 16.2501 8.66668H20.5076C19.8814 7.58197 19.0276 6.64587 18.0049 5.92284C16.9822 5.19981 15.8149 4.70704 14.5835 4.47846C13.352 4.24988 12.0857 4.29093 10.8716 4.59877C9.65756 4.90662 8.52465 5.47394 7.55091 6.26168C7.32681 6.44269 7.03997 6.52726 6.75351 6.49679C6.46705 6.46631 6.20443 6.32329 6.02341 6.09918C5.8424 5.87507 5.75783 5.58824 5.78831 5.30178C5.81878 5.01531 5.96181 4.75269 6.18591 4.57168C7.31713 3.65318 8.62233 2.97283 10.0231 2.57149C11.4239 2.17016 12.8914 2.05612 14.3373 2.23623C15.7833 2.41635 17.178 2.8869 18.4375 3.61961C19.697 4.35232 20.7954 5.33208 21.6667 6.50001V3.25001C21.6667 2.9627 21.7809 2.68715 21.984 2.48398C22.1872 2.28082 22.4628 2.16668 22.7501 2.16668ZM3.25008 23.8333C2.96276 23.8333 2.68721 23.7192 2.48405 23.516C2.28088 23.3129 2.16675 23.0373 2.16675 22.75V16.25C2.16675 15.9627 2.28088 15.6871 2.48405 15.484C2.68721 15.2808 2.96276 15.1667 3.25008 15.1667H9.75008C10.0374 15.1667 10.3129 15.2808 10.5161 15.484C10.7193 15.6871 10.8334 15.9627 10.8334 16.25C10.8334 16.5373 10.7193 16.8129 10.5161 17.016C10.3129 17.2192 10.0374 17.3333 9.75008 17.3333H5.49258C6.11876 18.4181 6.9726 19.3542 7.9953 20.0772C9.018 20.8002 10.1853 21.293 11.4167 21.5216C12.6481 21.7501 13.9145 21.7091 15.1286 21.4013C16.3426 21.0934 17.4755 20.5261 18.4492 19.7383C18.5602 19.6487 18.6878 19.5818 18.8246 19.5415C18.9614 19.5012 19.1048 19.4882 19.2467 19.5032C19.3885 19.5183 19.526 19.5612 19.6512 19.6294C19.7765 19.6977 19.8871 19.7899 19.9767 19.9008C20.0664 20.0118 20.1333 20.1393 20.1736 20.2762C20.2139 20.413 20.2269 20.5564 20.2119 20.6983C20.1968 20.8401 20.1539 20.9776 20.0857 21.1028C20.0174 21.2281 19.9252 21.3387 19.8142 21.4283C18.6824 22.3454 17.3771 23.0245 15.9765 23.425C14.576 23.8255 13.109 23.9391 11.6634 23.759C10.2179 23.579 8.82357 23.1089 7.56404 22.3771C6.30451 21.6453 5.20569 20.6667 4.33341 19.5V22.75C4.33341 23.0373 4.21928 23.3129 4.01611 23.516C3.81295 23.7192 3.5374 23.8333 3.25008 23.8333Z" fill="currentColor"/>
                                </svg>
                                <p>Re-sync</p>
                            </button>
                            <button class="button red has-tooltip" data-tooltip="Log Out" onclick="logoutOfDiscord()">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.75033 13C10.0376 13 10.3132 13.1141 10.5164 13.3173C10.7195 13.5205 10.8337 13.796 10.8337 14.0833V16.25C10.8337 16.5373 10.7195 16.8129 10.5164 17.016C10.3132 17.2192 10.0376 17.3333 9.75033 17.3333C9.46301 17.3333 9.18746 17.2192 8.98429 17.016C8.78113 16.8129 8.66699 16.5373 8.66699 16.25V14.0833C8.66699 13.796 8.78113 13.5205 8.98429 13.3173C9.18746 13.1141 9.46301 13 9.75033 13Z" fill="currentColor"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.97949 3.2715C3.28405 2.92483 3.65894 2.64699 4.07922 2.45646C4.4995 2.26593 4.95554 2.16709 5.41699 2.1665H16.2503C17.1123 2.1665 17.9389 2.50891 18.5484 3.11841C19.1579 3.7279 19.5003 4.55455 19.5003 5.4165V13.6932C19.5003 14.1698 18.9045 14.4515 18.4712 14.289C17.7764 14.0307 17.0142 14.0177 16.311 14.252C15.6078 14.4864 15.0059 14.9541 14.605 15.5776C14.2041 16.201 14.0284 16.9428 14.107 17.6798C14.1855 18.4169 14.5137 19.1049 15.037 19.6298L15.0587 19.6623C15.1329 19.738 15.1833 19.8339 15.2035 19.9379C15.2238 20.042 15.2131 20.1498 15.1728 20.2478C15.1324 20.3458 15.0641 20.4299 14.9764 20.4895C14.8888 20.5491 14.7855 20.5817 14.6795 20.5832H14.6253C14.4817 20.5832 14.3439 20.6402 14.2423 20.7418C14.1407 20.8434 14.0837 20.9812 14.0837 21.1248C14.0829 21.5925 13.9611 22.0521 13.73 22.4587C13.4989 22.8653 13.1665 23.2051 12.765 23.4451C12.3636 23.6851 11.9069 23.817 11.4393 23.8281C10.9718 23.8391 10.5093 23.7289 10.097 23.5082L3.81366 20.1607C3.31366 19.8771 2.89782 19.466 2.60854 18.9693C2.31926 18.4725 2.1669 17.908 2.16699 17.3332V5.4165C2.17112 4.62511 2.46387 3.86241 2.99033 3.2715H2.97949ZM4.38783 5.384C4.38213 5.38239 4.37617 5.38196 4.3703 5.38274C4.36443 5.38352 4.35879 5.38549 4.35371 5.38854C4.34864 5.39158 4.34424 5.39563 4.34079 5.40044C4.33734 5.40525 4.33491 5.41072 4.33366 5.4165V17.3332C4.33366 17.7232 4.55033 18.0698 4.86449 18.2648L11.1153 21.6015C11.1979 21.6467 11.2909 21.6696 11.385 21.6679C11.4792 21.6662 11.5712 21.64 11.6522 21.5919C11.7331 21.5438 11.8001 21.4754 11.8465 21.3935C11.893 21.3116 11.9172 21.219 11.917 21.1248V8.68817C11.9156 8.57998 11.8818 8.4747 11.82 8.38588C11.7582 8.29706 11.6713 8.22878 11.5703 8.18984L4.38783 5.37317V5.384Z" fill="currentColor"/>
                                    <path d="M16.575 18.0917C16.4185 17.883 16.3426 17.625 16.3611 17.3649C16.3795 17.1048 16.4912 16.86 16.6756 16.6756C16.86 16.4912 17.1048 16.3795 17.3649 16.3611C17.625 16.3426 17.883 16.4185 18.0917 16.575L22.75 21.2225V17.3333C22.75 17.046 22.8641 16.7705 23.0673 16.5673C23.2705 16.3641 23.546 16.25 23.8333 16.25C24.1207 16.25 24.3962 16.3641 24.5994 16.5673C24.8025 16.7705 24.9167 17.046 24.9167 17.3333V23.8333C24.9167 24.1207 24.8025 24.3962 24.5994 24.5994C24.3962 24.8025 24.1207 24.9167 23.8333 24.9167H17.3333C17.046 24.9167 16.7705 24.8025 16.5673 24.5994C16.3641 24.3962 16.25 24.1207 16.25 23.8333C16.25 23.546 16.3641 23.2705 16.5673 23.0673C16.7705 22.8641 17.046 22.75 17.3333 22.75H21.2225L16.5642 18.0917H16.575Z" fill="currentColor"/>
                                </svg>
                                <p>Log Out</p>
                            </button>
                        </div>
                    </div>

                    <div class="enhanced-account-block profile-card">
                        <div class="banner"></div>
                        <div class="nameplate"></div>
                        <div class="section avatar-container">
                            <img class="avatar">
                            <img class="deco">
                        </div>
                        <div class="section">
                            <h1 id="global_name"></h1>
                            <p id="username"></p>
                        </div>
                    </div>
                </div>
            `;

            if (currentUserData) {
                const displayName = tabPageOutput.querySelector('#global_name');
                const username = tabPageOutput.querySelector('#username');
                const avatar = tabPageOutput.querySelector('.avatar');
                const deco = tabPageOutput.querySelector('.deco');
                const nameplate = tabPageOutput.querySelector('.nameplate');

                const profileButton = tabPageOutput.querySelector("#profile");
                const resyncButton = tabPageOutput.querySelector("#resync");

                if (currentUserData.global_name) displayName.textContent = currentUserData.global_name;
                else displayName.textContent = currentUserData.username;
                username.textContent = currentUserData.username;

                if (experimentIs('display_name_style_render', 1)) {
                    const dns = renderDisplayNameStyle(currentUserData.display_name_styles);
                    displayName.classList.add(dns.class);
                    Object.assign(displayName.style, dns.style);

                    if (currentUserData.display_name_styles.id === 2) {
                        displayName.classList.add('dns-gradient-type-2');
                    }
                }

                let userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.webp?size=128';
                if (currentUserData.avatar.includes('a_')) userAvatar = 'https://cdn.discordapp.com/avatars/'+currentUserData.id+'/'+currentUserData.avatar+'.gif?size=128';
                if (currentUserData.avatar) avatar.src = userAvatar;
                else avatar.remove();

                if (currentUserData.avatar_decoration) deco.src = `https://cdn.discordapp.com/avatar-decoration-presets/${currentUserData.avatar_decoration.asset}.png?size=4096&passthrough=true`;
                else deco.remove();

                if (currentUserData.banner) tabPageOutput.querySelector(".banner").style.backgroundImage = `url(https://cdn.discordapp.com/banners/${currentUserData.id}/${currentUserData.banner}.png?size=480)`;

                if (currentUserData.nameplate) {
                    if (currentUserData.nameplate.sa_override_src) {
                        let nameplatePreview = document.createElement("img");

                        nameplatePreview.src = currentUserData.nameplate.sa_override_src;
    
                        nameplate.appendChild(nameplatePreview);
                    } else {
                        let nameplatePreview = document.createElement("video");

                        nameplatePreview.src = `https://cdn.discordapp.com/assets/collectibles/${currentUserData.nameplate.asset}asset.webm`;
                        nameplatePreview.disablePictureInPicture = true;
                        nameplatePreview.muted = true;
                        nameplatePreview.loop = true;
                        nameplatePreview.playsInline = true;
                        nameplatePreview.autoplay = true;

                        const bgcolor = nameplate_palettes[currentUserData.nameplate.palette].darkBackground;
    
                        nameplate.style.backgroundImage = `linear-gradient(90deg, #00000000 0%, ${bgcolor} 200%)`;
    
                        nameplate.appendChild(nameplatePreview);
                    }
                }

                profileButton.addEventListener('click', async () => {
                    openModal('user-modal', 'openUserModal', currentUserData.id);
                });
                resyncButton.addEventListener('click', async () => {
                    resyncButton.disabled = true;
                    resyncButton.classList.add('svg-spin');
                    const success = await fetchAndSyncUserInfo();
                    if (success === true) {
                        try {
                            loadPage(currentPageCache, true);
                            document.getElementById('ubar-displayname').textContent = currentUserData.global_name ? currentUserData.global_name : currentUserData.username;
                            document.getElementById('ubar-username').textContent = currentUserData.username;
                        } catch {}
                        setModalv3InnerContent('account');
                    } else {
                        resyncButton.classList.remove('svg-spin');
                        let syncError = document.createElement("div");
                        syncError.classList.add('enhanced-account-block');
                        syncError.classList.add('error-card');
                        syncError.innerHTML = `
                            <div class="section">
                                <h3>There was an error syncing your profile!</h3>
                                <p>Your Discord access token has expired, please login again to sync your profile.</p>
                            </div>
                            <div class="section">
                                <button class="generic-button brand" onclick="loginWithDiscord();">
                                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48.7541 12.511C45.2046 10.8416 41.4614 9.66246 37.6149 9C37.0857 9.96719 36.6081 10.9609 36.1822 11.9811C32.0905 11.3451 27.9213 11.3451 23.8167 11.9811C23.3908 10.9609 22.9132 9.96719 22.384 9C18.5376 9.67571 14.7815 10.8549 11.2319 12.5243C4.18435 23.2297 2.27404 33.67 3.2292 43.9647C7.35961 47.0915 11.9805 49.4763 16.8854 51C17.9954 49.4763 18.9764 47.8467 19.8154 46.1508C18.2149 45.5413 16.6789 44.7861 15.2074 43.8984C15.5946 43.6069 15.969 43.3155 16.3433 43.024C24.9913 47.1975 35.0076 47.1975 43.6557 43.024C44.03 43.3287 44.4043 43.6334 44.7915 43.8984C43.3201 44.7861 41.7712 45.5413 40.1706 46.164C41.0096 47.8599 41.9906 49.4763 43.1006 51C48.0184 49.4763 52.6393 47.1047 56.7697 43.9647C57.8927 32.0271 54.8594 21.6927 48.7412 12.511H48.7541ZM21.0416 37.6315C18.3827 37.6315 16.1755 35.1539 16.1755 32.1066C16.1755 29.0593 18.2923 26.5552 21.0287 26.5552C23.7651 26.5552 25.9465 29.0593 25.8949 32.1066C25.8432 35.1539 23.7522 37.6315 21.0416 37.6315ZM38.9831 37.6315C36.3113 37.6315 34.1299 35.1539 34.1299 32.1066C34.1299 29.0593 36.2467 26.5552 38.9831 26.5552C41.7195 26.5552 43.888 29.0593 43.8364 32.1066C43.7847 35.1539 41.6937 37.6315 38.9831 37.6315Z" fill="white"/>
                                    </svg>
                                    Login with Discord
                                </button>
                            </div>
                        `;
                        tabPageOutput.querySelector('.enhanced-account-container').insertBefore(syncError, tabPageOutput.querySelector('.title-card').nextSibling);
                    }
                });

                if (currentUserData.banned === true) {
                    let syncError = document.createElement("div");
                    syncError.classList.add('enhanced-account-block');
                    syncError.classList.add('error-card');
                    syncError.innerHTML = `
                        <div class="section">
                            <h3>You have been banned.</h3>
                            <p>You have been banned and will not be able to use some features on Shop Archives. This ban cannot be appealed.</p>
                        </div>
                    `;
                    tabPageOutput.querySelector('.enhanced-account-container').insertBefore(syncError, tabPageOutput.querySelector('.title-card').nextSibling);
                }
            } else {
                tabPageOutput.querySelector('.enhanced-account-container').innerHTML = `
                    <div class="enhanced-account-block title-card">
                        <div class="section">
                            <h3>Discord Account</h3>
                            <p>Login with Discord to preview your profile around the website, and more!</p>
                        </div>
                        <div class="section">
                            <button class="generic-button brand" onclick="loginWithDiscord();">
                                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48.7541 12.511C45.2046 10.8416 41.4614 9.66246 37.6149 9C37.0857 9.96719 36.6081 10.9609 36.1822 11.9811C32.0905 11.3451 27.9213 11.3451 23.8167 11.9811C23.3908 10.9609 22.9132 9.96719 22.384 9C18.5376 9.67571 14.7815 10.8549 11.2319 12.5243C4.18435 23.2297 2.27404 33.67 3.2292 43.9647C7.35961 47.0915 11.9805 49.4763 16.8854 51C17.9954 49.4763 18.9764 47.8467 19.8154 46.1508C18.2149 45.5413 16.6789 44.7861 15.2074 43.8984C15.5946 43.6069 15.969 43.3155 16.3433 43.024C24.9913 47.1975 35.0076 47.1975 43.6557 43.024C44.03 43.3287 44.4043 43.6334 44.7915 43.8984C43.3201 44.7861 41.7712 45.5413 40.1706 46.164C41.0096 47.8599 41.9906 49.4763 43.1006 51C48.0184 49.4763 52.6393 47.1047 56.7697 43.9647C57.8927 32.0271 54.8594 21.6927 48.7412 12.511H48.7541ZM21.0416 37.6315C18.3827 37.6315 16.1755 35.1539 16.1755 32.1066C16.1755 29.0593 18.2923 26.5552 21.0287 26.5552C23.7651 26.5552 25.9465 29.0593 25.8949 32.1066C25.8432 35.1539 23.7522 37.6315 21.0416 37.6315ZM38.9831 37.6315C36.3113 37.6315 34.1299 35.1539 34.1299 32.1066C34.1299 29.0593 36.2467 26.5552 38.9831 26.5552C41.7195 26.5552 43.888 29.0593 43.8364 32.1066C43.7847 35.1539 41.6937 37.6315 38.9831 37.6315Z" fill="white"/>
                                </svg>
                                Login with Discord
                            </button>
                        </div>
                    </div>
                `;
            }

        } else if (tab === "appearance") {
            tabPageOutput.innerHTML = `
                <h2>Appearance</h2>
                
                <hr>

                <div class="modalv3-content-card-1">
                    <div class="top">
                        <h2 class="modalv3-content-card-header">Theme</h2>
                        <p class="modalv3-content-card-summary">Adjust the color of the interface for better visibility.</p>
                    </div>
                    <div class="bottom">
                        <div class="modalv3-theme-selection-container" id="modalv3-theme-selection-container"></div>
                    </div>
                </div>

                <hr>

                <div class="modalv3-content-card-1">
                    <div class="bottom">
                        <div class="setting">
                            <div class="setting-info">
                                <p class="setting-title">US Date Format</p>
                                <p class="setting-description">Changes date formats to MM/DD/YY.</p>
                            </div>
                            <div class="toggle-container">
                                <div class="toggle" id="us_time_format_toggle">
                                    <div class="toggle-circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="setting">
                            <div class="setting-info">
                                <p class="setting-title">Profile Effects Cut Fix.</p>
                                <p class="setting-description">Fixes some profile effects being cut off at the bottom</p>
                            </div>
                            <div class="toggle-container">
                                <div class="toggle" id="profile_effect_tweaks_fix_toggle">
                                    <div class="toggle-circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="setting">
                            <div class="setting-info">
                                <p class="setting-title">Show Product ID</p>
                                <p class="setting-description">Adds the Product ID under the SKU ID on product modsals</p>
                            </div>
                            <div class="toggle-container">
                                <div class="toggle" id="show_product_id_toggle">
                                    <div class="toggle-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            defaultThemes.forEach((theme) => {
                let themeCard = document.createElement("div");
                themeCard.innerHTML = `
                    <div class="theme-selection-box has-tooltip" id="theme-${theme.codename}-button" style="background-color: ${theme.color};" data-tooltip="${theme.name}"></div>
                    <svg class="checkmarkCircle" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" class=""></circle><path fill="currentColor" fill-rule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.7-13.3a1 1 0 0 0-1.4-1.4L10 14.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l7-7Z" clip-rule="evenodd" class="checkmark"></path></svg>
                `;
                themeCard.classList.add('theme-box-container');
                themeCard.addEventListener("click", function () {
                    updateThemeStore(theme.codename, 'true');
                });
                document.getElementById("modalv3-theme-selection-container").appendChild(themeCard);
            });

            if (document.getElementById("theme-" + localStorage.sa_theme + "-button")) {
                document.getElementById("theme-" + localStorage.sa_theme + "-button").classList.add('theme-selection-box-selected');
            }

            
            updateToggleStates();

            tabPageOutput.querySelector('#us_time_format_toggle').addEventListener("click", () => {
                toggleSetting('us_time_format');
                updateToggleStates();
            });

            tabPageOutput.querySelector('#profile_effect_tweaks_fix_toggle').addEventListener("click", () => {
                toggleSetting('profile_effect_tweaks_fix');
                updateToggleStates();
                if (!document.body.classList.contains('profile-effect-bug-fix-thumbnails')) {
                    document.body.classList.add('profile-effect-bug-fix-thumbnails');
                } else {
                    document.body.classList.remove('profile-effect-bug-fix-thumbnails');
                }
            });

            tabPageOutput.querySelector('#show_product_id_toggle').addEventListener("click", () => {
                toggleSetting('show_product_id');
                updateToggleStates();
            });

        } else if (tab === "advanced") {
            tabPageOutput.innerHTML = `
                <h2>Advanced</h2>
                
                <hr>

                <div class="modalv3-content-card-1">
                    <div class="top">
                        <h2 class="modalv3-content-card-header">Static API Mode</h2>
                        <p class="modalv3-content-card-summary">Fetches from a static api, avoiding long loading times (Removes Leaks and Miscellaneous collectibles).</p>
                    </div>
                    <div class="bottom">
                        <div class="setting">
                            <div class="setting-info">
                                <p class="setting-title">Catalog Tab</p>
                            </div>
                            <div class="toggle-container">
                                <div class="toggle" id="api_type_change_catalog_toggle">
                                    <div class="toggle-circle"></div>
                                </div>
                            </div>
                        </div>

                        <div class="setting">
                            <div class="setting-info">
                                <p class="setting-title">Orbs Tab</p>
                            </div>
                            <div class="toggle-container">
                                <div class="toggle" id="api_type_change_orbs_toggle">
                                    <div class="toggle-circle"></div>
                                </div>
                            </div>
                        </div>

                        <div class="setting">
                            <div class="setting-info">
                                <p class="setting-title">Miscellaneous Tab</p>
                            </div>
                            <div class="toggle-container">
                                <div class="toggle" id="api_type_change_misc_toggle">
                                    <div class="toggle-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            
            updateToggleStates();

            tabPageOutput.querySelector('#api_type_change_catalog_toggle').addEventListener("click", () => {
                toggleSetting('api_type_change_catalog');
                updateToggleStates();
                console.log(currentPageCache)
                clearStaticableCache();
                loadPage(currentPageCache, true, true);
            });

            tabPageOutput.querySelector('#api_type_change_orbs_toggle').addEventListener("click", () => {
                toggleSetting('api_type_change_orbs');
                updateToggleStates();
                console.log(currentPageCache)
                clearStaticableCache();
                loadPage(currentPageCache, true, true);
            });

            tabPageOutput.querySelector('#api_type_change_misc_toggle').addEventListener("click", () => {
                toggleSetting('api_type_change_misc');
                updateToggleStates();
                console.log(currentPageCache)
                clearStaticableCache();
                loadPage(currentPageCache, true, true);
            });

        } else if (tab === "xp_events") {
            tabPageOutput.innerHTML = `
                <h2>Events</h2>

                <hr>

                <div class="xp-balance-modalv3-container">
                </div>

                <hr class="inv">

                <div id="trading-cards-banner-container"></div>

                <div class="modalv3-content-card-1">
                    <h2 class="modalv3-content-card-header">Events</h2>
                    <p class="modalv3-content-card-summary">Events are a sweet way to earn free XP, keep an eye out for new events!</p>

                    <div class="modalv3-xp-events-container" id="xp-events-unclaimed">

                    </div>
                    <div class="modalv3-xp-events-container" id="xp-events-claimed">

                    </div>
                </div>
            `;

            if (experimentIs('xp_system_v2', 1)) {
                const stats = calculateCardStats(tradingConfigCache);
                tabPageOutput.querySelector('#trading-cards-banner-container').innerHTML = `
                    <div class="trading-card-banner">
                        <div class="top">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.64349 8.16714C4.31747 8.54693 4.15568 9.04068 4.19371 9.53976L5.91422 32.121C5.95225 32.6201 6.18698 33.0836 6.56677 33.4096C6.94656 33.7356 7.4403 33.8974 7.93939 33.8594L26.7573 32.4258C27.2563 32.3878 27.7199 32.1531 28.0459 31.7733C28.3719 31.3935 28.5337 30.8997 28.4957 30.4007L26.7752 7.81943C26.7371 7.32035 26.5024 6.85682 26.1226 6.5308C25.7428 6.20479 25.2491 6.043 24.75 6.08102L19.1046 6.51095L18.8179 2.74738L24.4632 2.31745C25.9605 2.20337 27.4417 2.68874 28.5811 3.66679C29.7205 4.64483 30.4247 6.03544 30.5387 7.53268L32.6894 35.7593C32.8035 37.2565 32.3181 38.7377 31.34 39.8771C30.362 41.0165 28.9714 41.7207 27.4742 41.8348L8.65627 43.2683C7.15903 43.3824 5.67779 42.897 4.53842 41.919C3.39904 40.9409 2.69486 39.5503 2.58078 38.0531L0.430133 9.82651C0.316055 8.32927 0.801426 6.84803 1.77947 5.70866C2.75752 4.56928 4.14812 3.8651 5.64536 3.75102L18.5826 2.7653L18.8694 6.52887L5.93211 7.51459C5.43303 7.55262 4.9695 7.78735 4.64349 8.16714Z" fill="currentColor"/>
                                <path d="M18.5826 2.7653L18.8179 2.74738L19.1046 6.51095L18.8694 6.52887L18.5826 2.7653Z" fill="currentColor"/>
                                <path d="M35.7864 2.31689C37.2836 2.20282 38.7652 2.68846 39.9045 3.6665C41.0437 4.64449 41.7484 6.03468 41.8625 7.53174L44.0129 35.7583C44.127 37.2555 43.6414 38.7371 42.6633 39.8765C41.6853 41.0158 40.2943 41.7204 38.7971 41.8345L32.2551 42.3325C32.6524 42.0421 33.0173 41.6976 33.3362 41.3013C34.3089 40.0924 34.7868 38.5168 34.6653 36.9214L34.344 32.7095L38.0803 32.4253C38.5793 32.3873 39.0434 32.1526 39.3694 31.7729C39.6954 31.3932 39.8566 30.899 39.8186 30.3999L38.0989 7.81885C38.0609 7.31977 37.8253 6.8558 37.4456 6.52979C37.0658 6.20403 36.5724 6.04257 36.0735 6.08057L32.3167 6.36572C32.1033 4.95926 31.4317 3.66759 30.4094 2.72607L35.7864 2.31689Z" fill="currentColor"/>
                            </svg>
                            <div class="right-top">
                                <h1>Trading Cards</h1>
                                <h2>Collect, Upgrade, Trade</h2>
                            </div>
                        </div>
                        <p>Collect All ${stats.totalCardCount} Cards!</p>
                        <div class="right">
                            <img class="cards" src="https://cdn.yapper.shop/assets/215.png">
                            <img class="trixie" src="https://cdn.yapper.shop/assets/214.png">
                        </div>
                        <div class="button-container">
                            <button class="generic-button green" onclick="openModal('trading-card-browse-modal', 'tradingCardPackBrowse')"><p>View Packs</p></button>
                        </div>
                    </div>
                    <hr class="inv">
                    <hr>
                `;
            }

            const xpBalance = tabPageOutput.querySelector('.xp-balance-modalv3-container');
            if (currentUserData) {
                const xpNeeded = currentUserData.xp_information.xp_to_level - currentUserData.xp_information.xp_into_level;
                const nextLevel = currentUserData.xp_information.level + 1;

                xpBalance.classList.add('has-tooltip');
                xpBalance.setAttribute('data-tooltip', 'You need '+xpNeeded.toLocaleString()+' more XP for Level '+nextLevel);

                xpBalance.innerHTML = `
                    <div class="bar"></div>
                    <p id="my-xp-balance">Level ${currentUserData.xp_information.level}</p>
                `;

                xpBalance.querySelector('.bar').style.width = currentUserData.xp_information.level_percentage+'%';
            }


            const unclaimedOutput = tabPageOutput.querySelector('#xp-events-unclaimed');
            const claimedOutput = tabPageOutput.querySelector('#xp-events-claimed');

            if (usersXPEventsCache) {
                refreshXPEventsList()
            }

            function refreshXPEventsList() {
                unclaimedOutput.innerHTML = ``;
                claimedOutput.innerHTML = ``;
                let unclaimedCount = 0;
                let claimedCount = 0;
                usersXPEventsCache.forEach(promo => {

                    let renderedDate;

                    let promoCard = document.createElement("div");

                    if (promo.already_claimed != true && promo.category_data === null || promo.already_claimed != true && settingsStore.staff_allow_category_only_event_claiming_in_events_tab === 1) {

                        unclaimedCount += 1;

                        promoCard.classList.add('modalv3-xp-reward');
                        promoCard.classList.add('unclaimed');

                        promoCard.innerHTML = `
                            <div id="xp-event-expires-at"></div>
                            <h3>${promo.name}</h3>
                            <p class="desc">You have ${promo.xp_reward.toLocaleString()} XP waiting for you.</p>
                            <button id="claim-xp-button">
                                Claim
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 0L17.1462 9.85378L27 13.5L17.1462 17.1462L13.5 27L9.85378 17.1462L0 13.5L9.85378 9.85378L13.5 0Z" fill="currentColor"></path>
                                </svg>
                                ${promo.xp_reward.toLocaleString()}
                            </button>
                        `;

                        promoCard.querySelector('#claim-xp-button').addEventListener('click', () => {
                            openModal('modalv2', 'xpRedeem', promo.claimable_id);
                        });
                        
                        unclaimedOutput.appendChild(promoCard)
                    } else if (promo.already_claimed != true && promo.category_data != null) {

                        unclaimedCount += 1;

                        promoCard.classList.add('modalv3-xp-reward');
                        promoCard.classList.add('unclaimed');

                        let renderedName = promo.name;

                        if (promo.category_data.type === 1) {
                            renderedName = `Check out the ${promo.name} category for ${promo.xp_reward.toLocaleString()} XP!`;
                        } else if (promo.category_data.type === 2) {
                            renderedName = `Check out the ${promo.name} leaks for ${promo.xp_reward.toLocaleString()} XP!`;
                        }

                        promoCard.innerHTML = `
                            <div id="xp-event-expires-at"></div>
                            <h3>${renderedName}</h3>
                            <p class="desc">You have ${promo.xp_reward.toLocaleString()} XP waiting for you, visit the category to claim it.</p>
                            <button id="take-me-there-xp-button">
                                Take Me There
                            </button>
                        `;

                        promoCard.querySelector('#take-me-there-xp-button').addEventListener('click', () => {
                            closeModal();
                            addParams({page: promo.category_data.page});
                            currentOpenModalId = promo.category_data.sku_id;
                            loadPage(promo.category_data.page, true);
                        });
                        
                        unclaimedOutput.appendChild(promoCard)
                    } else if (promo.already_claimed === true) {

                        claimedCount += 1;

                        promoCard.classList.add('modalv3-xp-reward');

                        let renderedName = promo.name;

                        if (promo.category_data?.type === 1) {
                            renderedName = `${promo.name} category.`;
                        } else if (promo.category_data?.type === 2) {
                            renderedName = `${promo.name} leaks.`;
                        }

                        promoCard.innerHTML = `
                            <div id="xp-event-expires-at"></div>
                            <h3>${renderedName}</h3>
                            <p class="desc">You already claimed this event reward for ${promo.xp_reward.toLocaleString()} XP.</p>
                        `;
                        
                        claimedOutput.appendChild(promoCard)
                    }

                    const expiresAt = new Date(promo.expires_at);
                            
                    if (promo.expires_at && !isNaN(expiresAt.getTime())) {
                    
                        function updateTimer() {
                            const now = new Date();
                            const timeDiff = expiresAt - now;
                    
                            if (timeDiff <= 0) {
                                if (!settingsStore.staff_show_unpublished_xp_events) {
                                    promoCard.classList.remove('unclaimed');
                                    if (promoCard.querySelector('#take-me-there-xp-button')) promoCard.querySelector('#take-me-there-xp-button').remove();
                                    if (promoCard.querySelector('#claim-xp-button')) promoCard.querySelector('#claim-xp-button').remove();
                                    if (promo.already_claimed != true) {
                                        promoCard.querySelector('.desc').textContent = `You missed out on ${promo.xp_reward.toLocaleString()} XP.`;
                                    }
                                }
                                promoCard.querySelector('#xp-event-expires-at').innerHTML = `
                                    <p class="xp-event-expires-at-text">EXPIRED</p>
                                `;
                                clearInterval(timerInterval);
                            } else {
                                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                                const date = `ENDS IN ${days}d ${hours}h ${minutes}m ${seconds}s`;

                                renderedDate = date.replace(" 0d 0h 0m", "").replace(" 0d 0h", "").replace(" 0d", "")

                                promoCard.querySelector('#xp-event-expires-at').innerHTML = `
                                    <p class="xp-event-expires-at-text">${renderedDate}</p>
                                `;
                            }
                        }
                    
                        const timerInterval = setInterval(updateTimer, 1000);
                        updateTimer();
                    } else {
                        promoCard.querySelector('#xp-event-expires-at').remove();
                    }
                });

                if (unclaimedCount === 0 && claimedCount === 0) {
                    let promoCard = document.createElement("div");

                    promoCard.classList.add('modalv3-xp-reward');

                    promoCard.innerHTML = `
                        <h3>All is quiet...</h3>
                        <p class="desc">There are no events happening right now, check back later.</p>
                    `;
                    
                    unclaimedOutput.appendChild(promoCard);
                } else if (unclaimedCount === 0) {
                    unclaimedOutput.remove();
                }
            }

            window.refreshXPEventsList = refreshXPEventsList;

        } else if (tab === "xp_perks") {
            tabPageOutput.innerHTML = `
                <h2>Levels</h2>

                <hr>

                <div class="modalv3-content-card-1">
                    <h2 class="modalv3-content-card-header">Perks</h2>
                    <p class="modalv3-content-card-summary">Earn XP and level up! Higher levels grant you better perks.</p>

                    <div class="modalv3-xp-levels-container" id="all-levels">

                    </div>
                </div>

            `;

            if (xpLevelStatsCache) {
                xpLevelStatsCache.forEach(level => {

                    let promoCard = document.createElement("div");

                    promoCard.classList.add('modalv3-xp-level-card');

                    promoCard.innerHTML = `
                        <h3>Level ${level.level}</h3>
                        <div class="xp-balance-modalv3-container">
                        </div>
                        <p class="desc">Reaching Level ${level.level} will unlock the following perks:</p>
                        <div class="xp-level-card-perks"></div>
                    `;

                    const xpBalance = promoCard.querySelector('.xp-balance-modalv3-container');

                    xpBalance.innerHTML = `
                        <div class="bar"></div>
                        <p id="my-xp-balance">${currentUserData.xp_information.xp_into_level}/${level.required_xp}</p>
                    `;

                    if (currentUserData.xp_information.level >= level.level) {
                        xpBalance.querySelector('#my-xp-balance').textContent = `${level.required_xp}/${level.required_xp}`;
                        promoCard.querySelector('.desc').textContent = `Reaching Level ${level.level} has unlocked the following perks:`;
                        xpBalance.querySelector('.bar').classList.add('shimmer');
                        xpBalance.querySelector('.bar').style.width = '100%';
                    }
                    else if (currentUserData.xp_information.level < level.level - 1) {
                        xpBalance.querySelector('#my-xp-balance').textContent = `0/${level.required_xp}`;
                    }
                    else {
                        xpBalance.querySelector('.bar').style.width = currentUserData.xp_information.level_percentage+'%';
                    }


                    if (level.level === 1) {
                        let xpLevelPerk = document.createElement("div");
                        xpLevelPerk.innerHTML = `
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                            </svg>
                            <div class="main">
                                <p>Avatar Decoration Preview</p>
                                <p class="sub">Show off your Discord avatar decoration on your profile and reviews.</p>
                            </div>
                        `;
                        if (!currentUserData.avatar_decoration) {
                            let cardError = document.createElement("div");
                            cardError.classList.add('main-err');
                            cardError.innerHTML = `
                                <p class="has-tooltip" data-tooltip="You don't have an avatar decoration on your Discord profile">You are not eligible for this perk.</p>
                            `;
                            xpLevelPerk.appendChild(cardError);
                        }
                        else if (currentUserData.user_features.includes("DECO_PERK")) {
                            let cardPerk = document.createElement("div");
                            cardPerk.classList.add('main-perk');
                            cardPerk.innerHTML = `
                                <p class="has-tooltip" data-tooltip="You have been granted this perk to use without needing to reach this Level">Active</p>
                            `;
                            xpLevelPerk.appendChild(cardPerk);
                        }
                        promoCard.querySelector('.xp-level-card-perks').appendChild(xpLevelPerk);
                    }
                    else if (level.level === 2) {
                        let xpLevelPerk = document.createElement("div");
                        xpLevelPerk.innerHTML = `
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                            </svg>
                            <div class="main">
                                <p>Server Tag Preview</p>
                                <p class="sub">Show off your Discord server tag on your profile and reviews.</p>
                            </div>
                        `;
                        if (!currentUserData.guild_tag) {
                            let cardError = document.createElement("div");
                            cardError.classList.add('main-err');
                            cardError.innerHTML = `
                                <p class="has-tooltip" data-tooltip="You don't have a server tag on your Discord profile">You are not eligible for this perk.</p>
                            `;
                            xpLevelPerk.appendChild(cardError);
                        }
                        else if (currentUserData.user_features.includes("TAG_PERK")) {
                            let cardPerk = document.createElement("div");
                            cardPerk.classList.add('main-perk');
                            cardPerk.innerHTML = `
                                <p class="has-tooltip" data-tooltip="You have been granted this perk to use without needing to reach this Level">Active</p>
                            `;
                            xpLevelPerk.appendChild(cardPerk);
                        }
                        promoCard.querySelector('.xp-level-card-perks').appendChild(xpLevelPerk);
                    }
                    else if (level.level === 3) {
                        if (experimentIs('display_name_style_xp_level_perk', 1)) {
                            let xpLevelPerk = document.createElement("div");
                            xpLevelPerk.innerHTML = `
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                                </svg>
                                <div class="main">
                                    <p>Display Name Style Preview</p>
                                    <p class="sub">Show off your Discord display name style on your profile and reviews.</p>
                                </div>
                            `;
                            if (!currentUserData.display_name_styles) {
                                let cardError = document.createElement("div");
                                cardError.classList.add('main-err');
                                cardError.innerHTML = `
                                    <p class="has-tooltip" data-tooltip="You don't have a display name style on your Discord profile">You are not eligible for this perk.</p>
                                `;
                                xpLevelPerk.appendChild(cardError);
                            }
                            else if (currentUserData.user_features.includes("NAME_STYLE_PERK")) {
                                let cardPerk = document.createElement("div");
                                cardPerk.classList.add('main-perk');
                                cardPerk.innerHTML = `
                                    <p class="has-tooltip" data-tooltip="You have been granted this perk to use without needing to reach this Level">Active</p>
                                `;
                                xpLevelPerk.appendChild(cardPerk);
                            }
                            promoCard.querySelector('.xp-level-card-perks').appendChild(xpLevelPerk);
                        }
                        let xpLevelPerk = document.createElement("div");
                        xpLevelPerk.innerHTML = `
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                            </svg>
                            <div class="main">
                                <p>Increased Review Character Limit</p>
                                <p class="sub">Lets you submit reviews with up to 200 characters.</p>
                            </div>
                        `;
                        if (currentUserData.user_features.includes("REVIEW_200_CHAR")) {
                            let cardPerk = document.createElement("div");
                            cardPerk.classList.add('main-perk');
                            cardPerk.innerHTML = `
                                <p class="has-tooltip" data-tooltip="You have been granted this perk to use without needing to reach this Level">Active</p>
                            `;
                            xpLevelPerk.appendChild(cardPerk);
                        }
                        promoCard.querySelector('.xp-level-card-perks').appendChild(xpLevelPerk);
                    }
                    else if (level.level === 4) {
                        let xpLevelPerk = document.createElement("div");
                        xpLevelPerk.innerHTML = `
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                            </svg>
                            <div class="main">
                                <p>Nameplate Preview</p>
                                <p class="sub">Show off your Discord nameplate on your profile and reviews.</p>
                            </div>
                        `;
                        if (!currentUserData.nameplate) {
                            let cardError = document.createElement("div");
                            cardError.classList.add('main-err');
                            cardError.innerHTML = `
                                <p class="has-tooltip" data-tooltip="You don't have a nameplate on your Discord profile">You are not eligible for this perk.</p>
                            `;
                            xpLevelPerk.appendChild(cardError);
                        }
                        else if (currentUserData.user_features.includes("NAMEPLATE_PERK")) {
                            let cardPerk = document.createElement("div");
                            cardPerk.classList.add('main-perk');
                            cardPerk.innerHTML = `
                                <p class="has-tooltip" data-tooltip="You have been granted this perk to use without needing to reach this Level">Active</p>
                            `;
                            xpLevelPerk.appendChild(cardPerk);
                        }
                        promoCard.querySelector('.xp-level-card-perks').appendChild(xpLevelPerk);
                    }
                    else if (level.level === 5) {
                        let xpLevelPerk = document.createElement("div");
                        xpLevelPerk.innerHTML = `
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                            </svg>
                            <div class="main">
                                <p>Increased Review Character Limit</p>
                                <p class="sub">Lets you submit reviews with up to 300 characters.</p>
                            </div>
                        `;
                        if (currentUserData.user_features.includes("REVIEW_300_CHAR")) {
                            let cardPerk = document.createElement("div");
                            cardPerk.classList.add('main-perk');
                            cardPerk.innerHTML = `
                                <p class="has-tooltip" data-tooltip="You have been granted this perk to use without needing to reach this Level">Active</p>
                            `;
                            xpLevelPerk.appendChild(cardPerk);
                        }
                        promoCard.querySelector('.xp-level-card-perks').appendChild(xpLevelPerk);
                    }


                    tabPageOutput.querySelector('#all-levels').appendChild(promoCard);
                });
            }

        } else if (tab === "experiments") {
            tabPageOutput.innerHTML = `
                <h2>Experiments</h2>

                <hr>

                <div class="modalv3-content-card-1">
                    <div class="bottom" id="modalv3-experiment-output">
                    </div>
                </div>
            `;

            function saveOverride(codename, treatmentIndex) {
                let overrides = loadOverrides();

                if (treatmentIndex === null) {
                    // User chose "Reset to Server"
                    overrides[codename] = -1; 
                } else {
                    // User chose a specific treatment manually
                    overrides[codename] = treatmentIndex;
                }
            
                saveOverrides(overrides);
                renderExperiments();
            }

            function renderExperiments() {
                const container = document.getElementById('modalv3-experiment-output');
                container.innerHTML = '';

                const overrides = loadOverrides(); 
                const serverData = loadServerExperiments();

                experiments.forEach(exp => {
                    const localValue = overrides[exp.codename];

                    // Render if it exists in overrides (even if -1)
                    if (localValue !== undefined) {
                        const wrapper = document.createElement('div');
                        wrapper.className = 'modalv3-experiment-container';

                        // "Overridden" label logic: only show if NOT -1
                        const isOverriden = document.createElement('p');
                        isOverriden.className = 'modalv3-experiment-overriden';
                        if (localValue !== -1) {
                            isOverriden.textContent = 'Overridden';
                            isOverriden.classList.add('has-tooltip');
                            isOverriden.setAttribute('data-tooltip', 'This experiment has been overridden locally');
                        } else {
                            isOverriden.classList.add('hidden');
                        }

                        const label = document.createElement('p');
                        label.textContent = exp.title;
                        label.className = 'modalv3-experiment-title';

                        const summary = document.createElement('p');
                        summary.textContent = exp.codename;
                        summary.className = 'modalv3-experiment-id';

                        const serverRollout = document.createElement('p');
                        const sValue = serverData[exp.codename] !== undefined ? serverData[exp.codename] : 'N/A';
                        serverRollout.textContent = 'Server Rollout: ' + sValue;
                        serverRollout.className = 'modalv3-experiment-id';
                    
                        const select = document.createElement('select');
                        select.className = 'modalv3-experiment-treatment-container';

                        const defaultOption = document.createElement('option');
                        defaultOption.value = 'reset'; // Using 'reset' string to distinguish
                        defaultOption.textContent = 'Reset to Server';
                        select.appendChild(defaultOption);

                        exp.treatments.forEach((treatment, i) => {
                            const option = document.createElement('option');
                            option.value = i;
                            option.textContent = 'Treatment ' + i + ': ' + treatment.title;
                            select.appendChild(option);
                        });
                    
                        // THE KEY CHANGE:
                        // If localValue is -1, use the server's value. Otherwise, use the manual value.
                        const serverValue = serverData[exp.codename];
                        select.value = (localValue === -1) ? serverValue : localValue;
                    
                        select.addEventListener('change', () => {
                            const treatmentIndex = select.value === 'reset' ? null : parseInt(select.value);
                            saveOverride(exp.codename, treatmentIndex);
                        });
                    
                        // Append elements...
                        wrapper.append(isOverriden, label, summary, serverRollout, select);
                        container.appendChild(wrapper);
                    }
                });
            }
          
            renderExperiments();

        } else if (tab === "modal_testing") {
            const textCategory = JSON.stringify(leaks_dummy_data.categories[0], undefined, 4);
            const textProduct = JSON.stringify(dummy_products[0], undefined, 4);
            tabPageOutput.innerHTML = `
                <h2>Modal Testing</h2>

                <hr>
                
                <button class="generic-button brand" onclick="openModal('modalv3', 'userSettings');">Open User Settings Modal (Not Recommended)</button>

                <hr class="inv">

                <button class="generic-button brand" id="open-text-category-button">Open Category Modal</button>

                <hr class="inv">

                <button class="generic-button brand" id="open-text-product-button">Open Product Modal</button>

                <hr class="inv">

                <input type="text" class="modalv3-input" autocomplete="off" placeholder="User ID" id="open-user-modal-input"></input>
                <button class="generic-button brand" id="open-user-modal">Open User Modal</button>

                <hr class="inv">

                <input type="text" class="modalv3-input" autocomplete="off" placeholder="Claimable ID" id="open-xp-claim-modal-input"></input>
                <button class="generic-button brand" id="open-xp-claim-modal">Open XP Claim Modal</button>
                <button class="generic-button brand" id="open-xp-redeem-modal">Open XP Redeem Modal</button>

                <hr class="inv">

                <button class="generic-button brand" id="open-loading-animation-modal">Play Loading Animation</button>
            `;

            tabPageOutput.querySelector('#open-text-category-button').addEventListener("click", () => {
                openModal('category-modal', 'fromCategoryBanner', JSON.parse(textCategory), 'https://cdn.discordapp.com/app-assets/1096190356233670716/1336165352392097853.png?size=4096');
            });

            tabPageOutput.querySelector('#open-text-product-button').addEventListener("click", () => {
                openModal('modalv2', 'fromCollectibleCard', JSON.parse(textCategory), JSON.parse(textProduct));
            });

            tabPageOutput.querySelector('#open-user-modal').addEventListener("click", () => {
                if (tabPageOutput.querySelector('#open-user-modal-input').value.trim().length != 0) {
                    openModal('user-modal', 'openUserModal', `${tabPageOutput.querySelector('#open-user-modal-input').value}`);
                }
            });

            tabPageOutput.querySelector('#open-xp-claim-modal').addEventListener("click", () => {
                if (tabPageOutput.querySelector('#open-xp-claim-modal-input').value.trim().length != 0) {
                    openModal('modalv2', 'xpClaim', `${tabPageOutput.querySelector('#open-xp-claim-modal-input').value}`);
                }
            });

            tabPageOutput.querySelector('#open-xp-redeem-modal').addEventListener("click", () => {
                if (tabPageOutput.querySelector('#open-xp-claim-modal-input').value.trim().length != 0) {
                    openModal('modalv2', 'xpRedeem', `${tabPageOutput.querySelector('#open-xp-claim-modal-input').value}`);
                }
            });

            tabPageOutput.querySelector('#open-loading-animation-modal').addEventListener("click", () => {
                openModal('modalv2', 'openLoadingTest');
            });

        } else if (tab === "trading_card_testing") {
            tabPageOutput.innerHTML = `
                <h2>Trading Card Testing</h2>

                <div class="modalv3-content-card-1">
                    <p class="modalv3-content-card-summary">Enable xp_system_v2 experiment, some things are api gated</p>
                </div>

                <hr>

                <div class="modalv3-content-card-1">
                    <h2 class="modalv3-content-card-header">Animation</h2>

                    <button class="generic-button brand" id="flip-card-test-flip">Flip</button>
                </div>

                <hr class="inv">
                <hr class="inv">

                <div class="trading-cards-list">
                    <div class="card-container">

                        <div class="flip-card" id="flip-card-test">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="https://cdn.yapper.shop/assets/216.png">
                                </div>
                                <div class="flip-card-back" id="flip-card-back-test">
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr class="inv">
                <hr class="inv">

                <div class="modalv3-content-card-1">
                    <h2 class="modalv3-content-card-header">Pack Opening Stats</h2>

                    <div class="modalv3-content-card-summary" id="gfidgfsdgiuhg"></div>
                </div>

                <hr>

                <div class="modalv3-content-card-1">
                    <h2 class="modalv3-content-card-header">Visualizer</h2>

                    <div class="trading-cards-list" id="trading-cards-list">
                    </div>
                </div>
            `;

            const tradingCardList = tradingConfigCache?.packs?.flatMap(pack => pack.cards) || [];

            const animationTestData = tradingCardList[0];

            const card = document.createElement('div');
            card.classList.add('trading-card');
            card.innerHTML = `
                <div class="top">
                    <div>
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 0L17.1462 9.85378L27 13.5L17.1462 17.1462L13.5 27L9.85378 17.1462L0 13.5L9.85378 9.85378L13.5 0Z" fill="currentColor"></path>
                        </svg>
                        <p>1,000</p>
                    </div>
                    <div>
                        <p>Trading Card</p>
                        <img src="${tradingCardIconDataUrl}" alt="" />
                    </div>
                </div>
                <div class="image">
                    <p>1/${animationTestData.rarity}</p>
                    <img class="icon" src="https://cdn.yapper.shop/trading-cards/icon/${animationTestData.id}.png">
                    <img class="bg" src="https://cdn.yapper.shop/trading-cards/bg/${animationTestData.bg}.png">
                </div>
                <div class="bottom">
                    <h2>${animationTestData.name}</h2>
                </div>
            `;

            tabPageOutput.querySelector('#flip-card-back-test').appendChild(card);


            tabPageOutput.querySelector('#flip-card-test-flip').addEventListener("click", () => {
                const flipCard = tabPageOutput.querySelector('#flip-card-test');

                if (flipCard.classList.contains('flip')) flipCard.classList.remove('flip')
                else flipCard.classList.add('flip')
            });


            const totalWeight = tradingCardList.reduce((sum, item) => sum + (1 / item.rarity), 0);
            tradingCardList.forEach(item => {
                const probability = (1 / item.rarity) / totalWeight;
                const percentage = (probability * 100).toFixed(2);

                const a = document.createElement('p');
                a.textContent = `${item.name}: ${percentage}% chance (1/${item.rarity} base rarity)`;
                tabPageOutput.querySelector('#gfidgfsdgiuhg').appendChild(a)
            });

            tradingCardList.forEach(data => {
                const card = document.createElement('div');
                card.classList.add('trading-card');
                card.innerHTML = `
                    <div class="top">
                        <div>
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 0L17.1462 9.85378L27 13.5L17.1462 17.1462L13.5 27L9.85378 17.1462L0 13.5L9.85378 9.85378L13.5 0Z" fill="currentColor"></path>
                            </svg>
                            <p>1,000</p>
                        </div>
                        <div>
                            <p>Trading Card</p>
                            <img src="${tradingCardIconDataUrl}" alt="" />
                        </div>
                    </div>
                    <div class="image">
                        <p>1/${data.rarity}</p>
                        <img class="icon" src="https://cdn.yapper.shop/trading-cards/icon/${data.id}.png">
                        <img class="bg" src="https://cdn.yapper.shop/trading-cards/bg/${data.bg}.png">
                    </div>
                    <div class="bottom">
                        <h2>${data.name}</h2>
                    </div>
                `;

                tabPageOutput.querySelector('#trading-cards-list').appendChild(card)
            });

        } else if (tab === "database_testing") {
            tabPageOutput.innerHTML = `
                <h2>Database Testing</h2>

                <hr>

                <div class="modalv3-content-card-1">
                    <div class="top">
                        <h2 class="modalv3-content-card-header">Get item by ID</h2>
                        <p class="modalv3-content-card-summary">Fetch item data from the database using an SKU ID or Product ID</p>
                    </div>
                    <div class="bottom">
                        <input type="text" class="modalv3-input" autocomplete="off" placeholder="ID" id="fetch-product-v4-input" inputmode="numeric"></input>

                        <div class="setting">
                            <div class="setting-info">
                                <p class="setting-title">Fetch with Discord integration</p>
                                <p class="setting-description">Only works with SKU ID</p>
                            </div>
                            <div class="toggle-container">
                                <div class="toggle" id="fetch_from_discord_toggle">
                                    <div class="toggle-circle"></div>
                                </div>
                            </div>
                        </div>

                        <button class="generic-button brand" id="fetch-product-v4-btn">Fetch Product Data</button>

                        <hr class="inv">

                        <p class="modalv3-content-card-summary">Product output:</p>

                        <div class="products-wrapper" id="fetch-product-v4-output"></div>
                    </div>
                </div>
            `;

            let cuteStore = {
                "fetch_from_discord": 0
            };

            tabPageOutput.querySelector('#fetch_from_discord_toggle').addEventListener("click", () => {
                toggleSettingCute('fetch_from_discord');
            });

            function toggleSettingCute(key) {
                if (key in cuteStore) {
                    cuteStore[key] = cuteStore[key] === 0 ? 1 : 0;
                    updateToggleStatesCute();
                }
            }
            function updateToggleStatesCute() {
                Object.keys(cuteStore).forEach(key => {
                    const toggle = document.getElementById(`${key}_toggle`);
                    if (toggle) {
                        toggle.classList.toggle('active', cuteStore[key] === 1);
                    }
                });
            }

            const v4input = tabPageOutput.querySelector('#fetch-product-v4-input');
            const productsWrapper = tabPageOutput.querySelector('#fetch-product-v4-output');
            tabPageOutput.querySelector('#fetch-product-v4-btn').addEventListener("click", async () => {
                if (v4input.value.trim().length != 0) {
                    productsWrapper.innerHTML = ``;

                    const URLParams = new URLSearchParams();
                    if (cuteStore.fetch_from_discord === 1) {
                        URLParams.append("source", "discord");
                    }

                    try {
                        const queryString = URLParams.size > 0 ? `?${URLParams.toString()}` : '';
                        const data = await fetchAPI.get(endpnts.PRODUCT + v4input.value.trim() + queryString);

                        const item = await renderProduct(leaks_dummy_data.categories[0], data);
                        productsWrapper.appendChild(item);
                    } catch(err) {
                        console.error(err);
                        if (err) {
                            const error = JSON.parse(err)
                            productsWrapper.innerHTML = `
                                <div class="errormessagejsonthingidk">
                                    <h3>${error.status}: ${error.error}</h3>
                                    <p>${error.message}</p>
                                </div>
                            `;
                        } else {
                            productsWrapper.innerHTML = `There was an error fetching that product`;
                        }
                    }
                }
            });
            v4input.addEventListener('input', function(e) {
                const start = this.selectionStart;
                const end = this.selectionEnd;

                const newValue = this.value.replace(/[^0-9]/g, '');
                          
                if (this.value !== newValue) {
                    this.value = newValue;
                    this.setSelectionRange(start - 1, end - 1);
                }
            });

        } else {
            console.error(tab + ' is not a valid tab');
        }
    }

    window.setModalv3InnerContent = setModalv3InnerContent;

    function setDevSidebarTab(tab) {

        const devtoolsContainer = document.querySelector('.staff-devtools-container');

        if (devtoolsOpenCache != 1 && tab === 1) {

            devtoolsOpenCache = 1;

            devtoolsContainer.innerHTML = `
                <div class="staff-devtools">
                    <h2>Devtools</h2>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">Shop: Force Leaks</p>
                            <p class="setting-description">Overrides the leaks endpoint with client side dummy data (requires restart).</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_force_leaks_dummy_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">Shop: Force Show Reviews</p>
                            <p class="setting-description">Allows you to view the reviews for a category even if its reviews are disabled.</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_force_viewable_reviews_tab_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">Shop: Test Categories</p>
                            <p class="setting-description">Shows the test categories in the misc tab.</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_show_test_categories_on_misc_page_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">Simulate: Lite Ban</p>
                            <p class="setting-description">Simulate the user being banned.</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_simulate_banned_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">Simulate: Guidelines Block</p>
                            <p class="setting-description">Simulate the user having a username that doesn't follow the guidelines.</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_simulate_guidelines_block_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">Simulate: Sus Block</p>
                            <p class="setting-description">Simulate the user having a sus account.</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_simulate_sus_block_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">XP: Unpublished Xp Events</p>
                            <p class="setting-description">Allows you to see unpublished or expired XP events.</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_show_unpublished_xp_events_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">XP: Bypass Category Requirement</p>
                            <p class="setting-description">Allows you to claim category only events from the events tab.</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_allow_category_only_event_claiming_in_events_tab_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">Auth: Remove prompt=none</p>
                            <p class="setting-description">You'll want to enable this if discord browser forces you to auth with the app when you don't want it to.</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_auth_remove_none_promt_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="setting">
                        <div class="setting-info">
                            <p class="setting-title">Force enable reviews</p>
                            <p class="setting-description">Heleleeelelee!! tf you think this does?</p>
                        </div>
                        <div class="toggle-container">
                            <div class="toggle" id="staff_force_enable_reviews_toggle">
                                <div class="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            updateToggleStates();

            devtoolsContainer.querySelector('#staff_force_leaks_dummy_toggle').addEventListener("click", () => {
                toggleSetting('staff_force_leaks_dummy');
                updateToggleStates();
            });

            devtoolsContainer.querySelector('#staff_force_viewable_reviews_tab_toggle').addEventListener("click", () => {
                toggleSetting('staff_force_viewable_reviews_tab');
                updateToggleStates();
            });

            devtoolsContainer.querySelector('#staff_show_test_categories_on_misc_page_toggle').addEventListener("click", () => {
                toggleSetting('staff_show_test_categories_on_misc_page');
                updateToggleStates();
                console.log(currentPageCache)
                loadPage(currentPageCache, true, true);
            });

            devtoolsContainer.querySelector('#staff_simulate_banned_toggle').addEventListener("click", () => {
                toggleSetting('staff_simulate_banned');
                updateToggleStates();
            });

            devtoolsContainer.querySelector('#staff_simulate_guidelines_block_toggle').addEventListener("click", () => {
                toggleSetting('staff_simulate_guidelines_block');
                updateToggleStates();
            });

            devtoolsContainer.querySelector('#staff_simulate_sus_block_toggle').addEventListener("click", () => {
                toggleSetting('staff_simulate_sus_block');
                updateToggleStates();
            });

            devtoolsContainer.querySelector('#staff_show_unpublished_xp_events_toggle').addEventListener("click", () => {
                toggleSetting('staff_show_unpublished_xp_events');
                updateToggleStates();
                fetchAndUpdateXpEvents();
            });

            devtoolsContainer.querySelector('#staff_allow_category_only_event_claiming_in_events_tab_toggle').addEventListener("click", () => {
                toggleSetting('staff_allow_category_only_event_claiming_in_events_tab');
                updateToggleStates();
            });

            devtoolsContainer.querySelector('#staff_auth_remove_none_promt_toggle').addEventListener("click", () => {
                toggleSetting('staff_auth_remove_none_promt');
                updateToggleStates();
            });

            devtoolsContainer.querySelector('#staff_force_enable_reviews_toggle').addEventListener("click", () => {
                toggleSetting('staff_force_enable_reviews');
                updateToggleStates();
            });

        } else if (devtoolsOpenCache != 2 && tab === 2) {

            devtoolsOpenCache = 2;

            devtoolsContainer.innerHTML = `
                <div class="staff-devtools">
                    <h2>Built in user editor will go here</h2>
                </div>
            `;
        } else {
            devtoolsOpenCache = 0;
            devtoolsContainer.innerHTML = ``;
        }
    }

    window.setDevSidebarTab = setDevSidebarTab;

    if (settingsStore.dev === 1) {
        document.getElementById('dev-tools-icon').classList.remove('hidden');
    }

}
window.loadSite = loadSite;



const removeonMobileObserver = new MutationObserver(() => {
    if (isMobileCache) {
        const elements = document.querySelectorAll('.remove-on-mobile');
        elements.forEach(el => {
            el.remove();
        });
    }
});
removeonMobileObserver.observe(document.body, {
    childList: true,
    subtree: true
});

async function triggerSafetyBlock(errmsg) {
    try {
        document.querySelector(".brick-wall-info").innerHTML = `
            <img class="trixie" src="https://cdn.yapper.shop/assets/207.png">
            <div class="brick-wall-text">
                <h2 class="error-text">Oopsie</h2>
                <p>An unexpected error has occurred on our end, Shop Archives is currently unavailable. We are currently working on fixing the issue, you will be able to use Shop Archives again soon.</p>
            </div>
            <div id="put-brick-status">
            </div>
        `;
        // if (errmsg && errmsg === "Failed to fetch") {
        //     document.querySelector("#put-brick-status").innerHTML = `
        //         <hr>
        //         <div class="brick-wall-status">
        //             <div>
        //                 <h3>Website</h3>
        //                 <p>Operational</p>
        //                 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M12.5007 22.9173C18.2536 22.9173 22.9173 18.2536 22.9173 12.5007C22.9173 6.74768 18.2536 2.08398 12.5007 2.08398C6.74768 2.08398 2.08398 6.74768 2.08398 12.5007C2.08398 18.2536 6.74768 22.9173 12.5007 22.9173Z" fill="white"/>
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12.5C1 6.14873 6.14873 1 12.5 1C18.8512 1 24 6.14873 24 12.5C24 18.8512 18.8512 24 12.5 24C6.14873 24 1 18.8512 1 12.5ZM18.0203 9.65671C18.3265 9.3505 18.3265 8.85404 18.0203 8.54784C17.7141 8.24163 17.2177 8.24163 16.9115 8.54784L10.6705 14.7888L8.08853 12.207C7.78232 11.9007 7.28586 11.9007 6.97965 12.207C6.67345 12.5132 6.67345 13.0096 6.97965 13.3158L10.116 16.4521C10.4223 16.7583 10.9186 16.7583 11.2249 16.4521L18.0203 9.65671Z" fill="#77B255"/>
        //                 </svg>
        //             </div>
        //             <div>
        //                 <h3>API</h3>
        //                 <p>Unresponsive</p>
        //                 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M12.5007 22.9173C18.2536 22.9173 22.9173 18.2536 22.9173 12.5007C22.9173 6.74768 18.2536 2.08398 12.5007 2.08398C6.74768 2.08398 2.08398 6.74768 2.08398 12.5007C2.08398 18.2536 6.74768 22.9173 12.5007 22.9173Z" fill="white"/>
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4993 23.9577C15.5383 23.9577 18.4528 22.7505 20.6016 20.6016C22.7505 18.4528 23.9577 15.5383 23.9577 12.4993C23.9577 9.46041 22.7505 6.54594 20.6016 4.39708C18.4528 2.24823 15.5383 1.04102 12.4993 1.04102C9.46041 1.04102 6.54594 2.24823 4.39708 4.39708C2.24823 6.54594 1.04102 9.46041 1.04102 12.4993C1.04102 15.5383 2.24823 18.4528 4.39708 20.6016C6.54594 22.7505 9.46041 23.9577 12.4993 23.9577ZM13.9993 7.35352L13.6035 14.5827C13.6035 14.8755 13.4872 15.1564 13.2801 15.3634C13.073 15.5705 12.7922 15.6869 12.4993 15.6869C12.2065 15.6869 11.9257 15.5705 11.7186 15.3634C11.5115 15.1564 11.3952 14.8755 11.3952 14.5827L10.9994 7.35352C10.9908 7.21156 11.0114 7.06935 11.06 6.93567C11.1085 6.80198 11.1838 6.67965 11.2814 6.5762C11.379 6.47275 11.4968 6.39039 11.6274 6.33417C11.758 6.27796 11.8988 6.24909 12.041 6.24935H12.9577C13.0999 6.24909 13.2407 6.27796 13.3713 6.33417C13.5019 6.39039 13.6197 6.47275 13.7173 6.5762C13.8149 6.67965 13.8902 6.80198 13.9387 6.93567C13.9873 7.06935 14.0079 7.21156 13.9993 7.35352ZM13.8014 18.4889C13.8014 18.8343 13.6642 19.1655 13.4201 19.4096C13.1759 19.6538 12.8447 19.791 12.4993 19.791C12.154 19.791 11.8228 19.6538 11.5786 19.4096C11.3344 19.1655 11.1973 18.8343 11.1973 18.4889C11.1973 18.1436 11.3344 17.8124 11.5786 17.5682C11.8228 17.324 12.154 17.1869 12.4993 17.1869C12.8447 17.1869 13.1759 17.324 13.4201 17.5682C13.6642 17.8124 13.8014 18.1436 13.8014 18.4889Z" fill="#D52E3B"/>
        //                 </svg>
        //             </div>
        //             <div>
        //                 <h3>Database</h3>
        //                 <p>Operational</p>
        //                 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M12.5007 22.9173C18.2536 22.9173 22.9173 18.2536 22.9173 12.5007C22.9173 6.74768 18.2536 2.08398 12.5007 2.08398C6.74768 2.08398 2.08398 6.74768 2.08398 12.5007C2.08398 18.2536 6.74768 22.9173 12.5007 22.9173Z" fill="white"/>
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12.5C1 6.14873 6.14873 1 12.5 1C18.8512 1 24 6.14873 24 12.5C24 18.8512 18.8512 24 12.5 24C6.14873 24 1 18.8512 1 12.5ZM18.0203 9.65671C18.3265 9.3505 18.3265 8.85404 18.0203 8.54784C17.7141 8.24163 17.2177 8.24163 16.9115 8.54784L10.6705 14.7888L8.08853 12.207C7.78232 11.9007 7.28586 11.9007 6.97965 12.207C6.67345 12.5132 6.67345 13.0096 6.97965 13.3158L10.116 16.4521C10.4223 16.7583 10.9186 16.7583 11.2249 16.4521L18.0203 9.65671Z" fill="#77B255"/>
        //                 </svg>
        //             </div>
        //         </div>
        //     `;
        // } else {
        //     const res = await fetch(APIV4 + '/status');
        //     const status = await res.json();
        //     const brickStatus = document.querySelector("#put-brick-status");

        //     document.querySelector("#put-brick-status").innerHTML = `
        //         <hr>
        //         <div class="brick-wall-status">
        //             <div>
        //                 <h3>Website</h3>
        //                 <p>Operational</p>
        //                 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M12.5007 22.9173C18.2536 22.9173 22.9173 18.2536 22.9173 12.5007C22.9173 6.74768 18.2536 2.08398 12.5007 2.08398C6.74768 2.08398 2.08398 6.74768 2.08398 12.5007C2.08398 18.2536 6.74768 22.9173 12.5007 22.9173Z" fill="white"/>
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12.5C1 6.14873 6.14873 1 12.5 1C18.8512 1 24 6.14873 24 12.5C24 18.8512 18.8512 24 12.5 24C6.14873 24 1 18.8512 1 12.5ZM18.0203 9.65671C18.3265 9.3505 18.3265 8.85404 18.0203 8.54784C17.7141 8.24163 17.2177 8.24163 16.9115 8.54784L10.6705 14.7888L8.08853 12.207C7.78232 11.9007 7.28586 11.9007 6.97965 12.207C6.67345 12.5132 6.67345 13.0096 6.97965 13.3158L10.116 16.4521C10.4223 16.7583 10.9186 16.7583 11.2249 16.4521L18.0203 9.65671Z" fill="#77B255"/>
        //                 </svg>
        //             </div>
        //         </div>
        //     `;

        //     const container = brickStatus.querySelector(".brick-wall-status");
            
        //     const icons = {
        //         ok: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5007 22.9173C18.2536 22.9173 22.9173 18.2536 22.9173 12.5007C22.9173 6.74768 18.2536 2.08398 12.5007 2.08398C6.74768 2.08398 2.08398 6.74768 2.08398 12.5007C2.08398 18.2536 6.74768 22.9173 12.5007 22.9173Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12.5C1 6.14873 6.14873 1 12.5 1C18.8512 1 24 6.14873 24 12.5C24 18.8512 18.8512 24 12.5 24C6.14873 24 1 18.8512 1 12.5ZM18.0203 9.65671C18.3265 9.3505 18.3265 8.85404 18.0203 8.54784C17.7141 8.24163 17.2177 8.24163 16.9115 8.54784L10.6705 14.7888L8.08853 12.207C7.78232 11.9007 7.28586 11.9007 6.97965 12.207C6.67345 12.5132 6.67345 13.0096 6.97965 13.3158L10.116 16.4521C10.4223 16.7583 10.9186 16.7583 11.2249 16.4521L18.0203 9.65671Z" fill="#77B255"/></svg>`,
        //         error: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5007 22.9173C18.2536 22.9173 22.9173 18.2536 22.9173 12.5007C22.9173 6.74768 18.2536 2.08398 12.5007 2.08398C6.74768 2.08398 2.08398 6.74768 2.08398 12.5007C2.08398 18.2536 6.74768 22.9173 12.5007 22.9173Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4993 23.9577C15.5383 23.9577 18.4528 22.7505 20.6016 20.6016C22.7505 18.4528 23.9577 15.5383 23.9577 12.4993C23.9577 9.46041 22.7505 6.54594 20.6016 4.39708C18.4528 2.24823 15.5383 1.04102 12.4993 1.04102C9.46041 1.04102 6.54594 2.24823 4.39708 4.39708C2.24823 6.54594 1.04102 9.46041 1.04102 12.4993C1.04102 15.5383 2.24823 18.4528 4.39708 20.6016C6.54594 22.7505 9.46041 23.9577 12.4993 23.9577ZM13.9993 7.35352L13.6035 14.5827C13.6035 14.8755 13.4872 15.1564 13.2801 15.3634C13.073 15.5705 12.7922 15.6869 12.4993 15.6869C12.2065 15.6869 11.9257 15.5705 11.7186 15.3634C11.5115 15.1564 11.3952 14.8755 11.3952 14.5827L10.9994 7.35352C10.9908 7.21156 11.0114 7.06935 11.06 6.93567C11.1085 6.80198 11.1838 6.67965 11.2814 6.5762C11.379 6.47275 11.4968 6.39039 11.6274 6.33417C11.758 6.27796 11.8988 6.24909 12.041 6.24935H12.9577C13.0999 6.24909 13.2407 6.27796 13.3713 6.33417C13.5019 6.39039 13.6197 6.47275 13.7173 6.5762C13.8149 6.67965 13.8902 6.80198 13.9387 6.93567C13.9873 7.06935 14.0079 7.21156 13.9993 7.35352ZM13.8014 18.4889C13.8014 18.8343 13.6642 19.1655 13.4201 19.4096C13.1759 19.6538 12.8447 19.791 12.4993 19.791C12.154 19.791 11.8228 19.6538 11.5786 19.4096C11.3344 19.1655 11.1973 18.8343 11.1973 18.4889C11.1973 18.1436 11.3344 17.8124 11.5786 17.5682C11.8228 17.324 12.154 17.1869 12.4993 17.1869C12.8447 17.1869 13.1759 17.324 13.4201 17.5682C13.6642 17.8124 13.8014 18.1436 13.8014 18.4889Z" fill="#D52E3B"/></svg>`
        //     };

        //     function createStatusItem(title, isOk) {
        //         const div = document.createElement("div");
        //         div.innerHTML = `
        //             <h3>${title}</h3>
        //             <p>${isOk ? "Operational" : "Unresponsive"}</p>
        //             ${isOk ? icons.ok : icons.error}
        //         `;
        //         return div;
        //     }

        //     const apiItem = createStatusItem("API", status.checks.server === "ok");
        //     const dbItem = createStatusItem("Database", status.checks.database === "ok");

        //     container.append(apiItem, dbItem);
        // }
    } catch {
        
    }
}

if (appType === "Dev") {
    document.getElementById('logo-link-brick').textContent = 'dev.yapper.shop'
} else {
    document.getElementById('logo-link-brick').textContent = 'yapper.shop'
}

function triggerSessionExpiredBlock() {
    const currentLoggedInUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    try {
        document.querySelector(".brick-wall-info").innerHTML = `
            <div class="brick-wall-text">
                <h2 class="error-text">Session Expired!</h2>
            </div>
            <div class="brick-wall-user-container">
                <div class="brick-wall-user">
                    <img src="https://cdn.discordapp.com/avatars/${currentLoggedInUser?.id}/${currentLoggedInUser?.avatar}.webp?size=128">
                    <div>
                        <h3 class="error-text">${currentLoggedInUser?.global_name ?? currentLoggedInUser?.username}</h3>
                        <p>${currentLoggedInUser?.username}</p>
                    </div>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5007 22.9173C18.2536 22.9173 22.9173 18.2536 22.9173 12.5007C22.9173 6.74768 18.2536 2.08398 12.5007 2.08398C6.74768 2.08398 2.08398 6.74768 2.08398 12.5007C2.08398 18.2536 6.74768 22.9173 12.5007 22.9173Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4993 23.9577C15.5383 23.9577 18.4528 22.7505 20.6016 20.6016C22.7505 18.4528 23.9577 15.5383 23.9577 12.4993C23.9577 9.46041 22.7505 6.54594 20.6016 4.39708C18.4528 2.24823 15.5383 1.04102 12.4993 1.04102C9.46041 1.04102 6.54594 2.24823 4.39708 4.39708C2.24823 6.54594 1.04102 9.46041 1.04102 12.4993C1.04102 15.5383 2.24823 18.4528 4.39708 20.6016C6.54594 22.7505 9.46041 23.9577 12.4993 23.9577ZM13.9993 7.35352L13.6035 14.5827C13.6035 14.8755 13.4872 15.1564 13.2801 15.3634C13.073 15.5705 12.7922 15.6869 12.4993 15.6869C12.2065 15.6869 11.9257 15.5705 11.7186 15.3634C11.5115 15.1564 11.3952 14.8755 11.3952 14.5827L10.9994 7.35352C10.9908 7.21156 11.0114 7.06935 11.06 6.93567C11.1085 6.80198 11.1838 6.67965 11.2814 6.5762C11.379 6.47275 11.4968 6.39039 11.6274 6.33417C11.758 6.27796 11.8988 6.24909 12.041 6.24935H12.9577C13.0999 6.24909 13.2407 6.27796 13.3713 6.33417C13.5019 6.39039 13.6197 6.47275 13.7173 6.5762C13.8149 6.67965 13.8902 6.80198 13.9387 6.93567C13.9873 7.06935 14.0079 7.21156 13.9993 7.35352ZM13.8014 18.4889C13.8014 18.8343 13.6642 19.1655 13.4201 19.4096C13.1759 19.6538 12.8447 19.791 12.4993 19.791C12.154 19.791 11.8228 19.6538 11.5786 19.4096C11.3344 19.1655 11.1973 18.8343 11.1973 18.4889C11.1973 18.1436 11.3344 17.8124 11.5786 17.5682C11.8228 17.324 12.154 17.1869 12.4993 17.1869C12.8447 17.1869 13.1759 17.324 13.4201 17.5682C13.6642 17.8124 13.8014 18.1436 13.8014 18.4889Z" fill="#D52E3B"/>
                    </svg>
                </div>
            </div>
            <div class="brick-wall-buttons-container">
                <button class="generic-button brand" onclick="loginWithDiscord();">
                    Login with Discord
                </button>
                <button class="generic-button primary" onclick="logoutOfDiscord();">
                    Continue as Guest
                </button>
            </div>
        `;
    } catch {
        
    }
}

function createNotice(text, type) {
    const notice = document.getElementById('notice-container');
    let noticeDiv = document.createElement("div");

    noticeDiv.innerHTML = `
        <div class="notice">
            <p>${text}</p>
            <svg class="closeIcon" onclick="this.parentElement.remove();" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
        </div>
    `;

    notice.appendChild(noticeDiv);
    if (type === 1) {
        notice.classList.add('neutral');
    } else if (type === 2) {
        notice.classList.add('brand');
    } else if (type === 4) {
        notice.classList.add('danger');
    } else {
        notice.classList.add('default');
    }
}

function updateThemeStore(theme, hasButtons) {
    if (hasButtons === "true") {
        try {
            if (document.querySelector(".theme-selection-box-selected")) {
                document.querySelectorAll('.theme-selection-box-selected').forEach((el) => {
                    el.classList.remove("theme-selection-box-selected");
                });
            }
            document.body.classList.remove('theme-' + localStorage.sa_theme);
        } catch (error) {
        }
        if (document.getElementById("theme-" + theme + "-button")) {
            document.getElementById("theme-" + theme + "-button").classList.add('theme-selection-box-selected');
        }
    }
    document.body.classList.add('theme-' + theme);
    localStorage.sa_theme = theme;
}

function copyValue(value) {
    navigator.clipboard.writeText(value);
    if (value.includes("http")) {
        copyNotice(2);
    } else {
        copyNotice(1);
    }
}

function redirectToLink(link) {
    window.location.href = link;
}

function loginWithDiscord() {
    // noticeBlock({
    //     type: 1,
    //     message: "You cannot login at this time",
    //     autoRemove: true,
    //     removeTime: 5000
    // })
    // return;

    let redirect;
    if (appType === "Stable") {
        redirect = APIV4 + endpnts.STABLE + endpnts.CALLBACK;
    } else if (appType === "Dev") {
        redirect = APIV4 + endpnts.DEV + endpnts.CALLBACK;
    }
    let discordUrl = `https://discord.com/api/oauth2/authorize?client_id=1342635740768501886&redirect_uri=${encodeURIComponent(redirect)}&response_type=code&scope=identify&prompt=none`;
    if (settingsStore.staff_auth_remove_none_promt === 1) {
        discordUrl = `https://discord.com/api/oauth2/authorize?client_id=1342635740768501886&redirect_uri=${encodeURIComponent(redirect)}&response_type=code&scope=identify`;
    }
    window.location.href = discordUrl;
}

function logoutOfDiscord() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    location.reload();
}

function dev() {
    if (settingsStore.dev === 0) {
        changeSetting('dev', 1);
    } else {
        changeSetting('dev', 0);
    }
    location.reload();
}


async function postReview(categoryId, rating, text, item_id) {
    try {
        const data = await fetchAPI.post(endpnts.CATEGORY + categoryId + endpnts.REVIEWS, {
            rating,
            text,
            item_id
        });
        return data;
    } catch(err) {
        console.error(err);
        return JSON.parse(err);
    }
};

async function deleteReviewById(reviewId) {
    const api = APIV4 + endpnts.REVIEWS_DELETED + reviewId;
    const response = await fetch(api, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": localStorage.token
        }
    });
    if (!response.ok) {
        const result = await response.json();
        noticeBlock({
            type: 1,
            message: `Failed to fetch '${api}': ${result.status}, ${result.error}`,
            autoRemove: true,
            removeTime: 5000
        });
        return {failed:true};
    } else {
        return {failed:false};
    }
};



function copyNotice(type) {
    if (type === 1) {
        string = "Content Copied to Clipboard";
    } else if (type === 2) {
        string = "Link Copied to Clipboard";
    } else if (type === 3) {
        string = "Item Added to Favorites";
    } else if (type === 4) {
        string = "Item Removed from Favorites";
    } else {
        string = "Something Went Wrong";
        console.warn('Invalid copyNotice')
    }

    let copyNotice = document.createElement("div");

    copyNotice.classList.add('copy-notice-container');
    copyNotice.innerHTML = `
        <p>${string}</p>
    `;
                 
    document.body.appendChild(copyNotice);
    setTimeout(() => {
        copyNotice.remove();
    }, 5000);
}

async function postManualCategory(category) {

    let url = APIV4 + '/post-category';
    apiUrl = new URL(url);
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": localStorage.token
        },
        body: JSON.stringify({
            category
        })
    });
    const result = await response.json();
    return result;
};








// Smooth Animate Text Code

function animateNumber(element, targetValue, duration = 1000, options = {}) {
    // Handle both element ID strings and actual DOM elements
    const targetElement = typeof element === 'string' ? document.getElementById(element) : element;
    
    if (!targetElement) {
        console.error('Element not found');
        return;
    }
    
    const startValue = parseFloat(targetElement.textContent.replace(/,/g, '')) || 0;
    const difference = targetValue - startValue;
    const startTime = performance.now();
    
    // Options for formatting
    const useCommas = options.useCommas !== undefined ? options.useCommas : true;
    const useDecimals = options.useDecimals !== undefined ? options.useDecimals : false;
    
    // Store original styles to restore later
    const originalColor = targetElement.style.color || '#2563eb';
    const originalBgColor = targetElement.style.backgroundColor || '#f8fafc';
    
    // Easing function for smooth animation (ease-out)
    function easeOut(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Apply easing function
        const easedProgress = easeOut(progress);
        
        // Calculate current value
        const currentValue = startValue + (difference * easedProgress);
        
        // Format number based on options
        let formattedValue;
        if (useDecimals) {
            formattedValue = currentValue.toFixed(1);
            if (useCommas) {
                formattedValue = parseFloat(formattedValue).toLocaleString(undefined, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                });
            }
        } else if (useCommas) {
            formattedValue = Math.round(currentValue).toLocaleString();
        } else {
            formattedValue = Math.round(currentValue).toString();
        }
        
        targetElement.textContent = formattedValue;
        
        // Continue animation if not complete
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}









// tooltip code

let tooltip = null;
let hideTimeout = null;
let currentTarget = null;

// --- Helpers ---

function positionTooltip(target) {
    if (!tooltip) return;

    const rect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top = rect.top - tooltipRect.height - 8;
    let left = rect.left + (rect.width - tooltipRect.width) / 2;

    // Default arrow to bottom; flip to top if tooltip would go off-screen upward
    const flipped = top < 0;
    tooltip.style.setProperty('--arrow-position', flipped ? 'top' : 'bottom');
    if (flipped) top = rect.bottom + 8;

    left = Math.max(8, Math.min(left, window.innerWidth - tooltipRect.width - 8));

    tooltip.style.top = `${top + window.scrollY}px`;
    tooltip.style.left = `${left + window.scrollX}px`;
}

function cleanupTooltip() {
    clearTimeout(hideTimeout);
    hideTimeout = null;
    tooltip?.remove();
    tooltip = null;
    currentTarget = null;
}

// --- Core ---

function createTooltip(target, text) {
    if (tooltip && currentTarget === target) {
        tooltip.textContent = text;
        positionTooltip(target);
        return;
    }

    cleanupTooltip();
    currentTarget = target;

    tooltip = document.createElement('div');
    tooltip.className = 'tooltip-box';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);
    positionTooltip(target);

    requestAnimationFrame(() => {
        if (tooltip) tooltip.style.opacity = '1';
    });
}

function hideTooltip() {
    if (!tooltip) return;

    tooltip.style.opacity = '0';
    hideTimeout = setTimeout(() => {
        tooltip?.remove();
        tooltip = null;
        currentTarget = null;
    }, 200);
}

// --- Event Listeners ---

document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('.has-tooltip');
    if (!target || currentTarget === target) return;

    const text = target.getAttribute('data-tooltip');
    if (text) createTooltip(target, text);
});

document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('.has-tooltip');
    if (!target || target !== currentTarget) return;
    if (!target.contains(e.relatedTarget)) hideTooltip();
});

// --- Observers ---

// Update tooltip text live if data-tooltip changes on the active target
const attributeObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'data-tooltip' &&
            mutation.target === currentTarget
        ) {
            const newText = currentTarget.getAttribute('data-tooltip');
            if (tooltip) {
                tooltip.textContent = newText;
                positionTooltip(currentTarget);
            }
        }
    }
});

attributeObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ['data-tooltip'],
    subtree: true,
});

// Clean up if the active target is removed from the DOM
const removalObserver = new MutationObserver(() => {
    if (currentTarget && !document.contains(currentTarget)) cleanupTooltip();
});

removalObserver.observe(document.body, { childList: true, subtree: true });

// Clean up on hide/blur/scroll
document.addEventListener('visibilitychange', () => { if (document.hidden) cleanupTooltip(); });
window.addEventListener('blur', cleanupTooltip);
window.addEventListener('scroll', cleanupTooltip);







// Global variables for clickablePopup management
let currentclickablePopup = null;
let clickablePopupBackdrop = null;

// Create backdrop element
function createBackdrop() {
    if (!clickablePopupBackdrop) {
        clickablePopupBackdrop = document.createElement('div');
        clickablePopupBackdrop.className = 'clickablePopup-backdrop';
        document.body.appendChild(clickablePopupBackdrop);
        
        clickablePopupBackdrop.addEventListener('click', closeclickablePopup);
    }
    return clickablePopupBackdrop;
}

// Main function to create a button with clickablePopup popup
function createclickablePopupButton(buttonElement, clickablePopupButtons) {
    buttonElement.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Close existing clickablePopup if open
        if (currentclickablePopup) {
            closeclickablePopup();
            return;
        }
        
        // Create clickablePopup popup
        const clickablePopup = document.createElement('div');
        clickablePopup.className = 'clickablePopup-popup';
        
        // Add buttons to clickablePopup
        clickablePopupButtons.forEach(buttonConfig => {
            const button = document.createElement('button');
            button.className = 'clickablePopup-button';
            
            // Add icon if provided
            if (buttonConfig.icon) {
                button.innerHTML = buttonConfig.icon + '<p>' + buttonConfig.name + '</p>';
            } else {
                button.innerHTML = '<p>' + buttonConfig.name + '</p>';
            }
            
            // Add click handler
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Execute the function
                if (typeof buttonConfig.function === 'string') {
                    // If it's a string, evaluate it
                    eval(buttonConfig.function);
                } else if (typeof buttonConfig.function === 'function') {
                    // If it's already a function, call it
                    buttonConfig.function();
                }
                
                closeclickablePopup();
            });
            
            clickablePopup.appendChild(button);
        });
        
        // Position clickablePopup
        document.body.appendChild(clickablePopup);
        positionclickablePopup(buttonElement, clickablePopup);
        
        // Show clickablePopup with animation
        setTimeout(() => {
            clickablePopup.classList.add('show');
        }, 10);
        
        // Set up backdrop
        const backdrop = createBackdrop();
        backdrop.classList.add('active');
        
        currentclickablePopup = clickablePopup;
    });
}

// Position clickablePopup relative to button
function positionclickablePopup(buttonElement, clickablePopup) {
    const buttonRect = buttonElement.getBoundingClientRect();
    const clickablePopupRect = clickablePopup.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    let left = buttonRect.right + 10; // Default: right side
    let top = buttonRect.top;
    
    // Check if there's enough space on the right
    if (left + clickablePopupRect.width > viewportWidth - 20) {
        // Not enough space on right, position on left
        left = buttonRect.left - clickablePopupRect.width - 10;
        
        // If still not enough space on left, center it
        if (left < 20) {
            left = buttonRect.left + (buttonRect.width / 2) - (clickablePopupRect.width / 2);
            top = buttonRect.bottom + 10; // Position below button
        }
    }
    
    // Ensure clickablePopup doesn't go off top or bottom of screen
    if (top + clickablePopupRect.height > viewportHeight - 20) {
        top = viewportHeight - clickablePopupRect.height - 20;
    }
    if (top < 20) {
        top = 20;
    }
    
    clickablePopup.style.left = Math.max(20, left) + 'px';
    clickablePopup.style.top = top + 'px';
}

// Close clickablePopup function
function closeclickablePopup() {
    if (currentclickablePopup) {
        currentclickablePopup.classList.remove('show');
        setTimeout(() => {
            if (currentclickablePopup && currentclickablePopup.parentNode) {
                currentclickablePopup.parentNode.removeChild(currentclickablePopup);
            }
            currentclickablePopup = null;
        }, 150);
    }
    
    if (clickablePopupBackdrop) {
        clickablePopupBackdrop.classList.remove('active');
    }
}



async function downloadImagesAsZip(imageUrls) {
    const zip = new JSZip();

    try {
        for (let i = 0; i < imageUrls.length; i++) {
            const proxyUrl = APIV4 + '/prox?url=';
            const imageUrl = imageUrls[i];
            
            const response = await fetch(proxyUrl + encodeURIComponent(imageUrl));

            // Check if the fetch was successful (status 200-299)
            if (!response.ok) {
                throw new Error(`Failed to fetch image ${i + 1}: ${response.status} ${response.statusText}`);
            }

            const blob = await response.blob();
            zip.file(`image_${i + 1}.png`, blob);
        }

        // 2. Only runs if all fetches succeeded
        const content = await zip.generateAsync({ type: "blob" });

        // 3. Trigger download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = "images_collection.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log("Download started successfully.");

    } catch (error) {
        console.error("ZIP creation aborted:", error.message);
    }
}





// Profile Effect Code

class ProfileEffectsPlayer {
    constructor() {
        this.activeEffects = new Map();
        this.loadedImages = new Map();
        this.timeouts = new Map();
        this.isPlaying = false;
    }

    async preloadImages(effects) {
        const promises = effects.map(effect => {
            return new Promise((resolve, reject) => {
                if (this.loadedImages.has(effect.src)) {
                    resolve(this.loadedImages.get(effect.src));
                    return;
                }

                const img = new Image();
                img.onload = () => {
                    this.loadedImages.set(effect.src, img);
                    resolve(img);
                };
                img.onerror = reject;
                img.src = effect.src;
            });
        });

        return Promise.all(promises);
    }

    async playEffects(container, effects) {
        if (this.isPlaying) {
            this.stopEffects(container);
        }

        this.isPlaying = true;
        
        try {
            // Select random variant index if any effects have randomizedSources
            let randomVariantIndex = null;
            for (const effect of effects) {
                if (effect.randomizedSources && effect.randomizedSources.length > 0) {
                    randomVariantIndex = Math.floor(Math.random() * effect.randomizedSources.length);
                    break;
                }
            }
            
            // Create modified effects with selected random sources
            const processedEffects = effects.map(effect => {
                const processedEffect = { ...effect };
                
                // Use randomized source if available and variant was selected
                if (randomVariantIndex !== null && 
                    effect.randomizedSources && 
                    effect.randomizedSources.length > randomVariantIndex) {
                    processedEffect.src = effect.randomizedSources[randomVariantIndex].src + '?' + Date.now() + '_' + Math.random();
                }
                
                return processedEffect;
            });
            
            // Preload all images (including randomized ones)
            await this.preloadImages(processedEffects);
            
            // Check if still playing after async operation
            if (!this.isPlaying) {
                return;
            }
            
            // Clear container
            container.innerHTML = '';
            container.style.position = 'relative';
            container.style.overflow = 'hidden';

            // Sort effects by zIndex to ensure proper layering
            const sortedEffects = [...processedEffects].sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0));

            // Schedule each effect
            sortedEffects.forEach((effect, index) => {
                this.scheduleEffect(container, effect, index);
            });

        } catch (error) {
            console.error('Error loading effect images:', error);
            this.stopEffects(container);
        }
    }

    scheduleEffect(container, effect, index) {
        const effectId = `effect_${index}_${Date.now()}`;
        
        // Schedule the effect to start
        const startTimeout = setTimeout(() => {
            if (!this.isPlaying) return;
            
            this.createEffectElement(container, effect, effectId);
            
            // Schedule removal after duration
            const removeTimeout = setTimeout(() => {
                // Check if effect should loop or stay on last frame
                if (effect.loop && this.isPlaying) {
                    if (effect.loopDelay === 0) {
                        // Keep the effect visible (don't remove it) - stays on last frame
                        return;
                    } else {
                        // Remove and schedule loop
                        this.removeEffect(container, effectId);
                        this.scheduleLoop(container, effect, effectId);
                    }
                } else {
                    // Normal removal for non-looping effects
                    this.removeEffect(container, effectId);
                }
            }, effect.duration);
            
            this.timeouts.set(`${effectId}_remove`, removeTimeout);
            
        }, effect.start);
        
        this.timeouts.set(`${effectId}_start`, startTimeout);
    }

    scheduleLoop(container, effect, baseEffectId) {
        const loopDelay = effect.loopDelay || 0;
        
        const loopTimeout = setTimeout(() => {
            if (!this.isPlaying) return;
            
            const newEffectId = `${baseEffectId}_loop_${Date.now()}`;
            this.createEffectElement(container, effect, newEffectId);
            
            // Schedule next loop cycle
            const cycleTimeout = setTimeout(() => {
                this.removeEffect(container, newEffectId);
                if (effect.loop && this.isPlaying) {
                    this.scheduleLoop(container, effect, baseEffectId);
                }
            }, effect.duration);
            
            this.timeouts.set(`${newEffectId}_cycle`, cycleTimeout);
            
        }, loopDelay);
        
        this.timeouts.set(`${baseEffectId}_loop`, loopTimeout);
    }

    createEffectElement(container, effect, effectId) {
        const img = this.loadedImages.get(effect.src);
        if (!img) return;

        const effectElement = document.createElement('img');
        effectElement.src = effect.src + '?' + Date.now() + '_' + Math.random();
        effectElement.style.position = 'absolute';
        effectElement.style.left = `${effect.position?.x ? effect.position.x : '0'}px`;
        effectElement.style.top = `${effect.position?.y ? effect.position.y : '0'}px`;
        effectElement.style.width = `100%`;
        effectElement.style.pointerEvents = 'none';
        effectElement.dataset.effectId = effectId;

        container.appendChild(effectElement);
        this.activeEffects.set(effectId, effectElement);
    }

    removeEffect(container, effectId) {
        const element = this.activeEffects.get(effectId);
        if (element && element.parentNode === container) {
            container.removeChild(element);
        }
        this.activeEffects.delete(effectId);
    }

    stopEffects(container) {
        this.isPlaying = false;
        
        // Clear all timeouts
        this.timeouts.forEach(timeout => clearTimeout(timeout));
        this.timeouts.clear();
        
        // Remove all active effects
        this.activeEffects.forEach(element => {
            if (element.parentNode === container) {
                container.removeChild(element);
            }
        });
        this.activeEffects.clear();
        
        // Clear the container to prevent empty state
        container.innerHTML = '';
    }

    destroy() {
        this.stopEffects();
        this.loadedImages.clear();
        this.timeouts.clear();
        this.activeEffects.clear();
    }
}

// Profile Effects Card Component
class ProfileEffectsCard {
    constructor(container, profileEffect, hoverTarget = null, options = {}) {
        this.container = container;
        this.profileEffect = profileEffect;
        this.player = new ProfileEffectsPlayer();
        this.isHovered = false;
        this.hoverTarget = hoverTarget || container; // Use provided hover target or default to container
        this.options = {
            startImmediately: false,
            ...options
        };
        
        this.init();
    }

    init() {
        this.container.style.position = 'relative';
        
        // Set thumbnail as default
        this.showThumbnail();
        
        // Add hover listeners to the hover target (usually the card)
        this.hoverTarget.addEventListener('mouseenter', () => this.onMouseEnter());
        this.hoverTarget.addEventListener('mouseleave', () => this.onMouseLeave());
        
        // Start immediately if requested
        if (this.options.startImmediately) {
            this.isHovered = true;
            this.onMouseEnter();
        }
    }

    showThumbnail() {
        this.container.innerHTML = `
            <img src="${this.profileEffect.thumbnailPreviewSrc}" 
                 alt="${this.profileEffect.title}"
                 style="width: 100%; height: auto; object-fit: contain; display: block;">
        `;
    }

    async onMouseEnter() {
        this.isHovered = true;
        
        if (this.profileEffect.effects && this.profileEffect.effects.length > 0) {
            try {
                await this.player.playEffects(this.container, this.profileEffect.effects);
            } catch (error) {
                console.error('Failed to play effects:', error);
                // Only show thumbnail if still hovered
                if (this.isHovered) {
                    this.showThumbnail();
                }
            }
        }
    }

    onMouseLeave() {
        this.isHovered = false;
        this.player.stopEffects(this.container);
        this.showThumbnail();
    }

    destroy() {
        this.player.destroy();
        this.hoverTarget.removeEventListener('mouseenter', this.onMouseEnter);
        this.hoverTarget.removeEventListener('mouseleave', this.onMouseLeave);
    }

    // Method to update the profile effect (useful for dynamic changes)
    updateProfileEffect(newProfileEffect, startImmediately = false) {
        // Stop current effects completely
        this.player.stopEffects(this.container);
        
        // Update the profile effect
        this.profileEffect = newProfileEffect;
        
        // Show thumbnail by default
        this.showThumbnail();
        
        // If currently hovered or start immediately requested, start new effects
        if (this.isHovered || startImmediately) {
            this.onMouseEnter();
        }
    }
}