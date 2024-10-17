import pandas as pd
# Crear un DataFrame
nombre = ['Ana', 'Luis', 'Carlos']
edad = [23, 34, 29]
telefono = [312341,43421,3436]
data = {'Nombre': ['Ana', 'Luis', 'Carlos'], 'Edad': [23, 34, 29],'telefono':[312341,43421,3436]}
df = pd.DataFrame(data)
print(df)
data2=pd.DataFrame([nombre,edad,telefono])
print(data2)
df.to_csv("salida.csv", index=False)