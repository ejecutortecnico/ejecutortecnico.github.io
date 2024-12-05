import pygame
        
# Inicializar Pygame
pygame.init()

# Configuración de la ventana
screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Mi primer ventana en Pygame")

# Loop principal
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # Rellenar la pantalla con color azul
    screen.fill((0, 0, 255))
    pygame.display.flip()

pygame.quit()
            