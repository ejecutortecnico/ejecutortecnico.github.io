import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv("poblacion.csv")
x = df["Date"]
y = df["COL"]
z = df["AFG"]
t = df["CHN"]

#plt.plot(x, y)
#plt.plot(x, z)
plt.plot(x, t)
plt.xlabel('Fecha')
plt.ylabel('Poblacion')
plt.title('Gráfico simple de Matplotlib')
plt.show()