import pandas as pd


df = pd.read_csv("poblacion.csv")
#styled_df = df[["Date", "COL", "ARG"]]
#print()
#print(styled_df.to_string(index=False))
#print(df.iloc[63])
# Filtrar personas mayores de 30 años
filtro = df[df['COL'] < 30000000]
print(filtro)