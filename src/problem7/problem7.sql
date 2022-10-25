SELECT trades.address 
FROM trades 
INNER JOIN balances ON balances.address = trades.address
WHERE (trades.block_height > 730000 AND 
(
(balances.denom = "usdc" AND balances.amount * 0.000001 >= 500) OR 
(balances.denom =  "swth" AND balances.amount * 0.00000005 >= 500) OR
(balances.denom = "tmz" THEN balances.amount * 0.003 >= 500)
) 


