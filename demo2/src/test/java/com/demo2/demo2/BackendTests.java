package com.demo2.demo2;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class BackendTests {

  @Mock private GameHolder gameHolder;
  @Mock private GameModel gameModel;

  @InjectMocks private Contoller classUnderTest;

  @Test
  void testPostNewGame() {
    // Arrange

    when(gameHolder.createGame("1234")).thenReturn("1234");

    // Act
    String responseMessage = classUnderTest.postNewGame("1234");

    // Assert
    assertEquals("1234", responseMessage);
  }
}
