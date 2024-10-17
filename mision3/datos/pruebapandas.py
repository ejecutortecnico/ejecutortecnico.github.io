import pandas as pd

labels = ["a","b","c","d","e","f","g","h","i","j"]
lista = [1,2,3,4,5,6,7,8,9,10]
print(lista)
# Crear una Serie
mi_serie = pd.Series(lista,labels)
print(mi_serie)